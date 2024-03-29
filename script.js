window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 70,
    sizeVariations: 10,
    speed: 1,
    color: '#b4daf5',
    minDistance: 120,
    connectParticles: true, 
    responsive: [
      {
        breakpoint:  1000,
        options: {
          maxParticles: 40,
        }
      },
      {
        breakpoint:  768,
        options: {
          maxParticles: 40,
          minDistance: 100,
        }
      },
      {
        breakpoint:  400,
        options: {
          maxParticles: 20,
        }
      }
    ]
  });
};

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
.typeString("a Front-end Developer")
.pauseFor(700)
.deleteChars(19)
.changeDeleteSpeed(40)
.typeString("Front-end Developer.")
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

// slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  
  let dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot1", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active-dot1";
  setTimeout(showSlides1, 2000); // Change image every 2 seconds
}