const lifeBg = document.querySelectorAll('.life_bg');
const lifeSpan = document.querySelectorAll('.life_bg span');
const lifeContainer = document.querySelectorAll('.life_contain');
//console.log(lifeBg)

//1행 life
lifeContainer.forEach((obj,idx)=>{
    obj.style.transition = 'all 1.5s';
    obj.addEventListener('mouseenter',()=>{
        lifeContainer.forEach((life)=>{
            for(let i of lifeBg){
                i.style.backgroundColor = 'rgba(0,0,0,0.7)'
                i.style.borderRadius = '5px';
            };
            for(let i of lifeSpan){i.style.display = 'none';};
            life.style.width = 'calc((100% - 30px) / 7)';
        });
        lifeBg[idx].style.backgroundColor = 'transparent';
        lifeSpan[idx].style.display = 'inline';
        obj.style.width = 'calc(((100% - 30px) / 7) * 4)';
    })
    /* obj.addEventListener('mouseleave',()=>{
        lifeBg[idx].style.backgroundColor = 'rgba(0,0,0,0.7)';
        lifeSpan[idx].style.display = 'none';
        obj.style.width = '190px';
    }) */
})
//2행 기능
/* keySwiper = new Swiper('.swiper_key_features',{
    slidesPerView:4.5,
    spaceBetween:60,
    autoplay:{delay:1000,
        disableOnInteraction:true,
    },
    loop:true,
    direction:'horizontal',
    speed:5000,
}); */
let keySwiper;
function initializeSwiper() {
    if (window.innerWidth > 849 && !keySwiper) {
        keySwiper = new Swiper('.swiper_key_features', {
            slidesPerView: 4.5,
            spaceBetween: 60,
            autoplay: { delay: 1000 },
            loop: true,
            direction: 'horizontal',
            speed: 5000,
        });
    }
}
function destroySwiper() {
    if (window.innerWidth <= 849 && keySwiper) {
        keySwiper.destroy(true, true);
        keySwiper = null;  // Swiper 인스턴스를 null로 설정
    }
}
// 화면 크기에 맞게 Swiper를 초기화하거나 파괴
function handleResize() {
    if (window.innerWidth <= 849) {
        destroySwiper();
    } else {
        initializeSwiper();
    }
}
// 처음 페이지 로딩 시 실행
handleResize();
// 윈도우 사이즈 변경 시마다 실행
window.addEventListener('resize', handleResize);



//4행 제품
let productSwiper;
/* if (window.innerWidth <= 1249) {
    productSwiper = new Swiper('.swiper_product',{
        slidesPerView:3.5,
        spaceBetween:20,
        loop:true,
        direction:'horizontal',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
}else{
    productSwiper = new Swiper('.swiper_product',{
        slidesPerView:2.5,
        spaceBetween:20,
        loop:true,
        direction:'horizontal',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
} */
productSwiper = new Swiper('.swiper_product',{
    slidesPerView:3.5,
    spaceBetween:20,
    loop:true,
    direction:'horizontal',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})