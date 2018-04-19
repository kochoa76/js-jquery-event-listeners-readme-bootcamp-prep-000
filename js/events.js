//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    })
}

function frameIt() {
  $('img').on('load', function() {
    return $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing'.on('keydown', function() {
    if ($("input:first").val() == 71) {
      alert("you have pressed g!")
    }
    return
  })
)
}

$(document).ready(function(){

// call functions here

});
