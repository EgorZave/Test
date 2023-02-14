import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

let btn = document.querySelector('.nav__button');
let menu = document.querySelector('.nav__menu');
btn.addEventListener('click', () => {
   if (btn.classList.contains('active')) {
      btn.classList.remove('active');
   } else {
      btn.classList.toggle('active')
   }
})
