//header 스크롤 변수
const headerBg = document.querySelector('header');
const aTag = document.querySelectorAll('.gnb li a');
const lnbDepth = document.querySelectorAll('.lnb_depth');
const langBtn = document.querySelector('.lang_btn');
//console.log(wrap,headerBg,aTag,lnbDepth)
//모바일 nav 변수
const mobileNav = document.querySelector('#mobile_nav');
const menuBtn = document.querySelector('.mobile_btn');
const mobileGnb = document.querySelectorAll('.gnb_btn');
const mobileGnbText = document.querySelectorAll('.gnb_btn > a');
const mobileGnbBtn = document.querySelectorAll('.gnb_btn img');
const mobileLnb = document.querySelectorAll('.mobile_lnb_depth');
const menuWrap = document.querySelector('.mobile_menu_wrap');


//header 스크롤
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
        menuBtn.style.filter = 'brightness(0)';
    }else{
        headerBg.style.backgroundColor = 'transparent';
        aTag.forEach((obj, idx)=>{
            obj.style.color = '#fff';
        })
        lnbDepth.forEach((obj, idx)=>{
            obj.style.background = 'linear-gradient(0deg,rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
        });
        langBtn.style.filter = 'brightness(1)';
        menuBtn.style.filter = 'brightness(1)';
    }
})

//모바일 nav
menuBtn.addEventListener('click',()=>{
    mobileNav.style.display = 'block';
    menuWrap.style.display = 'block';
})
menuWrap.addEventListener('click',()=>{
    mobileNav.style.display = 'none';
})
for(let i=0; i<mobileGnb.length; i++){
    mobileLnb[i].style.display = 'none';
    mobileGnb[i].addEventListener('click',()=>{
        if(mobileLnb[i].style.display == 'block'){
            mobileLnb[i].style.display = 'none';
            mobileGnbBtn[i].src = './images/gnb_down_btn.png';
            mobileGnbText[i].style.color = '#000';
        }else{
            for(let j=0; j<mobileGnb.length; j++){
                mobileLnb[j].style.display = 'none';
                mobileGnbBtn[j].src = './images/gnb_down_btn.png';
                mobileGnbText[i].style.color = '#000';
            }
            mobileLnb[i].style.display = 'block';
            mobileGnbBtn[i].src = './images/gnb_up_btn.png';
            mobileGnbText[i].style.color = '#0061B0';
        }
    });
}