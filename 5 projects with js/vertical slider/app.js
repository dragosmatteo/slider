const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.slider-right');
const sliderLeft = document.querySelector('.slider-left');
const upBotton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const sliderLenght = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0

sliderLeft.style.top = `-${(sliderLenght - 1) * 100}vh`

upBotton.addEventListener('click', () => changeSlider('up'))
downBotton.addEventListener('click', () => changeSlider('down'))

const changeSlider = (direction) => {
    const slideHeight = sliderContainer.clientHeight;
    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slideHeight -1) {
            activeSlideIndex = 0;
        }
    } if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0) {
            activeSlideIndex = slideHeight -1;
        }
}
    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    sliderLeft.style.transform = `translateY(+${activeSlideIndex * slideHeight}px)`
};