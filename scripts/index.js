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
    autoplay:{delay:1000,
        /* disableOnInteraction:true, */
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

//header 스크롤
const headerBg = document.querySelector('header');
const aTag = document.querySelectorAll('.gnb li a');
const lnbDepth = document.querySelectorAll('.lnb_depth');
const langBtn = document.querySelector('.lang_btn');
//console.log(wrap,headerBg,aTag,lnbDepth)

window.addEventListener('scroll',()=>{
    if(window.scrollY > 100){
        headerBg.style.backgroundColor = '#fff';
        aTag.forEach((obj, idx)=>{
            obj.style.color = '#000';
        });
        lnbDepth.forEach((obj, idx)=>{
            obj.style.background = '#fff'
        });
        langBtn.style.filter = 'brightness(0)';
    }else{
        headerBg.style.backgroundColor = 'transparent';
        aTag.forEach((obj, idx)=>{
            obj.style.color = '#fff';
        })
        lnbDepth.forEach((obj, idx)=>{
            obj.style.background = 'linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
        });
        langBtn.style.filter = 'brightness(1)';
    }
})
