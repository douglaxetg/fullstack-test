var express = require('express');
var app = express();

//Home page
app.get('/', function (req, res) {
  res.send('Home page Fullstack 1');
});

var users = require('./js/users');
let getUserList = users.userList();
let getUserDetails = users.userDetails(5);

// userList page route
app.get('/userlist', function (req, res) {
  res.send(getUserList);
})

// userDetails page route
app.get('/userDetails', function (req, res) {
  res.send(getUserDetails);
})

app.listen(3000);