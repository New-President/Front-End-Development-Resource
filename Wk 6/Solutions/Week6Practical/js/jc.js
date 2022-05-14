var jc_list = ["ACJC", "AJC", "CJC", "EJC", "HCI", "NJC", "NYJC", "SAJC", "TJC", "VJC"];
var jc_points = [8, 11, 10, 9, 4, 7, 7, 10, 9, 7]
var jc = document.getElementById("schoolName").value;


if (jc != "Select a JC") {
    points = jc_points[jc_list.indexOf(jc)];
    var line = document.createElement("h3");
    line.append("Entry Point for " + jc + "is " + points);
    var element = document.querySelector("jcform");
    element.append(line);
    document.querySelector("cutoff").style.cssText = "background-color: yellow; padding: 10px;"

}

else {
    var line = document.createElement("h3");
    line.append("Select a JC");
    var element = document.querySelector("jcform");
    element.append(line);
    document.querySelector("cutoff").style.cssText = "background-color: yellow; padding: 10px;"
}