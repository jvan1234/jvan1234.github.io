$(document).ready(function(){
    // Mark down events
    $(document).mousemove(function(event){
        // When the mouse position updates, update an id called mouseDisplay to display where the mouse is found on the page
        $("#mouseDisplay").text("Current Mouse Position: (" + event.pageX + ", " + event.pageY + ")");
    });
});