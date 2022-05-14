// JavaScript source code
var cutOffPoint = new Array();
cutOffPoint["ACJC"] = 8;
cutOffPoint["AJC"] = 11;
cutOffPoint["CJC"] = 10;
cutOffPoint["EJC"] = 9;
cutOffPoint["HCI"] = 4;
cutOffPoint["NJC"] = 7;
cutOffPoint["NYJC"] = 7;
cutOffPoint["SAJC"] = 10;
cutOffPoint["TJC"] = 9;
cutOffPoint["VJC"] = 7;

function determinPoints() {
    var selectedPoint = 0;

    //Get a reference to the select id "schoolName"
    var selectedJC = document.getElementById("schoolName").value;
    //Get the cut off point based on the school name
    selectedPoint = cutOffPoint[selectedJC];

    //Display the result
    if (selectedJC == "None")
        document.getElementById("cutoff").innerHTML = "Please select a school";
    else    
        document.getElementById("cutoff").innerHTML = "Entry Point for " + selectedJC + " is " + selectedPoint;
}

