// !! Claudiu Io 8.06.2021 Folio

// const navbar =  document.querySelector('.navbar');
// let sticky = navbar.getBoundingClientRect().height;

// // !! Sticky navigation
// const navbarScroll = () => {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add('sticky')
//   } else {
//     navbar.classList.remove('sticky');
//   }
// };

// window.onscroll = navbarScroll;

// !! Modal 

const modal = document.querySelector('#simpleModal');
const closeBtn = document.querySelector('.closeBtn');
const modalBtn = document.querySelector('#contact');


// // !! Function to open modal 
const openModal = function(){
  modal.style.display = 'block';
}

// !! Function to close modal 
const closeModal = function(){
  modal.style.display = 'none';
}

const clickOutsite = function(e){
  if (e.target == modal) 
  modal.style.display = 'none';
}

// !!  Lisen for click 
modalBtn.addEventListener('click', openModal);

// !! Lisen for close click
closeBtn.addEventListener('click', closeModal);

// !! Lisen for outside click 
window.addEventListener('click', clickOutsite);


// !! Form

const name = document.querySelector('.name').value;
const email = document.querySelector('.email').value;
const modalmess  = document.querySelector('.modal-mess').value;
const submit = document.querySelector('.modal-submit');

  submit.addEventListener('click', function (e){
    e.preventDefault();
    if(name.length < 5 && email.length && modalmess.length < 10) {
      alert('Please enter content');
    }
  });


