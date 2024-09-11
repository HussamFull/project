const buttons = document.querySelectorAll('button');
const text = document.querySelector('p');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const currentSize = parseInt(getComputedStyle(text).fontSize);
    text.style.fontSize = (button.textContent === '+' ? currentSize + 2 : currentSize - 2) + 'px';
  });
});




/*

function changeMode(){

    document.querySelector("body").classList.toggle("dark");


}

document.querySelector(".changModeBtn").onklick = changeMode;

*/