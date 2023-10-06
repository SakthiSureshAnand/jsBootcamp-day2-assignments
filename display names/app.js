console.log('App js loaded')

const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
var getH1Elem = document.getElementById('h1');
let counter = 0;
function nextBtn() {
  if(counter < 9){
    counter = counter + 1;
    document.getElementById('h1').innerText = names[counter];
  } else if( counter  == 9) {
    counter = 0;
    document.getElementById('h1').innerText = names[counter];
  }
}

function prevBtn() {
  if(counter > 0){
    counter = counter - 1;
    document.getElementById('h1').innerText = names[counter];
  } else if( counter  == 0) {
    counter = 9;
    document.getElementById('h1').innerText = names[counter];
  }
}

window.onload = () => {
  document.getElementById('h1').innerText = names[0];
}