const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const data = document.getElementById('data');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="./laptop.png" alt="laptop">`;
    title.innerHTML = `Lorem ipsum dolar sit amen`;
    excerpt.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non itaque earum nostrum ?`;
    profile_img.innerHTML = `<img src="./user.png" alt="user" id="profile_img" class="probile-img animated-bg">
    <div class="user-info">`;
    name.innerHTML = `John Doe`;
    date.innerHTML = `Sept 01, 2021`;

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg_text'))
}