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
  $('#typing'.on('keydown', function(e) {
    if (e.which) == 71) {
      alert("you pressed 'g'!")
    }
    return
  })
)
}

$(document).ready(function(){

// call functions here

});
