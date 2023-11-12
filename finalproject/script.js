//function for my trivia game
function trivia() {
    //get handle to the result paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    //result of selected trivia asnwer
    let sunpatioSelected = document.getElementById("sunpatio").checked;

    let moonlightmysterySelected = document.getElementById("moonlightmystery").checked;

    let alongvacationSelected = document.getElementById("alongvacation").checked;

    if (sunpatioSelected) {
        //message
        triviaAnswer.innerHTML = "1983 album by Pedro & Capricious";
    }

    else if (moonlightmysterySelected) {
        triviaAnswer.innerHTML = "1980 album by Issei Okamoto";
    }


    else {
        triviaAnswer.innerHTML = "1981 album by Eiichi Ohtaki";

    }


    triviaAnswer.style.fontFamily = "articulat-cf, sans-serif"; // Change 

}


