# generator-btp-open-api-connect [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage percentage][coveralls-image]][coveralls-url]


> 안녕하세욥

사전에 BTP의 계정과 Nodejs가 필요합니다

## Installation
```bash
npm install -g yo
npm install -g generator-btp-open-api-connect
```

Template 생성

```bash
yo btp-open-api-connect
```


프로젝트 초기화, BTP CF에 배포

```bash
cf login
cd <your dir>
npm run initProject
npm run deploy
```


[npm-image]: https://badge.fury.io/js/generator-btp-open-api-connect.svg
[npm-url]: https://npmjs.org/package/generator-btp-open-api-connect
[travis-image]: https://travis-ci.com/whrudgns13/generator-btp-open-api-connect.svg?branch=master
[travis-url]: https://travis-ci.com/whrudgns13/generator-btp-open-api-connect
[daviddm-image]: https://david-dm.org/whrudgns13/generator-btp-open-api-connect.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/whrudgns13/generator-btp-open-api-connect
[coveralls-image]: https://coveralls.io/repos/whrudgns13/generator-btp-open-api-connect/badge.svg
[coveralls-url]: https://coveralls.io/r/whrudgns13/generator-btp-open-api-connect
