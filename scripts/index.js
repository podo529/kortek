const lifeBg = document.querySelectorAll('.life_bg');
const lifeSpan = document.querySelectorAll('.life_bg span');
const lifeContainer = document.querySelectorAll('.life_contain');
//console.log(lifeBg)

//1행 life
lifeContainer.forEach((obj,idx)=>{
    obj.style.transition = 'all 1s ease';
    obj.addEventListener('mouseenter',()=>{
        if(window.innerWidth <= 849) {
            lifeContainer.forEach((life)=>{
                for(let i of lifeBg){
                    i.style.backgroundColor = 'rgba(0,0,0,0.7)'
                    i.style.borderRadius = '5px';
                };
                for(let i of lifeSpan){i.style.display = 'none';};
            });
            lifeBg[idx].style.backgroundColor = 'transparent';
            lifeSpan[idx].style.display = 'inline';
        }else{
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
        }
    })
})
window.addEventListener('resize', () => {
    lifeContainer.forEach((obj, idx) => {
        lifeBg[idx].style.backgroundColor = 'rgba(0,0,0,0.7)';
        lifeBg[idx].style.borderRadius = '5px';
        lifeSpan[idx].style.display = 'none';
        lifeBg[0].style.backgroundColor = 'transparent';
        lifeSpan[0].style.display = 'inline';
        if (window.innerWidth <= 849) {
            obj.style.width = '100%';
            obj.style.height = '130px';
        } else if(849 < window.innerWidth <= 1400) {
            obj.style.width = 'calc((100% - 30px) / 7)';
            obj.style.height = '450px';
        }else{
            obj.style.width = 'calc((100% - 30px) / 7)';
            obj.style.height = '554px';
        }
    });
    if(849 < window.innerWidth){
        lifeContainer[0].style.width = 'calc(((100% - 30px) / 7) * 4)';
    }
});

//2행 기능
const keySwiper = new Swiper('.swiper_key_features', {
    // 공통 설정
    autoplay: {
        delay: 1000,
        /* disableOnInteraction: true, */
    },
    loop: true,
    direction: 'horizontal',
    speed: 5000,

    // 반응형 breakpoints
    breakpoints: {
        1400:{
            slidesPerView: 4.5,
            spaceBetween: 60
        },
        849: {
            slidesPerView: 3.5,
            spaceBetween: 60
        },
        320: {
            slidesPerView: 2.5,
            spaceBetween: 60
        }
    }
});

//4행 제품
    let productSwiper = null;

    function initializeProductSwiper() {
        if (window.innerWidth >= 849) {
            if (productSwiper === null) {
                productSwiper = new Swiper('.swiper_product', {
                    slidesPerView: 3.5,
                    spaceBetween: 20,
                    loop: true,
                    direction: 'horizontal',
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            }
        } else {
            // 849px 이하일 때
            if (productSwiper !== null) {
                productSwiper.destroy(true, true);
                productSwiper = null; 
            }
        }
    }
    // 1. 페이지 로드 시 초기 Swiper 상태 설정
    initializeProductSwiper();
    // 2. 윈도우 크기가 변경될 때마다 Swiper 상태 업데이트
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initializeProductSwiper();
        }, 250);
    });