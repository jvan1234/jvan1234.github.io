function changeBackground(backgroundImage)
{
    if (backgroundImage === "https://jvan1234.github.io/Images/blackCheckers.png") { // If the set background image is equal to the dark background theme
        console.log("Image represents the dark mode! Making text white...");
        $("body").find(".normalRegular").css({"color" : "white"}); // Makes any normalRegular class white text
        $("body").find("#titleRegular").css({"color" : "white"}); // Makes any titleRegular class white text
    }
    else { // If the background image is not the black checkers (white checkers or otherwise)
        console.log("Image represents the light mode! Making text black...");
        $("body").find(".normalRegular").css({"color" : "black"}); // Makes any normalRegular class black text
        $("body").find("#titleRegular").css({"color" : "black"}); // Makes any titleRegular class black text
    }
}

$(document).ready(function(){
    // Find current background image
    var curImage = $("body").css("background-image");

    console.log(curImage + " is the current background image...");

    curImage = curImage.replace('url("','').replace('")','');

    console.log(curImage + " is the actual address...");
    
    changeBackground(curImage);

    
})