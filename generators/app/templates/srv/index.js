const express = require("express");
const app = express();
const fetch = require("node-fetch");
const { JWTStrategy } = require("@sap/xssec");
const xsenv = require("@sap/xsenv");
const passport = require("passport");
const bodyParser = require('body-parser');
const service = xsenv.getServices({ uaa: { tag: 'xsuaa' } }).uaa;

const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
const XSUAA = VCAP_SERVICES.xsuaa[0]
const API_URL = XSUAA.credentials.apiurl;

passport.use(new JWTStrategy(service));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//모든 유저
app.get('/getUsers', function (req, res) {
  if (!req.authInfo) {
    res.send("Un Authorization")
  }
  const url = `${API_URL}/Users`
  const options = {
    headers: {
      Authorization: "Bearer " + req.authInfo.getAppToken()
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      res.send(JSON.stringify(data));
    });
});

app.get('/getUser', function (req, res) {
  if (!req.authInfo) {
    res.send("Un Authorization")
  }
  const userId = req.authInfo.getTokenInfo().getUserId();
  const url = `${API_URL}/Users/${userId}`
  const options = {
    headers: {
      Authorization: "Bearer " + req.authInfo.getAppToken()
    }
  };

  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      res.send(JSON.stringify(data));
    });
    
});


app.get('/getPayload', function (req, res) {
  if (req.authInfo) {
    res.send(req.authInfo.getTokenInfo().getPayload());
  }
});

app.get('/getEmail', function (req, res) {
  if (req.authInfo) {
    res.send(req.authInfo.getEmail());
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});
