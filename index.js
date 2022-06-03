const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const myCarousel = document.getElementsByClassName('my-carousel-inner')[0];
const carouselIndicator = document.querySelectorAll('.indicators i');
var position = [0, 320, 640, 960, 1280];
var count = 0;

prevButton.addEventListener('click', () => {
    if (count == 0) return;
    count--;
    myCarousel.style.transform = 'translateX(-' + position[count] + 'px)';
    carouselIndicator[count+1].classList.remove('red');
    carouselIndicator[count].classList.add('red');
})

nextButton.addEventListener('click', () => {
    if (count == 4) return;
    count++;
    myCarousel.style.transform = 'translateX(-' + position[count] + 'px)';
    carouselIndicator[count-1].classList.remove('red');
    carouselIndicator[count].classList.add('red');
})

for (i = 0; i < carouselIndicator.length; i++) {
    carouselIndicator[i].addEventListener('click', (event) => {        
        for (i = 0; i < carouselIndicator.length; i++) {            
            carouselIndicator[i].classList.remove('red');
        }                
        event.target.classList.add('red');
        switch (event.target.id) {
            case 'i1':
                myCarousel.style.transform = 'translateX(-' + position[0] + 'px)';
                count = 0;
            break;
            case 'i2':
                myCarousel.style.transform = 'translateX(-' + position[1] + 'px)';
                count = 1;
            break;
            case 'i3':
                myCarousel.style.transform = 'translateX(-' + position[2] + 'px)';
                count = 2;
            break;
            case 'i4':
                myCarousel.style.transform = 'translateX(-' + position[3] + 'px)';
                count = 3;
            break;
            case 'i5':
                myCarousel.style.transform = 'translateX(-' + position[4] + 'px)';
                count = 4;
            break;
        }
    })
}