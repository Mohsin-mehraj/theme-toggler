const body = document.getElementById('body');
const change = document.getElementById('toggle');

change.addEventListener("click", function(e){


  e.preventDefault()
  body.classList.toggle("change");




});

