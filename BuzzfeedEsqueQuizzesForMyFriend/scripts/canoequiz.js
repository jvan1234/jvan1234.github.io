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

let score = 0;

function loadQuestion(para, div, num)
{
    $("button").remove(); // Removes all button elements to make room for the next quiz

    if (num < Object.keys(exampleQuestions).length + 1)
    {
        // Modify the paragraph text to represent the current question the user is on
        para.text(exampleQuestions[num].question);

        // Use a for loop to iterate through all possible answers, adding a button that the user
        for (const answer of Object.keys(exampleQuestions[num].ans))
        {
            let btn = $("<button>", {
            "type":"button",
            "text":answer,
            "value":exampleQuestions[num].ans[answer]
            });
            btn.click(function(){
                score += $(this).val();
                alert($(this).val());
                loadQuestion(para, div, num+1);
            });
            div.append(btn);
        }
    }
    else
    {
        para.text("Final score: " + score);
    }
}

$(document).ready(function(){
    let quizDiv = $("#questionaire");
    let questionTxt = $("#question");
    console.log("Page loaded!");

    console.log(quizDiv.id + " is the class of the questionaire div *hopefully");
    
    loadQuestion(questionTxt, quizDiv, 1);
})