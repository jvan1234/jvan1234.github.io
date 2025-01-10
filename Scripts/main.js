$(document).ready(function(){
    // Find current background image
    var curImage = $("body").css("background-image");

    console.log(curImage + " is the current background image...");
    console.log('url("https://jvan1234.github.io/Images/blackCheckers.png")');
    if (curImage == 'url("https://jvan1234.github.io/Images/blackCheckers.png")') {
        $("body").find("#normalRegular").css("color: white");
    }
})