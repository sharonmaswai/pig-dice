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
  document.getElementById('alert').innerHTML="You have won this round!!!!"
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
//player 2 hold
function holdTwo() {
firstPlayer.reduce(add);
function sum(accumulator, a) {
  return accumulator+a;
 }
 document.getElementById('currentScore0').innerHTML=secondPlayer;
 if(secondPlayer=>100) {
  document.getElementById('alert0').innerHTML="You have won this round!!!!"
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
  



});
