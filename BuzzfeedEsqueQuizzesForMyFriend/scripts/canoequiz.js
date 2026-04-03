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

// Questions provided to me by Remy
const canoe = {
    // Format for a question:
    /**
     * # : {
     *  "question" : "Question Text"
     *  "ans" : {
     *      "Answer 1" : #,
     *      "Answer 2" : #
     *  }
     * }
     */
    1 : {
        "question" : "Swimming",
        "ans" : {
            "Cannot swim" : 0,
            "Weak swimmer" : 1,
            "Average swimmer" : 2,
            "Strong swimmer" : 3
        }
    },
    2 : {
        "question" : "Stamina",
        "ans" : {
            "Cannot run mile in less than 10 minutes" : 0,
            "Can run a mile in 7-10 minutes" : 1,
            "Can run a mile in less than 7 minutes" : 2
        }
    },
    3 : {
        "question" : "Upper Body Strength",
        "ans" : {
            "Cannot do 15 push-ups" : 0,
            "Can do 16-25 push-ups" : 1,
            "Can do more than 25 push-ups" : 2
        }
    },
    4 : {
        "question" : "Boat Control",
        "ans" : {
            "Can keep boat fairly straight" : 0,
            "Can manoeuvre in moving water; can avoid obstacles" : 1,
            "Can manoeuvre in heavy water; knows how to work with the current" : 2,
            "Finesse in boat placement in all types of water, uses current to maximum advantage" : 3
        }
    },
    5 : {
        "question" : "Aggressiveness",
        "ans" : {
            "Does not play or work river at all" : 0,
            "Timid; plays a little on familiar streams" : 1,
            "Plays a lot; works most rivers hard" : 2,
            "Plays in heavy water with grace and confidence" : 3
        }
    },
    6 : {
        "question" : "Eddy Turns",
        "ans" : {
            "Has difficulty making eddt turns from moderate current" : 0,
            "Can make eddy turns in either direction from modrate current; can enter moderate current from eddy" : 1,
            "Can catch medium eddies in either direction from heavy current; can enter very swift current from eddy" : 2,
            "Can catch small eddies in heavy current" : 3
        }
    },
    7 : {
        "question" : "Ferrying",
        "ans" : {
            "Cannot Ferry" : 0,
            "Can ferry upstream and downstream in moderate current" : 1,
            "Can ferry upstream in heavy current; can ferry downstream in moderate current" : 2,
            "Can ferry upstream and downstream in heavy current" : 3
        }
    },
    8 : {
        "question" : "Water Reading",
        "ans" : {
            "Often in error" : 0,
            "Can plan route in short rapids with several well spaced obstacles" : 1,
            "Can confidently run lead in continuous Class 2; can predict the effects of waves and holes on boat" : 2,
            "Can fonfidently run lead in toncunous Class 3; has knowledge to predict and handle the effeect of big hydraulics, side currents, and turning drops (eddits well below the level of the main current)" : 3
        }
    },
    9 : {
        "question" : "Judgement",
        "ans" : {
            "Often in error" : 0,
            "Has average ability to analyze difficulty of rapids" : 1,
            "Has good ability to analyze difficulty of rapids and make independent judgements as to which should not be run" : 2,
            "Has the ability to assist fellow paddlers in evaluating the difficulty of rapids; can explain subtleties to paddlers with less experience" : 3
        }
    },
    10 : {
        "question" : "Bracing",
        "ans" : {
            "Has difficulty bracing in class 2 rivers" : 0,
            "Can correctly execute bracing strokes in class 2 water" : 1,
            "Can correcly brace in intermittent whitewater with medium waves and vertial drops of one metre or less" : 2,
            "Can brace effectively in continuous whitewater with lrage waves and large vertical drops (1.3 metres and up)" : 3
        }
    },
    11 : {
        "question" : "Rescue Ability",
        "ans" : {
            "Self rescue in flatwater" : 0,
            "Self rescue in mild whitewater" : 1,
            "Self rescue in Class 3; can assist others in mild whitewater" : 2,
            "Can assist others in heavy whitewater" : 3
        }
    },
    12 : {
        "question" : "Rolling ability",
        "ans" : {
            "Can only roll in pool" : 0,
            "Can roll 3 out of 4 times in moving current" : 1,
            "Can roll 3 out of 4 times in Class 2 whitewater" : 2,
            "Can roll 4 out of 5 times in class 3 and 4 whitewater" : 3
        }
    }
}

let score = 0;

function loadQuestion(para, div, num)
{
    $("button").remove(); // Removes all button elements to make room for the next quiz

    if (num < Object.keys(canoe).length + 1)
    {
        // Modify the paragraph text to represent the current question the user is on
        para.text(canoe[num].question);

        // Use a for loop to iterate through all possible answers, adding a button that the user
        for (const answer of Object.keys(canoe[num].ans))
        {
            let btn = $("<button>", {
            "type":"button",
            "text":answer,
            "value":canoe[num].ans[answer]
            });
            btn.click(function(){
                score += Number($(this).val()); // adds the NUMERICAL value to the score
                //alert($(this).val()); // DEBUG: displays the score of the answer
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