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
   pigResult = playerRoll();
   $(".rollResult").text(pigResult);
   $(".turnScore").text(pigGame.turnScore);

 });

 $(".holdPig").click(function(){
   holdThePig();
   $("rollResult").text("");
   $(".player1Score").text(pigGame.player1Score);
   $(".player2Score").text(pigGame.player2Score);
   $(".playerStatus").text(pigGame.playerUp);
 });
});

  //Business logic
  var piggy= {
    score1: 0,
    score2: 0,
    currentPlayer: 1,
    turnScore: 0,
  };

  function(player1, player2) {
    this.player1= player1;
    this.player2=player2;
  }
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
