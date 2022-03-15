openNavButton = document.getElementById('top-bar');
nav = document.getElementById('nav');

opened =false;

openNavButton.addEventListener("click",()=>{
    nav.style.animation= "aparecer 1s forwards"
})
