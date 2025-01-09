$(document).ready(function(){
    // Find current background image
    var curImage = toString($("body").css("background-image"));

    console.log(curImage + " is the current background image...");
    if (curImage == "/Images/blackCheckers.png") {
        console.log("It is currently the dark theme!");
    }
})