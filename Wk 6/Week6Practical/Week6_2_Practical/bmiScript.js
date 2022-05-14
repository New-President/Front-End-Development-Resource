// JavaScript source code
function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height * height);
    var status = "";
    if (bmi < 18.5) {
        status = "under weight";
    }
    else if (bmi <= 23) {
        status = "normal weight";
    }
    else if (bmi <= 27.5) {
        status = "over weight";
    }
    else if (bmi > 27.5) {
        status = "obese";
    }
    document.getElementById("output").innerHTML = "Your BMI is " + bmi.toFixed(2) + ". You are " + status;
}