// JavaScript source code

// setting the min and max attributes for date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;

var nextYear = (yyyy+1) + '-' + mm + '-' + dd;
document.getElementById('date').setAttribute("min", today);
document.getElementById('date').setAttribute("max", nextYear);


//Set up an associative array
//The keys represent the tour
//The values represent the cost of the tour per adult
var tourPrices = new Array();
tourPrices["Sentosa"] = 80;
tourPrices["City Tour"] = 36;
tourPrices["River Cruise"] = 30;
tourPrices["Christmas"] = 20;

//This function finds the price of tour on the drop down selection
function getPriceOfTour() {
    var pricePerAdult = 0;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderForm"];
    //Get a reference to the select id="tourName"
    var selectedTour = theForm.elements["tourName"];
    //set price per adult equal to value chosen
    pricePerAdult = tourPrices[selectedTour.value];
    //return pricePerAdult
    return pricePerAdult;
}

//This function determines the cost of the tour selected and display in booking detail
function determineCost() {
    //call function to get price
    var pricePerAdult = getPriceOfTour();
    //display the result
    var divobj = document.getElementById("unitPrice");
    divobj.style.display = 'block';
    divobj.innerHTML = "Price of tour per adult is $" + pricePerAdult;
    displayTotalPrice();
}

//This function gets the date from the user input and display in booking detail together with total price
function getDate() {
    var divobj = document.getElementById("dateSelected");
    divobj.style.display = "block";
    divobj.innerHTML = "Date selected is " + document.getElementById("date").value;
    //call method to calculate and display total price
    //displayTotalPrice();
}

//This function gets the number of adult and children entered, calculate the total
//price for the tour and display in booking detail
function displayTotalPrice() {
    var pricePerAdult = getPriceOfTour();
    var noAdult = document.getElementById("adult").value;
    var noChild = document.getElementById("child").value;
    var totalPrice = noAdult * pricePerAdult + noChild * (pricePerAdult / 2);
    var divobj = document.getElementById("totalPrice");
    divobj.style.display = 'block';
    if (noChild > 0)
        divobj.innerHTML = "Total price for " + noAdult + " adult(s) and " +
                           noChild + " child(ren) is $" + totalPrice;
    else
        divobj.innerHTML = "Total price for " + noAdult + " adult(s) is $" +
                           totalPrice;
}

//This function displays a thank you message and disables the input fields when submit is clicked
function submitForm() {
    var custName = document.getElementById("name").value;
    var divobj = document.getElementById("finalMessage");
    divobj.style.display = 'block';
    divobj.innerHTML = "Thank you for your booking, " + custName;
    document.getElementById("tourDetail").disabled = true;
    document.getElementById("customerDetail").disabled = true;
}

//This function resets the input fields and enables them when reset is clicked
function resetForm() {
    document.getElementById("orderForm").reset();
    var divobj = document.getElementById("unitPrice");
    divobj.style.display = 'block';
    divobj.innerHTML = "No tour selected";
    divobj = document.getElementById("dateSelected");
    divobj.style.display = 'block';
    divobj.innerHTML = "";
    divobj = document.getElementById("totalPrice");
    divobj.style.display = 'block';
    divobj.innerHTML = "";
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'block';
    divobj.innerHTML = "";
    document.getElementById("tourDetail").disabled = false;
    document.getElementById("customerDetail").disabled = false;
}
