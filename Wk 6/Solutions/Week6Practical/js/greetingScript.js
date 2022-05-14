// JavaScript source code
var username = prompt("Enter your name: ");

var date = new Date();

var hour = date.getHours();

var message;
if (hour < 12)
    message = "Good morning, ";
else
    message = "Good afternoon, ";

alert(message + username + "!");

document.getElementById("greeting").innerHTML = message + username;

