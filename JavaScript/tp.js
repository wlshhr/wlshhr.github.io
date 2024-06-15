let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 424; // 每次移动848像素（图片宽度）
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

// 自动播放
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); // 每3秒切换一次
