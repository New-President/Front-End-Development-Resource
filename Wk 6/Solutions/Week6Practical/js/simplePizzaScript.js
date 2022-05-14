// JavaScript source code
var pizzaPrices = new Array();
pizzaPrices["small"] = 22;
pizzaPrices["medium"] = 28;
pizzaPrices["large"] = 35;

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
    var qty = document.getElementById("quantity").value;
    
    var divObj = document.getElementById("totalPrice");
    divObj.innerHTML = "Total price for your order is $" + (pizzaSizePrice*qty);
}

