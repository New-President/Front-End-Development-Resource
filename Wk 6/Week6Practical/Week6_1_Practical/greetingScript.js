// JavaScript source code
var name = prompt("Please enter your name");
var date = new Date();
if (date.getHours() + 1 >= 12) {
    alert("Good afternoon, " + name + "!");
}
else {
    alert("Good morning, " + name + "!");
}