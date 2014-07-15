/*
File Name: game.js
Author: Jake Newby

This game was created in my spare time as a project to test my still budding
javascript skills.  Feel free to modify and redistribute this project in any
way that you wish, but please leave any attributions and other project meta
in tact.  Thanks!
*/
    
var game = (function(players){
    
    var self = {};
    self.numTokensPlaced = 0;
    
    // instantiate the pentago board to all empty
    self.board = [];
    for(var i=0; i<6; i++)
    {
        self.board[i] = [];
        for(var j=0; j<6; j++) 
        {
          self.board[i][j] = null;
        }
    }
    
    // rotate one of the four sections of the board
    // given a section and a direction
    self.rotateSection = function (section, direction)
    {
      if(isGameOver())
      {

      }
      else
      {
        if(direction == 'clockwise')
        {
          /*
            var newGrid = [];
            var rowLength = Math.sqrt(section.length);
            newGrid.length = section.length

            for (var i = 0; i < section.length; i++)
            {
                //convert to x/y
                var x = i % rowLength;
                var y = Math.floor(i / rowLength);

                //find new x/y
                var newX = rowLength - y - 1;
                var newY = x;

                //convert back to index
                var newPosition = newY * rowLength + newX;
                newGrid[newPosition] = section[i];
            }

            for (var i = 0; i < newGrid.length; i++)
            {
                console.log(newGrid[i])
            }
            */
        }
        else
        {
          // rotate counter clockwise
        }
        switchTurns();
      }
    }

    // place a token at a place on the board given
    // the player placing the token, the section, and the
    // location coordinates in that section that the token
    // is being placed.
    self.placeToken = function(playerid, location)
    {
        if (self.board[location[0]][location[1]] != null)
        {
            return location.toString() + ' is already taken';
        }
        else
        {
            self.board[location[0]][location[1]] = playerid;
            self.numTokensPlaced = self.numTokensPlaced + 1;
            if(isGameOver())
            {
                alert('game is over!');
            }
        }
    }

    // looks at the current player, and sets the current
    // player variable to the other player to switch turns.
    function switchTurns()
    {
      if (players.current == players[0])
      {
        players.current = players[1];
      }
      else
      {
        players.current = players[0];
      }
      console.log(players.current);
    }

    // look through the board to see if there are any
    // five tokens in a row belonging to one player.
    // returns bool
    function isGameOver()
    {
      // game cannot be over if the number
      // of tokens place is less than 10
      if(self.numTokensPlaced() >= 10)
      {
        for(i=0; i < 3; i++)
        {
            if(self.board[i] != null)
            {
                for(j=0; j < 3; j++)
                {
                   if(self.board[i][j] != null)
                   {
                        return true;
                   }
                }
            }
        }
      }
      else
      {
        return false;
      }
    }

    return self;
}(players));


