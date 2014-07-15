/*
File Name: pentago-players.js
Author: Jake Newby
*/

var players = (function(window, document){
    
    var self = {};
    self.player1 = {};
    self.player2 = {};
    self.current = null;

    //player1.name = document.getElementById('player1name');
    self.player1.name = 'lorum';
    self.player1.id = 0;

    //player2.name = document.getElementById('player2name');
    self.player2.name = 'ipsum';
    self.player2.id = 1;

    if (self.current == null)
    {
        self.current = Math.floor(Math.random() * 2);
    }

    return self;
    
}(window, document));
