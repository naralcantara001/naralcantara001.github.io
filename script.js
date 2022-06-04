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
// carousel
// const sliders = document.querySelector('.carousel-box');
// var scrollPerClick;
// var ImagePadding = 10;

// jsProject();

// var scrollAmount = 0;

// function sliderScrollLeft(){
//     sliders.scrollTo({
//         top:0,
//         left:(scrollAmount),
//         behavior: "smooth"
//     });
//     if(scrollAmount < 0 ){
//         scrollAmount = 0;
//     }
// }

// function sliderScrollRight(){
//     if(scrollAmount <= sliders.scrollWidth - sliders.clientWidth ){
//         sliders.scrollTo({
//             top: 0,
//             left: (scrollAmount += scrollPerClick),
//             behavior: "smooth"
//         })
//     }
// }
// function jsProject(){
//     scrollPerClick = 800;
// }

// PROJECT JS
// change the background
var orange = document.querySelector('.orange');
var black = document.querySelector('.black');
var pink = document.querySelector('.pink');
var clearBtn = document.querySelector('.clearBtn');

orange.addEventListener('click', function(){
    orange.style.backgroundColor = "orange";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";
})
black.addEventListener('click', function(){
    black.style.backgroundColor = "black";
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";

})
pink.addEventListener('click', function(){
    pink.style.backgroundColor = "pink";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
})
clearBtn.addEventListener('click', function(){
    orange.style.backgroundColor = "rgba(0, 0, 0, 0)";
    black.style.backgroundColor = "rgba(0, 0, 0, 0)";
    pink.style.backgroundColor = "rgba(0, 0, 0, 0)";
})

// random quotes generator
var generateQuoteBtn = document.querySelector('.generateQuoteBtn');
var w = document.querySelector('.w');
var a = document.querySelector('.a');
var quotes = [
    {
        w: "We grow fearless when we do the things we fear",
        a: "-Robin Sharma."
    },
    {
        w: "Impossible is just an opinion",
        a: "-Paulo Coelho"
    },
    {
        w: "The secret of getting ahead is getting started",
        a: "-Mark Twain"
    },
    {
        w: "When life gives you lemons, squirt someone in the eye",
        a: "-Cathy Guisewite"
    },
    {
        w: "I am so clever that sometimes I don't understand a single word of what I am saying ",
        a: "-Oscar Wilde."
    },
    {
        w: "The miracle is not that we do this work, but that we are happy to do it",
        a: "-Mother Teresa."
    }
];

generateQuoteBtn.addEventListener('click', function(){
    var randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]; 
    w.innerHTML = randomQuotes.w;
    a.innerHTML = randomQuotes.a;
})

// counter
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset =  document.querySelector('.reset');
const countStart = document.querySelector('.countStart');
var integer = 0;
increment.addEventListener('click', function(){
    integer += 1;
    countStart.innerHTML = integer;
});
decrement.addEventListener('click', function(){
    integer -= 1;
    countStart.innerHTML = integer;
});
reset.addEventListener('click', function(){
    integer = 0;
    countStart.innerHTML = 0;
})
// modal
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
openModal.addEventListener('click', function(){
    overlay.style.display = "block";
})
closeModal.addEventListener('click', function(){
    overlay.style.display = "none";
})

// calculator
const calInput = document.querySelector('.calInput');


function digits(digits){
    calInput.value += digits;
}

function equals(){
    try
    {
        calInput.value = eval(calInput.value);
    }
    catch(err)
    {
        alert('Invalid');
        calInput.value = "";
    }
}
function Clear(){
    calInput.value = "";
}


