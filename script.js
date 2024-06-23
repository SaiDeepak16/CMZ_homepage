console.log("Hello ");

function activateCard(card) {
  var cards = document.querySelectorAll(".navOpt");
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove("active");
  }
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  } else {
    card.classList.add("active");
  }
}

const menuIcon = document.querySelector('.menu i');
const sidebar = document.querySelector('.sidebar');

let isActive = false; 

menuIcon.addEventListener('click', function() {
  this.classList.toggle('fa-bars');
  this.classList.toggle('fa-x'); 

  isActive = !isActive; 

  sidebar.classList.toggle('active');
});


document.addEventListener('click', function(event) {
  if (isActive && !menuIcon.contains(event.target) && !sidebar.contains(event.target)) {
    menuIcon.classList.remove('fa-x'); 
    menuIcon.classList.add('fa-bars')
    sidebar.classList.remove('active');
    isActive = false;
  }
});



let slider = document.querySelector('.slider');
let dots = document.querySelectorAll('.dot');
let nextBut = document.querySelector('.slider-wrapper .arrows .next');
let prevBut = document.querySelector('.slider-wrapper .arrows .prev');

nextBut.onclick = function(){
  slideNext('next');
}
prevBut.onclick = function(){
  slideNext('prev');
}

let unAccepp;
let count=0;
const slideNext = (type) =>{
  
  
  nextBut.style.pointerEvents = 'none';
  prevBut.style.pointerEvents = 'none';

  slider.classList.remove('nex','pre');
  let item = document.querySelectorAll('.slider .box');
  if(type==='next'){
    count = (count + 1)%4;
    slider.appendChild(item[0]);
    slider.classList.add('nex');
    for (const dot of dots) {
      dot.classList.remove('active');
    }
    dots[count].classList.add('active');
  }else{
    count = (count - 1+4)%4;
    slider.prepend(item[item.length - 1]);
    slider.classList.add('pre');
    for (const dot of dots) {
      dot.classList.remove('active');
    }
    dots[count].classList.add('active');
  }
  clearTimeout(unAccepp);
    unAccepp = setTimeout(()=>{
        nextBut.style.pointerEvents = 'auto';
        prevBut.style.pointerEvents = 'auto';
    }, 1000)
}


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.products');
let listHTML = document.querySelector('.products .list');

nextButton.onclick = function(){
  console.log("Click registered");
  showSlider('next');
}
prevButton.onclick = function(){
  console.log("Click registered");
  showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
  console.log("showSlider Run");
  nextButton.style.pointerEvents = 'none';
  prevButton.style.pointerEvents = 'none';

  carousel.classList.remove('next', 'prev');
  let items = document.querySelectorAll('.products .list .item');
  if(type === 'next'){
      listHTML.appendChild(items[0]);
      carousel.classList.add('next');
  }else{
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add('prev');
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(()=>{
      nextButton.style.pointerEvents = 'auto';
      prevButton.style.pointerEvents = 'auto';
  }, 1000)
}

const genderDivs = document.querySelectorAll('.gender p'); 

genderDivs.forEach(div => {
  div.addEventListener('click', function() {
    genderDivs.forEach(sibling => sibling.classList.remove('active'));

    this.classList.add('active');
  });
});


const typeDivs = document.querySelectorAll('.type div');

typeDivs.forEach(div => {
  div.addEventListener('click', function() {
    typeDivs.forEach(sibling => sibling.classList.remove('active'));

    this.classList.add('active');
  });
});

const sizeButtons = document.querySelectorAll('.sizes button'); 

sizeButtons.forEach(button => {
  button.addEventListener('click', function() {
    sizeButtons.forEach(sibling => sibling.classList.remove('active'));

    this.classList.add('active');
  });
});

