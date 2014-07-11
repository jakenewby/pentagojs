/*
File Name: pentago.js
Author: Jake Newby

This game was created in my spare time as a project to test my still budding
javascript skills.  Feel free to modify and redistribute this project in any
way that you wish, but please leave any attributions and other project meta
in tact.  Thanks!
*/

(function(document){

  var canvas = document.getElementById("gameCanvas");
  var context = null;

  if (canvas)
  {
    if (canvas.getContext)
    {
      var context = canvas.getContext('2d');
    }
    else
    {
      alert('Your browser is out-dated. \n Please download an HTML5 compliant browser to continue.');
    }
  }
  else
  {
    alert('No canvas found to draw the game onto.');
  }


}(document));