const firstPlayer=[];
function throwDice() {
  var diceSide=Math.floor((Math.random()*6)+1);
  var addsides=firstPlayer.push(diceSide);
  document.getElementById('rollScore').innerHTML=firstPlayer;
  if (diceSide==1) {
    firstPlayer=0;
    lose();
  }
   else {
 }
}

//player 1 hold
function holdOne() {
 firstPlayer.reduce(add);
 function sum(accumulator, a) {
  return accumulator+a;
 }
 document.getElementById('currentScore').innerHTML=firstPlayer;
 if(firstPlayer=>100) {
  document.getElementById('id').innerHTML="You have won this round!!!!"
 } else {

 }
}

const secondPlayer=[];
function throwDice() {
  var diceSide=Math.floor((Math.random()*6)+1);
  var addsides=secondPlayer.push(diceSide);
  document.getElementById('rollScore0').innerHTML=firstPlayer;
  if (diceSide==1) {
    firstPlayer=0;
    lose();
  }
   else {
 }
}
//player 1 hold
function holdOne() {
firstPlayer.reduce(add);
function sum(accumulator, a) {
  return accumulator+a;
 }
 document.getElementById('currentScore0').innerHTML=secondPlayer;
 if(secondPlayer=>100) {
  document.getElementById('id').innerHTML="You have won this round!!!!"
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
