// JavaScript source code
function pizzaCost() {
    var quantity = document.getElementById("Quantity").value;
    var size1 = document.getElementById("Size1").checked;
    var size2 = document.getElementById("Size2").checked;
    var size3 = document.getElementById("Size3").checked;
    var toppings1 = document.getElementById("Toppings1").checked;
    var toppings2 = document.getElementById("Toppings2").checked;
    var toppings3 = document.getElementById("Toppings3").checked;
    var addons = document.getElementById("Addons");
    var total = 0
    if (size1) {
        total += 22;
    }
    else if (size2) {
        total += 28;
    }
    else if (size3) {
        total += 35;
    }
    if (toppings1) {
        total += 2;
    }
    if (toppings2) {
        total += 2;
    }
    if (toppings3) {
        total += 2;
    }
    if (addons[0].selected) {
        total += 5;
    }
    if (addons[1].selected) {
        total += 3;
    }
    total = total * quantity;
    document.getElementById("cost").innerHTML = "Total price of your order is $" + total;
}