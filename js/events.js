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

function pressIt() {
  $('form').submit(function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});
