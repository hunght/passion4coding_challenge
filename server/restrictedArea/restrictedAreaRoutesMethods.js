const fs = require('fs');
function getCourses(req, res) {
  let courses = [];
  fs.readFile(`${appRoot}/json/courses.json`, (err, data) => {  
      if (err) throw err;
      courses = JSON.parse(data);
      res.json({ data: courses });
  });
}
function getCategories(req, res) {
  let categories = [];
  fs.readFile(`${appRoot}/json/categories.json`, (err, data) => {  
      if (err) throw err;
      categories = JSON.parse(data);
      res.json({ data: categories });
  });
}
function getVerticals(req, res) {
  let verticals = [];
  fs.readFile(`${appRoot}/json/verticals.json`, (err, data) => {  
      if (err) throw err;
      verticals = JSON.parse(data);
      res.json({ data: verticals });
  });
}
module.exports =  {
  getCourses: getCourses,
  getCategories: getCategories,
  getVerticals: getVerticals,
}