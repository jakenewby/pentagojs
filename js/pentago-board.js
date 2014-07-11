/*
File Name: board.js
Author: Jake Newby

This game was created in my spare time as a project to test my still budding
javascript skills.  Feel free to modify and redistribute this project in any
way that you wish, but please leave any attributions and other project meta
in tact.  Thanks!
*/

(function(){

  var game = {};
  game.board = [];

  for(var  i=0; i<4; i++){
    var matrix = [];
    for(var j=0; j<3; j++) {
      matrix[j] = [];
      for(var k=0; k<3; k++) {
          matrix[j][k] = null;
      }
    }
    game.board[i] = matrix;
  }

  var s1 = game.board[0];
  var s2 = game.board[1];
  var s3 = game.board[2];
  var s4 = game.board[3];

  // rotate one of the four sections of the board
  // given a section and a direction
  game.rotateSection = function (section, direction)
  {
    if(game.IsOver())
    {

    }
    else
    {

    }
  }

  // place a token at a place on the board given
  // the player placing the token, the section, and the
  // location coordinates in that section that the token
  // is being placed.
  game.placeToken = function (player, section, location)
  {
    var token = {};
    token.player = player;
    token.section = section;
    token.location = location;

    var slot = board[section][token.location[0]][token.location[1]];

    if (slot != null)
    {
      alert('That slot is already taken!');
    }
    else
    {
      slot = token;
    }
  }

  // look through the board to see if there are any
  // five tokens in a row belonging to one player.
  game.IsOver() = function()
  {

  }

  return game;

}());
