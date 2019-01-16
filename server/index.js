const bodyParser = require('body-parser');
const express = require('express');
const OAuthServer = require('express-oauth-server');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
const MemoryStore = require('./model.js')
const memoryStore = new MemoryStore()

app.oauth = new OAuthServer({
	model: memoryStore
})

const allowJson = function(req, res, next) {
  if (req.is('json'))
    req.headers['content-type'] = 'application/x-www-form-urlencoded';

  next();
};


app.post('/oauth/token', allowJson, app.oauth.token());

// Get secret.
app.get('/api/categories', app.oauth.authenticate(), function (req, res) {
  let courses = [];
  fs.readFile(`${__dirname}/json/categories.json`, (err, data) => {
    if (err) throw err;
    courses = JSON.parse(data);
    res.json({ data: courses });
  });
});
// Get secret.
app.get('/api/verticals', app.oauth.authenticate(), function (req, res) {
  let verticals = [];
  fs.readFile(`${__dirname}/json/verticals.json`, (err, data) => {
    if (err) throw err;
    verticals = JSON.parse(data);
    res.json({ data: verticals });
  });
});
// Get secret.
app.get('/api/courses', app.oauth.authenticate(), function (req, res) {
  let courses = [];
  fs.readFile(`${__dirname}/json/courses.json`, (err, data) => {
    if (err) throw err;
    courses = JSON.parse(data);
    res.json({ data: courses });
  });
});

app.listen(8080, () => {
  console.log("Running 8080")
});