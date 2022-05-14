// JavaScript source code
function showFinalMessage() {
    var name = document.getElementById("Name").value;
    var day1 = document.getElementById("Activities Attending1").checked;
    var day2 = document.getElementById("Activities Attending2").checked;
    var day3 = document.getElementById("Activities Attending3").checked;
    var day11 = "";
    var day22 = "";
    var day33 = "";
    if (day1) {
        day11 = ", Day 1 "
    }
    if (day2) {
        day22 = ", Day 2 "
    }
    if (day3) {
        day33 = ", Day 3 ";
    }
    document.getElementById("finalmsg").innerHTML = "Thanks " + name + ". You will be attending" + day11 + day22 + day33 + "Open House."
}