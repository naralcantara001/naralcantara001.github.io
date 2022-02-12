const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');
const body = document.querySelector('body');

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);



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
.typeString("Front-end developer.")
.pauseFor(500)

const navSlide =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();