$(document).ready(function(){
    // Find current background image
    var curImage = $("body").css("background-image");

    console.log(curImage + " is the current background image...");

    curImage = curImage.replace('url("','').replace('")','');

    console.log(curImage + " is the actual address...");
    if (curImage === "https://jvan1234.github.io/Images/blackCheckers.png") {
        console.log("Image represents the dark mode! Making text white...");
        $("body").find(".normalRegular").css({"color" : "white"});
    }
})