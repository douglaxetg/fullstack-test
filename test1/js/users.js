let json = require('../users/listusers.json');

//Show complete user list
exports.userList = function userList(){
    let myJson = JSON.stringify(json);
    let myData = JSON.parse(myJson);
    return(myData);
}

//Show a user by id
exports.userDetails = function userDetails(id){
    let myJson = JSON.stringify(json);
    let myData = JSON.parse(myJson);
    return(myData.users[id]);
}