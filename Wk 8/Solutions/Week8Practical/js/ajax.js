// JavaScript source code for AJAXDemo.html
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           // readyState 4: request finished and response is ready
           // status 200: "OK"

            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "txt/ajax_info.txt", true);
    xhttp.send();
}



