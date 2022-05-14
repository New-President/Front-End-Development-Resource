// JavaScript source code
var d = "";
var p = "";
var e = "";

function dateSet() { //set date
    var today = new Date();
    var maxdate = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var yyyy2 = maxdate.getFullYear() + 1;

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    maxdate = yyyy2 + '-' + mm + '-' + dd;
    document.getElementById("Date").setAttribute("min", today);
    document.getElementById("Date").setAttribute("max", maxdate);
}

function showPrice() { //calculate price
    var tour = document.getElementById("Name of Tour").value;
    var adult = document.getElementById("Adult").value;
    var child = document.getElementById("Child").value;
    var price = 0;
    var tprice = 0;
    if (tour == "Beautiful Sentosa Island Afternoon Tour") {
        price += 80;
    }
    else if (tour == "Half Day City Tour") {
        price += 36;
    }
    else if (tour == "Singapore River Cruise") {
        price += 30;
    }
    else if (tour == "Christmas Light-Up Tour") {
        price += 20;
    }
    tprice = adult * price + child * (price / 2);
    p = "Price of tour per adult is $" + price + "<br/>Total price for " + adult + " adult(s) and " + child + " child(ren) is $" + tprice;
    var all = p + d + e;
    document.getElementById("tourjs").innerHTML = all;
}

function showDate() { // show date only
    var date = new Date()
    date = document.getElementById("Date").value;
    d = "<br/>Date selected is " + date;
    var all = p + d + e;
    document.getElementById("tourjs").innerHTML = all;
}

function showFinalMessage() { // show message after submit
    var name = document.getElementById("Name").value;
    e = "<br/>Thank you for your booking, " + name;
    var all = p + d + e;
    document.getElementById("tourjs").innerHTML = all;
    document.getElementById("Date").disabled = true;
    document.getElementById("Adult").disabled = true;
    document.getElementById("Child").disabled = true;
    document.getElementById("Name of Tour").disabled = true;
    document.getElementById("Name").disabled = true;
    document.getElementById("Email").disabled = true;
}

function clearMessage() { // reset
    document.getElementById("tourjs").innerHTML = "No tour selected";
    document.getElementById("Date").disabled = false;
    document.getElementById("Adult").disabled = false;
    document.getElementById("Child").disabled = false;
    document.getElementById("Name of Tour").disabled = false;
    document.getElementById("Name").disabled = false;
    document.getElementById("Email").disabled = false;
    e = "";
    d = "";
    p = "";
}