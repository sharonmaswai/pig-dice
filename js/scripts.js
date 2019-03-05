const firstPlayer=[];
function throwDice() {
  var diceSide=Math.floor((Math.random()*6)+1);
  var addsides=firstPlayer.push(diceSide);
  document.getElementById('id').innerHTML=firstPlayer;
  if (diceSide==1) {
    firstPlayer=0;
    lose();
  }
   else {
}

//player 1 hold
function holdOne() {
firstPlayer.reduce(add);
function sum(accumulator, a) {
  return accumulator+a;
}
document.getElementById('id').innerHTML=firstPlayer;
if(firstPlayer=>100) {
  document.getElementById('id').innerHTML="Player 1 has won!!!!"
} else {

}
}











//user interface
$(document).ready(function() {
  $("button#play").click(function() {
    $("#game").show();
    $("#hide").hide();
  });

  $("button#back").click(function() {
    $("#game").hide();
    $("#hide").show();
  });

  $("h2#inst").click(function() {
  $("#instruction").show();
  });

  $("h2#dets").click(function() {
    ("#names").show();

  });
  $(".rollPig").click(function() {
   rollScore = playerTurn();
   $(".currentResult").text(rollScore);
   $(".currentScore").text(piggy.currentScore);

 });

 $(".holdPig").click(function(){
   holdThePig();
   $("rollScore").text("");
   $(".Score1").text(piggy.Score1);
   $(".Score2").text(piggy.Score2);
   $(".playerStatus").text(piggy.currentPlayer);
 });
 event.preventDefault



});
