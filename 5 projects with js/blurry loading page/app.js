const bg = document.querySelector('.backgorund-image');
const procent = document.querySelector('.procent-center');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    procent.innerHTML = `${load}%`;
    procent.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
