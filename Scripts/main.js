const ANIM_DUR = 250
const BTN_COLOR = "#4e4e4e"
var FOCUSED_RAD = 0.005;
var UNFOCUSED_RAD = 0.0125;



$(document).ready(function () {
  // Button variables
  var fa_btn = $("#fa");
  var bsky_btn = $("#bsky");

  $(window).on("resize", function () {
    fa_btn.animate({
      borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
    }, 0)
    bsky_btn.animate({
      borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
    }, 0)
  })
  fa_btn.hover(function () {
    fa_btn.animate({
      backgroundColor: "#e3996b",
      borderTopLeftRadius: $(window).width() * FOCUSED_RAD,
      borderTopRightRadius: $(window).width() * FOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * FOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * FOCUSED_RAD
    }, ANIM_DUR)
  }, function () {
    fa_btn.animate({
      backgroundColor: BTN_COLOR,
      borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
    }, ANIM_DUR)
  });
  bsky_btn.hover(function () {
    bsky_btn.animate({
      backgroundColor: "#6c9af0",
      borderTopLeftRadius: $(window).width() * FOCUSED_RAD,
      borderTopRightRadius: $(window).width() * FOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * FOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * FOCUSED_RAD
    }, ANIM_DUR)
  }, function () {
    bsky_btn.animate({
      backgroundColor: BTN_COLOR,
      borderTopLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderTopRightRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomLeftRadius: $(window).width() * UNFOCUSED_RAD,
      borderBottomRightRadius: $(window).width() * UNFOCUSED_RAD
    }, ANIM_DUR)
  });
})
