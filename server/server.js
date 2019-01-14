// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const bodyParser = require('body-parser');
const fs = require('fs');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
const port = process.env.PORT || 8080;        // set our port

// REGISTER OUR ROUTES -------------------------------
const router = express.Router();
router.route('/courses')

    .get(function(req, res) {
        let courses = [];
        fs.readFile(`${__dirname}/json/courses.json`, (err, data) => {  
            if (err) throw err;
            courses = JSON.parse(data);
            res.json({ data: courses });
        });
    });
router.route('/categories')

    .get(function(req, res) {
        let courses = [];
        fs.readFile(`${__dirname}/json/categories.json`, (err, data) => {  
            if (err) throw err;
            courses = JSON.parse(data);
            res.json({ data: courses });
        });
    });
router.route('/verticals')

    .get(function(req, res) {
        let courses = [];
        fs.readFile(`${__dirname}/json/verticals.json`, (err, data) => {  
            if (err) throw err;
            courses = JSON.parse(data);
            res.json({ data: courses });
        });
    });
router.route('/sign-in')
.post(function(req, res) {
    res.json({ data: {} });
});
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
