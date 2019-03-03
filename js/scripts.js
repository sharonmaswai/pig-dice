$(document).ready(function() {
  $("button#play").click(function() {
    $("#game").show();
    $("#hide").hide();

  });
  $("button#back").click(function() {
    $("#game").hide();
    $("#hide").show();
  })
});
