let div = document.querySelector("div");
let submit = document.querySelector("button");
let greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Konnichiwa"];


submit.addEventListener("click", function() {
    let userInput = document.querySelector("input").value;


    // Do Now: Complete tasks 1-5.

    if (userInput === "English") {
        div.innerHTML = "Hello"; // 1. Replace empty string with correct array element
    } else if (userInput === "Spanish") {
        div.innerHTML = "Hola"; // 2. Replace empty string with correct array element
    } else if (userInput === "French") {
        div.innerHTML = "Bonjour"; // 3. Replace empty string with correct array element
    } else if (userInput === "German") {
        div.innerHTML = "Hallo"; // 4. Replace empty string with correct array element
    } else if (userInput === "Japanese") {
        div.innerHTML = "Konnichiwa"; // 5. Replace empty string with correct array element
    } else {
        div.innerHTML = "Apologies, I do not support that language.";
    }

});