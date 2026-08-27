const ANIM_DUR = 250
const BTN_COLOR = "#4e4e4e"
var FOCUSED_RAD = 0.005;
var UNFOCUSED_RAD = 0.0125;



$(document).ready(function () {
  // Button variables
  var fa_btn = $("#fa");
  var bsky_btn = $("#bsky");
  var btns = $(".button");
  var btn_color_vals = ["#e3996b", "#6c9af0", "#d957d4", "#5865F2"];

  $(window).on("resize", function () {
    $.each(btns, function (i, obj) {
      $(this).animate({
        borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
        borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
        borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
        borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
      }, 0)
    });
  });
  $.each($(".button"), function (i, btn) {
    $(this).hover(function () {
      $(this).animate({
        backgroundColor: btn_color_vals[i],
        borderTopLeftRadius: $(window).width() * FOCUSED_RAD,
        borderTopRightRadius: $(window).width() * FOCUSED_RAD,
        borderBottomLeftRadius: $(window).width() * FOCUSED_RAD,
        borderBottomRightRadius: $(window).width() * FOCUSED_RAD
      }, ANIM_DUR)
    }, function () {
      $(this).animate({
        backgroundColor: BTN_COLOR,
        borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
        borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
        borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
        borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
      }, ANIM_DUR)
    });
  });
})
