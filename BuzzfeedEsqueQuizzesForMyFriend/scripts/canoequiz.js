$(document).ready(function(){
    // Example Answer w/ scores
    const exampleQuestions = {
        "(1) Do you like cats or dogs?" : {
            "Cats" : 10,
            "Dogs" : 15
        },
        "(2) Are you over 18?" : {
            "Yes" : 1000,
            "No" : 0
        }
    }

    let quizDiv = $("#questionaire");

    console.log("Page loaded!");

    console.log(quizDiv.id + " is the class of the questionaire div *hopefully");

    let btn = $("<button>", {
        "type":"button",
        "onclick":"alert(\"Surprise!\")",
        "text":"Click Here"
    })
    quizDiv.prepend(btn);
})