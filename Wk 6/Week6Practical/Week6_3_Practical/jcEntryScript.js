// JavaScript source code
function determinPoints() {
    var sch = document.getElementById("schoolName").value;
    var point = "";
    if (sch == "ACJC") {
        point = "8";
    }
    else if (sch == "AJC") {
        point = "11";
    }
    else if (sch == "CJC") {
        point == "10";
    }
    else if (sch == "EJC") {
        point = "9";
    }
    else if (sch == "HCI") {
        point = "4";
    }
    else if (sch == "NJC") {
        point = "7";
    }
    else if (sch == "NYJC") {
        point = "7";
    }
    else if (sch == "SAJC") {
        point = "10";
    }
    else if (sch == "TJC") {
        point = "9";
    }
    else if (sch == "VJC") {
        point = "7";
    }
    if (sch == "None") {
        document.getElementById("cutoff").innerHTML = "Select a JC";
    }
    else {
        document.getElementById("cutoff").innerHTML = "Entry point for " + sch + " is " + point;
    }
}