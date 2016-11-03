$(document).ready(function (event) {

var current_ind = 0,
	
  vals= $('.container div'),
  val_len = vals.length;
var curr=1;
function callvals() {

  var val = $('.container div').eq(current_ind);
  vals.hide();
  val.css('display','inline-block');
}



$("#btn1").click(function() {
var val= $('.container div').eq(0);
current_ind=0;
vals.hide();
  val.css('display','inline-block');

});

$("#btn2").click(function() {
var val= $('.container div').eq(1);
current_ind=1;
vals.hide();
  val.css('display','inline-block');

});

$("#btn3").click(function() {
var val= $('.container div').eq(2);
current_ind=2;
vals.hide();
  val.css('display','inline-block');
});

$("#btn4").click(function() {
var val= $('.container div').eq(3);
current_ind=3;
vals.hide();
  val.css('display','inline-block');
});

$("#btn5").click(function() {
var val= $('.container div').eq(4);
current_ind=4;
vals.hide();
  val.css('display','inline-block');
});


$('.next_class').click(function() {
 
 
  current_ind += 1;
  if (current_ind > val_len - 1) {
    current_ind = 0;
  }
 
  callvals();
});

$('.prev_class').click(function() {
 
 
  current_ind -= 1;
  if (current_ind< 0) {
    current_ind = val_len - 1;
  }
  callvals();
});
});