// Example Answer w/ scores
const exampleQuestions = {
    1 : {
        "question" : "(1) Do you like cats or dogs?",
        "ans" : {
            "Cats" : 10,
            "Dogs" : 15
        }
    },
    2 : {
        "question" : "(2) Are you over 18?",
        "ans" : {
            "Yes" : 1000,
            "No" : 0
        }
    }
}

function myFunc()
{
    alert("Hello!");
    return 5;
}

function loadQuestion(para, div, num)
{
    para.text(exampleQuestions[num].question);
    // Blank for now!!
    for (const answer of Object.keys(exampleQuestions[1].ans))
    {
        let btn = $("<button>", {
        "type":"button",
        "text":answer
        });
        btn.click(function(){
            alert("Button has been pressed!!");
        });
        div.append(btn);
    }
}

$(document).ready(function(){
    let quizDiv = $("#questionaire");
    let questionTxt = $("#question");
    console.log("Page loaded!");

    console.log(quizDiv.id + " is the class of the questionaire div *hopefully");
    
    loadQuestion(questionTxt, quizDiv, 1);
})