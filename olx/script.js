// !! Dragos Matteo 20.05.2021 OLX 

const navbar =  document.querySelector('.section--1');
const input = document.getElementById('searchTxt').value;
const cauta = document.getElementById('caut');
let sticky = navbar.getBoundingClientRect().height;


// !! Sticky navigation
const navbarScroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = navbarScroll;

if (input.length > 0) {
  document.getElementById('caut').style.backgroundColor = '#002f34';
}