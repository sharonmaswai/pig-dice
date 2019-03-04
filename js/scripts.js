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
  //Business logic
  var piggy= {
    score1: 0,
    score2: 0,
    dice1: 1,
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
      piggy.
    }
  }



  //players object

  //score object
  //hold function
  //roll function

});
