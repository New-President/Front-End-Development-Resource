const input = document.querySelector("#input");
const button = document.querySelector("button");
const output = document.querySelector("#output");


function xss() {
    output.innerHTML = "";
    inVal = input.value.toLowerCase();
    codeOutput(`${inVal}`);
    
}

function codeOutput(outputCode) {
  output.innerHTML = outputCode;
}

button.addEventListener("click", xss);
