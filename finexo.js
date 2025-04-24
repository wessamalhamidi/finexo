const open = document.querySelector('.open');
const close = document.querySelector('.close')
const navList = document.querySelector('.navigation-items');

open.addEventListener('click' , ()=>{
    navList.style.display = 'flex';
    open.style.display='none';
    close.style.display = 'flex'
});

close.addEventListener('click', ()=>{
    navList.style.display = 'none';
    close.style.display = 'none';

    open.style.display = 'flex'

});
window.addEventListener('resize', ()=>{
    open.style.display ='flex';
    close.style.display = 'none';
    if(window.innerWidth > 768){
        navList.style.display = 'flex';
    } 
    if(window.innerWidth< 768){
        navList.style.display = 'none'
    }
})



const swiper = new Swiper('.swiper1', {
    autoplay: {
        delay: 6000,
        waitForTransition:true,
    },
    waitForTransition:true,
    spaceBetween: 40,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    speed:1000,
    
});


const swiper2 = new Swiper('.swiper2', {
    loop:true,
    spaceBetween: 50,
    slidesPerView: 2,
    autoplay:false,
    grabCursor: true,
    navigation:{
        nextEl: '.swiper2-btns .swiper-button-next',
        prevEl: '.swiper2-btns .swiper-button-prev',
    },
    breakpoints:{
        640: {       
            slidesPerView: 2,       
            spaceBetween: 40     
        },
        10:{
            slidesPerView:1,
            spaceBetween:40,
        }
    }
});



 
