function myFunc()
{
    return 0
}

$(document).ready(function(){
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

    let quizDiv = $("#questionaire");
    let questionTxt = $("#question");
    console.log("Page loaded!");

    console.log(quizDiv.id + " is the class of the questionaire div *hopefully");
    questionTxt.text(exampleQuestions[1].question);
    


    for (const answer of Object.keys(exampleQuestions[1].ans))
    {
        let btn = $("<button>", {
        "type":"button",
        "onclick":"alert(" + exampleQuestions[1].ans[answer] + " " + myFunc() +");",
        "text":answer
        })
        quizDiv.append(btn);
    }
})