const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');
const body = document.querySelector('body');

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");

    // sec.forEach(ltx => ltx.classList.remove(".section"));
    // sec[len].classList.add("active-sec");
}

// 

activeMenu();
window.addEventListener("scroll", activeMenu);

// Typewriter
const textAnim = document.querySelector(".profession");
const typewriter = new Typewriter(textAnim, {
loop: true
});

typewriter
.start()
.pauseFor(200)
.typeString("a Front-end Developer")
.pauseFor(700)
.deleteChars(19)
.changeDeleteSpeed(40)
.typeString(" Front-end Developer.")
.pauseFor(500)


// nav slider 
const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();

// Arrow Up
let arrowUp = document.querySelector('#arrowUp');
window.onscroll = function(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        arrowUp.style.display = 'block';
    }else{
        arrowUp.style.display = 'none';
    }
}
arrowUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
