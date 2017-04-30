# Qiita api(v1) の制限: 150req/h
# 以下のAPIで残りリクエスト可能数が分かる。
# $ curl https://qiita.com/api/v1/rate_limit
require "net/http"
require "json"
require "date"

WDAYS = %w(Sun Mon Tue Wed Thu Fri Sat)
ENDPOINT = "https://qiita.com/api/v1"
PER_PAGE = 100
CONDITION = { from: "2017-04-01", to: "2017-04-30" }
CONDITION_STEP = 10
OUTPUT_FILENAME_POSTS = "post_summary"
OUTPUT_FILENAME_TAGS = "tag_summary"
FILE_SUFFIX = CONDITION.map { |_k, v| v.slice(1..-1) }.join("_")
PARSE_FIELDS = %w(uuid title created_at stock_count comment_count)

@stored_posts = {}

def request(from, to, page)
  query = {
    page: page,
    per_page: PER_PAGE,
    q: [">=#{from}", "<=#{to}"].map { |v| "created:#{v}" }.join("%20")
  }.map { |entry| entry.join("=") }.join("&")

  Net::HTTP.get_response(URI.parse("#{ENDPOINT}/search?#{query}"))
end

def parse_end_page(link)
  return 1 unless link

  last_uri = link.split(", ").last.split("; ").first[1..-2]
  uri = URI::parse(last_uri)
  query = Hash[URI::decode_www_form(uri.query)]
  query["page"].to_i
end

def summarize(posts)
  posts.map do |post|
    next unless post.is_a?(Hash)
    next if @stored_posts.key?(post["uuid"])
    @stored_posts[post["uuid"]] = true

    ret = PARSE_FIELDS.zip(post.values_at(*PARSE_FIELDS)).to_h
    created = DateTime.parse(ret["created_at"])
    ret.update(
      user: post["user"]["url_name"],
      tags: post["tags"].map { |tag| tag["name"] },
      title_char_count: post["title"].size,
      body_char_count: post["body"].size,
      year: created.year,
      month: created.month,
      day: created.day,
      wday: WDAYS[created.wday],
      hour: created.hour,
      minute: created.minute.round(-1),
    )
  end.compact
end

def output(file_name, contents)
  File.open("#{file_name}_#{FILE_SUFFIX}.json", "w") do |f|
    f.write(contents.to_json)
  end
end

posts = []
# ページ数の最大は50なので、その範囲に収まるように10日刻みで取得する。
from = Date.parse(CONDITION[:from])
stopper = Date.parse(CONDITION[:to])
loop do
  temp_stop = from + CONDITION_STEP
  temp_stop = stopper if temp_stop >= stopper
  current = 1
  stop = nil
  loop do
    puts "[REQUEST] term: #{from} - #{temp_stop}, page: #{current}/#{stop || 'x'} ..."
    res = request(from, temp_stop, current)
    posts.push(*summarize(JSON.parse(res.value || res.body)))
    stop ||= parse_end_page(res.header["link"])
    break if current >= stop
    current += 1
  end
  break if temp_stop >= stopper
  from = temp_stop
end

puts "[RESPONSE] total length: #{posts.length}"

output(OUTPUT_FILENAME_POSTS, posts)

tags = {}
posts.each do |post|
  post[:tags].each do |tag|
    entry = tags[tag] ||= { post_num: 0, stock_count: 0, comment_count: 0}
    entry[:post_num] += 1
    entry[:stock_count] += post["stock_count"]
    entry[:comment_count] += post["comment_count"]
  end
end

output(OUTPUT_FILENAME_TAGS, tags)
