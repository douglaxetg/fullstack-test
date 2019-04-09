var express = require('express');
var app = express();

//Home page
app.get('/', function (req, res) {
  res.send('Home page Fullstack 1');
});

var users = require('./js/users');

// userList page route
app.get('/userlist', function (req, res) {
  let getUserList = users.userList();
  res.header("Access-Control-Allow-Origin", "*");
  res.send(getUserList);
})

// userDetails page route
app.get('/userdetails/:id', function (req, res) {
  var id = req.params.id;
  let getUserDetails = users.userDetails(id);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(getUserDetails);
})

app.listen(3001);