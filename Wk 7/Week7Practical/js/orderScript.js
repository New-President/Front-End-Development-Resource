// JavaScript source code
function dateSet() {
    var today = new Date();
    var maxdate = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var mm2 = maxdate.getMonth() + 2;
    var yyyy = today.getFullYear();
    var yyyy2 = maxdate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    if (mm2 < 10) {
        mm2 = '0' + mm2;
    }
    else if (mm2 > 12) {
        mm2 -= 12
        mm2 = '0' + mm2
        yyyy2 += 1
    }

    today = yyyy + '-' + mm + '-' + dd;
    maxdate = yyyy2 + '-' + mm2 + '-' + dd;
    document.getElementById("Date").setAttribute("min", today);
    document.getElementById("Date").setAttribute("max", maxdate);
}
function showFinalMessage() {
    var name = document.getElementById("Name").value;
    document.getElementById("acknowledgement").innerHTML = "Thank you for your order, " + name;
}

function clearMessage() {
    document.getElementById("acknowledgement").innerHTML = "";
}

function showPrice() {
    var quantity = document.getElementById("Quantity").value;
    var item = document.getElementById("Item").value;
    var price = 0;
    var bbp = 3.95;
    var sn = 7.95;
    var total = 0;
    if (item == "Black bean purses") {
        total = bbp * quantity;
        price = bbp;
    }
    else if (item == "Southwestern Napoleons") {
        total = sn * quantity;
        price = sn;
    }
    document.getElementById("cost").innerHTML = "Your ordered " + quantity + " " + item + ". Price = $" + price + " x " + quantity + " = $" + total;
}

function showDate() {
    var date = new Date()
    date = document.getElementById("Date").value;
    document.getElementById("collectiondate").innerHTML = "Collection date: " + date;
}