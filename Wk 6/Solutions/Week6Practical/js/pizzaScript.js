// JavaScript source code

// Setting minimum date for Date entry
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = "0" + dd;
}
if (mm < 10) {
    mm = "0" + mm;
}
var mm2 = mm + 1;
if (mm2 > 12) mm2 -= 12;
var yyyy2 = yyyy;
if (mm2 < mm) {
    yyyy2++;
}
if (mm2 < 10) {
    mm2 = "0" + mm2;
}
var sToday = yyyy + "-" + mm + "-" + dd;
var sOneMonthLater = yyyy2 + "-" + mm2 + "-" + dd;
document.getElementById("iDate").setAttribute("min", sToday);
document.getElementById("iDate").setAttribute("max", sOneMonthLater);

// setting pizza price
var pizzaPrices = new Array();
pizzaPrices["small"] = 22;
pizzaPrices["medium"] = 28;
pizzaPrices["large"] = 35;

var addOnPrices = new Array();
addOnPrices["wings"] = 5; 
addOnPrices["garlicBread"] = 3;

function getAddOnPrice() {
    var addOns = document.getElementById("addons");
    var addOnPrice = 0;
    for (var i = 0; i < addOns.length; i++)
    {
        if (addOns[i].selected)
            addOnPrice += addOnPrices[addOns[i].value];
    }
    return addOnPrice;
}

function getNumberOfToppings() {
    var numerOfTopping = 0;
    var theForm = document.forms["pizzaform"];
    var toppings = theForm.elements["topping"];
    for (var i = 0; i < toppings.length; i++) {
        if (toppings[i].checked)
            numerOfTopping++;
    }
    return numerOfTopping;
}

function getPizzaSizePrice() {
    var pizzaSizePrice = 0;
    var theForm = document.forms["pizzaform"];
    var pizzaSize = theForm.elements["size"];
    for (var i = 0; i < pizzaSize.length; i++) {
        if (pizzaSize[i].checked) {
            pizzaSizePrice = pizzaPrices[pizzaSize[i].value];
            break;
        }
    }
    return pizzaSizePrice;
}

function calculateTotal() {
    var pizzaSizePrice = getPizzaSizePrice();
    var toppingPrice = getNumberOfToppings() * 2;  // $2 per topping
    var addOnPrice = getAddOnPrice();
    var qty = document.getElementById("quantity").value;
    var pizzaPrice = (pizzaSizePrice + toppingPrice + addOnPrice) * qty;
    
    var divObj = document.getElementById("totalPrice");
    divObj.style.display = "block";
    divObj.innerHTML = "Total price for your order is $" + pizzaPrice;
}

function hideTotal() {
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}

function submitForm() {
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    divObj.innerHTML = "Thank you for choosing us";
}

function resetForm() {
    document.getElementById("pizzaform").reset();
    hideTotal();
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'none';
}