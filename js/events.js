//define functions here
function getIt(){
  $("p").click(function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('.img').load(function(){
    addClass('tasty');
  })
}

function submitIt() {
  $('form').submit(function(){
    alert("Your form is going to be submitted now.");
  })
}

function pressIt() {
  $('#g').on('keypress' , function(key){
    if (key.which == 71){
      alert("g was pressed");
    }
  })
}

$(document).ready(function(){
  getIt();
  pressIt();
  pressIt();
  submitIt();
// call functions here

});
