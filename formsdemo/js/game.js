//global variable
let fname = "";

//greet fucntion
function greet() {
    let geetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show the result
    geetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";

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



//2 truths and a lieee
function truth() {
    //get handle to the result paragraph
    let truthAnswer = document.getElementById("truth-answer");

    //result of selected trivia asnwer
    let dogSelected = document.getElementById("dog").checked;

    let superstitiousSelected = document.getElementById("superstitious").checked;

    let picklesSelected = document.getElementById("pickles").checked;

    if (picklesSelected) {
        truthAnswer.innerHTML = fname + ", its true, i luv pickles";
    } else if (superstitiousSelected) {
        truthAnswer.innerHTML = fname + ", its true, i'm pretty superstitious";
    }
    else {
        truthAnswer.innerHTML = fname + ", u got me! i don't have a dog.";
    }

}


///two truths and lie but check the two truths
function truth2() {
    //get handle to the result paragraph
    let truth2answer = document.getElementById("truth2-answer");

    //result of selected trivia asnwer
    let taylorSelected = document.getElementById("taylor").checked;

    let ticketsSelected = document.getElementById("tickets").checked;

    let hellokittySelected = document.getElementById("hellokitty").checked;

    if (ticketsSelected && hellokittySelected && !taylorSelected) {

        truth2answer.innerHTML = fname + ", you are correct!";

    } else if (taylorSelected && ticketsSelected && !hellokittySelected) {
        truth2answer.innerHTML = fname + ", only of these is true! i don't love taylor";
    } else {
        truth2answer.innerHTML = fname + ", try again!";
    }

}

