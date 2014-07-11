/*
File Name: pentagoui.js
Author: Jake Newby
*/

var pentagoui = (function(document, window){

  // html5 canvas and 2Dimensional canvas context
  var canvas = document.getElementById("gameCanvas");
  var context = null;

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

  // set size and color of board
  context.fillStyle = "#FFF";
  context.fillRect(0,0,500,500);

  // set stroke styles
  context.strokeStyle = 'black';
  context.stroke();
  context.lineWidth = 3;

}(document, window));
