console.log('App js loaded...,')

var randomColorValue;

function getRandomColor() {
  // generates the random color toString(16) converts the hexadecimal value 
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  randomColorValue = randomColor;
}

function changeBackgroundColor() {
  getRandomColor();
  var getBodyElement = document.getElementById('body-class')
  if (randomColorValue) {
    getBodyElement.style.backgroundColor = randomColorValue
  }

}

window.onclick = () => {
  changeBackgroundColor();
}