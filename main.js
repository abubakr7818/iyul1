const swiperConatiner = document.querySelector('swiper-container');

let colors = ['orangered', '#e1e1e1b5', '#75E39A', '#FFA895'];

setTimeout(() => {
    if (swiperConatiner.swiper) {
        swiperConatiner.swiper.on('slideChange', () => {
            let activeIndex = swiperConatiner.swiper.activeIndex;
            let color = colors[activeIndex % colors.length];
            document.body.style.backgroundColor = color;
        });
    }
}, 1000);
