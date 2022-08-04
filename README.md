# generator-btp-open-api-connect [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage percentage][coveralls-image]][coveralls-url]


> 안녕하세욥

사전에 BTP의 계정과 Nodejs가 필요합니다

## Installation
```bash
npm install -g yo
npm install -g generator-btp-open-api-connect
```

## Template 생성

```bash
yo btp-open-api-connect
```


## 프로젝트 초기화, BTP CF에 배포

```bash
cf login
cd <your dir>
npm run initProject
npm run deploy_all
```


## 폴더구조
```bash
rootDir
    approuter
    security
    srv
    web
-------------
approuter 어플리케이션의 진입점
security에는 공통적으로 사용할 보안파일 xs-security.json이 들어있습니다
srv에는 index.js에서 Open API를 사용할 REST API를 정의
web에는 btp에 등록된 유저, 현재 들어온 유저의 정보와 role을 화면에 보이도록 만들어놨습니다
```


[npm-image]: https://badge.fury.io/js/generator-btp-open-api-connect.svg
[npm-url]: https://npmjs.org/package/generator-btp-open-api-connect
[travis-image]: https://travis-ci.com/whrudgns13/generator-btp-open-api-connect.svg?branch=master
[travis-url]: https://travis-ci.com/whrudgns13/generator-btp-open-api-connect
[daviddm-image]: https://david-dm.org/whrudgns13/generator-btp-open-api-connect.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/whrudgns13/generator-btp-open-api-connect
[coveralls-image]: https://coveralls.io/repos/whrudgns13/generator-btp-open-api-connect/badge.svg
[coveralls-url]: https://coveralls.io/r/whrudgns13/generator-btp-open-api-connect
