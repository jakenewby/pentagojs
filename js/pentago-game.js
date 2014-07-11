/*
File Name: pentago-game.js
Author: Jake Newby

This game was created in my spare time as a project to test my still budding
javascript skills.  Feel free to modify and redistribute this project in any
way that you wish, but please leave any attributions and other project meta
in tact.  Thanks!
*/

var game = (function(pentagoui){

  board = {};
  board.players = pentagoui.players;

  var sections = [];

  for(var  i=0; i<4; i++){
    var matrix = [];
    for(var j=0; j<3; j++) {
      matrix[j] = [];
      for(var k=0; k<3; k++) {
          matrix[j][k] = null;
      }
    }
    sections[i] = matrix;
  }

  board.sections = sections;

  // rotate one of the four sections of the board
  // given a section and a direction
  board.rotateSection = function (section, direction)
  {
    if(game.isOver())
    {

    }
    else
    {
      board.switchTurns();
    }
  }

  // place a token at a place on the board given
  // the player placing the token, the section, and the
  // location coordinates in that section that the token
  // is being placed.
  board.placeToken = function (player, section, location)
  {
    var token = {};
    token.player = player;
    token.section = section;
    token.location = location;

    var slot = sections[section][token.location[0]][token.location[1]];

    if (slot != null)
    {
      alert('That slot is already taken!');
    }
    else
    {
      slot = token;

      if(board.gameIsOver())
      {

      }
      else
      {
        board.switchTurns();
      }
    }
  }

  // looks at the current player, and sets the current
  // player variable to the other player to switch turns.
  board.switchTurns() = function()
  {
    if (board.currentPlayer.id == board.players[0])
    {
      board.currentPlayer = board.players[1]
    }
    else
    {
      board.currentPlayer.id = board.players[0];
    }
  }

  // look through the board to see if there are any
  // five tokens in a row belonging to one player.
  // returns bool
  board.gameIsOver() = function()
  {

  }

  return board;

}(pentagoui));
