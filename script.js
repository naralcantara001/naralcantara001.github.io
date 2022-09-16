const li = document.querySelectorAll('.links');
const sec = document.querySelectorAll('section');
const body = document.querySelector('body');

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("actives"));
    li[len].classList.add("actives");

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
.typeString("a Web Developer")
.pauseFor(700)
.deleteChars(9)
.changeDeleteSpeed(40)
.typeString("Developer.")
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
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        arrowUp.style.display = 'block';
    }else{
        arrowUp.style.display = 'none';
    }
}
arrowUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// skill progress bar


  // scroll animation
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 5;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  
  // preloader
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    loader.style.display = "none"
  })
  
// tab color theme
// document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#7f1cdf');