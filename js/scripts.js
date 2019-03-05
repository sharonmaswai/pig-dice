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
});

  //Business logic
  var piggy= {
    score1: 0,
    score2: 0,
    currentPlayer: 1,
    currentScore: 0,
  };


  function rolldice () {
    die1=Math.floor(Math.Random()*6)+1;
  }
  var playerTurn= function() {
    var turn=rolldice();
    if (turn===1) {
      piggy.turnScore=0;
      lose();
      changeturn();

    } else {
      piggy.turnScore+=turn;
      if(piggy.currentPlayer===1) {
        if (piggy.turnScore+piggy.score1>=100) {
          declareWinner(1);
        }

      }else if (piggy.turnScore+piggy.score2>=100) {
        declareWinner(2);
      }
    }
  }
  function changePlayer () {
   if (pigGame.currentPlayer === 1) {


   } else {

   }
  }
  function refresh () {
    piggy.score1: 0,
    piggy.score2: 0,
    piggy.currentPlayer: 1,
    piggy.turnScore: 0,
  }
   function lose() {
     document.getElementById('id').innerHTML= "Ooops, you rolled 1, you have scored 0 points, your turn is up!!!"
   }
   function declareWinner() {
     document.getElementById("id").innerHTML= "You have won, Yaaay!!!!"
   }


  //players object

  //score object
  //hold function
  //roll function
