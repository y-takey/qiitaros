# qiitaros

https://y-takey.github.io/qiitaros

## Data attributes

### post_summary

| attribute | type | example |
|--|--|--|
| uuid | String | "abcdef12345678901234" |
| title | String | "ほげほげ" |
| created_at | Datetime | "2017-05-09 20:47:07 +0900" |
| stock_count | Number | 10 |
| comment_count | Number | 20 |
| user | String | "foo" |
| tags | Array<String> | ["Java","Ruby"] |
| title_char_count | Number | 32 |
| body_char_count | Number | 54 |
| year | Number | 2017 |
| month | Number | 5 |
| day | Number | 9 |
| wday | String | "Mon" |
| hour | Number | 20 |
| minute | Number | 14 |


### tag_summary

| attribute | type | example |
|--|--|--|
| name | String | "javascript" |
| post_num | Number | 10 |
| stock_count | Number | 20 |
| comment_count | Number | 30 |

## Development

### To run

* install the dependencies:

```
yarn
```

```
yarn run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package and deploy to github-pages

```
yarn run deploy
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```
