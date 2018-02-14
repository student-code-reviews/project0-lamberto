// Nitpick: Keep spacing between like so:
var player = 0;
var computer = 0;
var choices = ['rock','paper','scissors'];

var index=0;
// Time for what? Better naming and commenting useful here too!
var time=0;
// It's not clear what number is or what this means. Naming and comments very important here.
var number=1;

function roll(){


  // check that the rolling time is over or not. If number -- time, rolling time is over and select the current rolling index as computer choice
  if(number==time){
    computer=index-1;
    // stop rolling over
    clearInterval(roll);
    // win(a,b);
    return;
  }

  // clear the current rolling chooice
  $('#computer').empty();
  var I=$('<i></i>');
   // apply a class based on current index
    I.addClass(`far fa-hand-${choices[index]}`);

  // append the created element baesed on index to the computer choice
    $('#computer').append(I);

  // move on to next index
    index++;
  //move on the number
    number++;
  // if the index moving more than array index start from zero again
    if(index>2) {
      index=0;
      console.log(index);
    }
}

function win(playerchoice,computerchoice){

}

$(document).ready(function(){
  // decides how much time system thinks
  time=Math.round(Math.random()*3)+20; //12
  $('.choices button').on("click",function(){
    if(number==1){
     // once use click on any choice, add class called selected to that button.
    $(this).addClass('selected');
      // get the buttons id and assign that id to the player variable
    player=$(this).attr('id');
      // once user selected his choice
      // start  rolling the computer choices.
    setInterval(roll,100);

}
  });

});
