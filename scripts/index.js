const lifeBg = document.querySelectorAll('.life_bg');
const lifeSpan = document.querySelectorAll('.life_bg span');
const lifeContainer = document.querySelectorAll('.life_contain');
console.log(lifeBg)

//1행 life
lifeContainer.forEach((obj,idx)=>{
    obj.addEventListener('mouseenter',()=>{
        lifeContainer.forEach((life)=>{
            for(let i of lifeBg){
                i.style.backgroundColor = 'rgba(0,0,0,0.7)'
                i.style.borderRadius = '5px';
            };
            for(let i of lifeSpan){i.style.display = 'none';};
            life.style.width = '190px';
        });
        lifeBg[idx].style.backgroundColor = 'transparent';
        lifeSpan[idx].style.display = 'inline';
        obj.style.width = '800px';
    });
    /* obj.addEventListener('mouseleave',()=>{
        lifeBg[idx].style.backgroundColor = 'rgba(0,0,0,0.7)';
        lifeSpan[idx].style.display = 'none';
        obj.style.width = '190px';
    }) */
})

//2행 기능
const keySwiper = new Swiper('.swiper_key_features',{
    slidesPerView:4.5,
    spaceBetween:60,
    autoplay:{delay:2000,
        disableOnInteraction:true,
    },
    loop:true,
    direction:'horizontal',
    speed:5000,
});
/* keySwiper.addEventListener('mouseenter',()=>{
    keySwiper.autoplay.stop(); 
}) */
/* document.getElementsByClassName('.swiper_key_features .slide',()=>{
    keySwiper.autoplay.stop();
}) */


//4행 제품
const productSwiper = new Swiper('.swiper_product',{
    slidesPerView:3.5,
    spaceBetween:20,
    loop:true,
    direction:'horizontal',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})