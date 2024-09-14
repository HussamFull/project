/* Dark mode */

function fontSize1(){
  document.querySelector('body').style.fontSize = '24px';
  document.querySelector('h1').style.fontSize = '48px';
  document.querySelector('p').style.fontSize = '18px';
  document.querySelector('h2').style.fontSize = '42px';
  document.querySelector('h3').style.fontSize = '36px';
}



function fontSize2(){
  document.querySelector('body').style.fontSize = '18px';
  document.querySelector('h1').style.fontSize = '36px';
  document.querySelector('p').style.fontSize = '12px';
  document.querySelector('h2').style.fontSize = '30px';
  document.querySelector('h3').style.fontSize = '24px';
}

document.querySelector(".zoom").onclick = fontSize1;
document.querySelector(".out").onclick = fontSize2;
/*
function changeMode(){
  document.querySelector("body").classList.toggle("zoom");
}
document.querySelector(".zoom").onclick = changeMode;

*/
/* Dark mode */


/*  1 ----- Dark mode  */ 
/*
function changeMode(){
  document.querySelector("body").classList.toggle("dark");
}
document.querySelector(".changModeBtn").onclick = changeMode;
 */ 

/*  1 ----- Dark mode 
function changeMode(){
  document.querySelector("body").classList.toggle("dark");
}
document.querySelector(".changModeBtn").onklick = changeMode;


/*


const buttons = document.querySelectorAll('button');
const text = document.querySelector('p');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const currentSize = parseInt(getComputedStyle(text).fontSize);
    text.style.fontSize = 
    (button.textContent === '+' ? currentSize + 2 : currentSize - 2) + 'px';
  });
});






function addText (){
  document.querySelector("p").textContent = "Hallo my name is Hussam ";
}

document.querySelector("button").onclick = addText;
*/