//animated span
let animateSpan = $('.blast');
animateSpan.mouseover(function(){
    $(this).addClass('animated bounce')
})
animateSpan.mouseout(function(){
    let _this = $(this)
    setTimeout(function(){
        _this.removeClass('animated bounce')
    },1000)
})

//mousewheel
let wheelDelta = 0;
let browser = 0;
$('.section').each(function(index){
    $(this).on('mousewheel DOMmouseScroll', function(event){
        event.preventDefault()
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox')
        if(browser>=0){
            wheelDelta=-event.detail*40;
        }else{
            wheelDelta=event.originalEvent.wheelDelta;
        }
        if(wheelDelta<0){
            if(index<$('section').size()-1){
                $('html, body').stop().animate({scrollTop: $(this).next().offset().top},500)
            }
        }else{
            if(index>0){
                $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500)
            }
        }
    })
})

//left tab menu
const navList = document.querySelectorAll('#headerNav a');

navList.forEach(function(a){
    a.addEventListener('click',function(){
        const attr = a.getAttribute('data-go');
        const top = document.querySelector(attr).offsetTop;
        window.scrollTo({top:top, behavior:'smooth'})
    })
})

//animated img
let animateImg = $('.section2-cont2 img');
animateImg.mouseover(function(){
    $(this).addClass('animated bounce')
})
animateImg.mouseout(function(){
    let _this = $(this)
    setTimeout(function(){
        _this.removeClass('animated bounce')
    },1000)
})

//contact submit
// const submit = document.getElementById('submit');
// const input = document.querySelectorAll('#contactForm input')
// console.log(input)
// submit.addEventListener('click',function(){
//     input.forEach(function(inp){
//         inp.value = null
//     })
// })

//contact close
const closeBtn = document.getElementsByClassName('contact-close')[0];
const contact = document.getElementById('contact')
const contactBtn = document.getElementById('contactBtn')
closeBtn.addEventListener('click',function(){
    contact.style.display='none'
});
contactBtn.addEventListener('click',function(){
    contact.style.display='block'
});