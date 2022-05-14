// JavaScript source code

function calculateBMI() 
{
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var bmi = weight / (height * height);
    if (bmi < 18.5)
        message = "under weight";
    else if (bmi < 23)
        message = "normal weight";
    else if (bmi < 27.5)
        message = "over weight";
    else
        message = "obese";
    document.getElementById("output").innerHTML = "Your BMI is " + bmi.toFixed(2) + ". You are " + message;
}
