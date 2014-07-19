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
    self.players = players;
    self.numTokensPlaced = 0;
    
    // instantiate the pentago board to all empty
    self.board = [];
    for(var i = 0; i < 6; i++)
    {
        self.board[i] = [];
        for(var j = 0; j < 6; j++) 
        {
          self.board[i][j] = null;
        }
    }
    
    // axes of the board
    self.axes = [];
    
    // rows and cols
    for(var p = 0; p < 6; p++)
    {
        var col = [];
        var row = [];
        for(var q = 0; q < 6; q++)
        {
            col.push(self.board[p][q]);
            row.push(self.board[q][p]);
        }
        self.axes.push(col);
        self.axes.push(row);
    }
    
    // diagonals (down->right)
    self.axes.push([self.board[1][0], self.board[2][1], 
                    self.board[3][2], self.board[4][3], self.board[5][4]]);
               
    self.axes.push([self.board[0][0], self.board[1][1],self.board[2][2], 
                    self.board[3][3], self.board[4][4], self.board[5][5]]);
    
    self.axes.push([self.board[0][1], self.board[1][2],
                    self.board[2][3], self.board[3][4], self.board[4][5]]);
    
    // diagonals (up->right)
    self.axes.push([self.board[1][5], self.board[2][4], 
                    self.board[3][3], self.board[4][2], self.board[5][1]]);
    
    self.axes.push([self.board[0][5], self.board[1][4], self.board[2][3],
                    self.board[3][2], self.board[4][1], self.board[5][0]]);
    
    self.axes.push([self.board[0][4], self.board[1][3], 
                    self.board[2][2], self.board[3][1], self.board[4][0]]);
    
    // rotate one of the four sections of the board
    // given a section and a direction
    self.rotateSection = function (section, direction)
    {
      if(self.isGameOver())
      {
          alert('game is over!');
      }
      else
      {
        if(direction === 'clockwise')
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
            alert('rotated clockwise');
        }
        else
        {
            // rotate counter clockwise
            alert('rotated counter clockwise');
        }
        self.switchTurns();
      }
    }
    
    // place a token at a place on the board given
    // the player placing the token, the section, and the
    // location coordinates in that section that the token
    // is being placed.
    self.placeToken = function(location)
    {
        if (self.board[location[0]][location[1]] != null)
        {
            return location.toString() + ' is already taken';
        }
        else
        {
            self.board[location[0]][location[1]] = self.players.current;
            self.numTokensPlaced++;
        }
    }

    // looks at the current player, and sets the current
    // player variable to the other player to switch turns.
    self.switchTurns = function()
    {
      if (self.players.current == 0)
      {
        self.players.current = 1;
      }
      else
      {
        self.players.current = 0;
      }
      console.log(self.players.current);
    }

    // look through the board to see if there are any
    // five tokens in a row belonging to one player.
    // returns bool
    self.isGameOver = function()
    {
      // game cannot be over if the number
      // of tokens placed is less than 10
        if(self.numTokensPlaced >= 9)
        {
            for(var i = 0; i < self.axes.length; i++)
            {
                var currAxisLen = self.axes[i].length;
                var tokenCount = 0;
                
                if (tokenCount >= 5)
                {
                    return true;
                }
                else
                {
                    for(var j = 0; j < currAxisLen; j++)
                    {
                        if( self.axes[i][j] == players.current )
                        {
                            tokenCount++;   
                        }

                    }
                }
            }
            
            // looked through the entire matrix, 
            // no 5 tokens for one player in a line.
            return false;
        }      
        else
        {
            return false;
        }
    }

    return self;
}(players));


