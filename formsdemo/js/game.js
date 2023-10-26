//this is for truths and lies

//global variable
let fname = "";

//greet fucntion
function greet() {
    let geetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value
    let age = document.getElementById("age").value

    //show the result
    geetParagraph.innerHTML = "Greetings " + age + " years old " + fname + " " + lname + "!"

}

//function for my trivia game
function trivia() {
    //get handle to the result paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //result of selected trivia asnwer
    let chocolateSelected = document.getElementById("chocolate").checked;

    let tunaSelected = document.getElementById("tuna").checked;

    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. ur silly.";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. tuna is stinky";
    }
    else {
        triviaAnswer.innerHTML = fname + ", correct! go off.";
    }

}

function checkbox() {
    //get handle to the result paragraph
    let checkboxSelected = document.getElementById("trivia-answer");

    //result of selected trivia asnwer
    let chocolateSelected = document.getElementById("chocolate").checked;

    let tunaSelected = document.getElementById("tuna").checked;

    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. ur silly.";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. tuna is stinky";
    }
    else {
        triviaAnswer.innerHTML = fname + ", correct! go off.";
    }
}