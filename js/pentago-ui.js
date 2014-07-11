/*
File Name: pentago-ui.js
Author: Jake Newby
*/

// return output of pentagoui as a global JavaScript object(s)
var pentagoui = (function(document, window){

  // html5 canvas and 2Dimensional canvas context
  var canvas = document.getElementById("gameCanvas");
  var context = null;

  // the player data
  var players = {};
  players.player1 = {};
  players.player2 = {};

  // check if the canvas and the context have rendered properly
  if (canvas)
  {
    if (canvas.getContext)
    {
      var context = canvas.getContext('2d');
    }
    else
    {
      alert("Your browser is out-dated. \n".
            "Please download an HTML5 compliant browser to continue.");
      return false;
    }
  }
  else
  {
    alert('No canvas found to draw the game onto.');
    return false;
  }

  // ask for player names
  var p1name = document.getElementById("player1name");
  var p2name = document.getElementById("player2name");

  // set player names & ids to objects
  if (p1name)
  {
    if (p2name)
    {
      players.player2.id = 1;
      players.player2.name = p2name;
    }
    else
    {
      // player2 name not found
    }
    players.player1.id = 0;
    players.player1.name = p1name;

  }
  else
  {
    // player1 name not found
  }

  // set size and color of board
  context.fillStyle = "#FFF";
  context.fillRect(0,0,500,500);

  // set stroke styles
  context.strokeStyle = 'black';
  context.stroke();
  context.lineWidth = 3;

  //export the players object
  return players;

}(document, window));
