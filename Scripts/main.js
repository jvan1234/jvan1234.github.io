$(document).ready(function(){
    // Find current background image
    var curImage = $("body").css("background-image");

    console.log(curImage + " is the current background image...");
    if (curImage == "url(/Images/blackCheckers.png)") {
        console.log("It is currently the dark theme!");
    }
})