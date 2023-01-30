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
                $('.circle').removeClass('active')
                let _this = $(this)
                setTimeout(function(){
                    _this.next().find('.circle').addClass('active')
                },300)
                $(this).next().find('.bg').css('width',0).stop().animate({width:'100%'},500)
            }
        }else{
            if(index>0){
                $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},500)
                $('.circle').removeClass('active')
                let _this = $(this)
                setTimeout(function(){
                    _this.prev().find('.circle').addClass('active')
                },300)
                $(this).find('.bg').css('width','100%').stop().animate({width:'0'},500)
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

//section header
const header = $('#header');
const section3 = $('#section3')
const section4 = $('#section4')
const section5 = $('#section5')
const section6 = $('#section6')
$(window).scroll(function(){
    // if($(document).scrollTop() >= section3.offset().top && $(document).scrollTop() < section4.offset().top){
    //     header.css('background','#929292')
    // }
    // else if($(document).scrollTop() >= section4.offset().top && $(document).scrollTop() < section5.offset().top){
    //     header.css('background','#1A3F83')
    // }
    // else if($(document).scrollTop() >= section5.offset().top && $(document).scrollTop() < section6.offset().top){
    //     header.css('background','linear-gradient(0deg, rgba(255, 143, 197, 0.78) 0%, rgba(255, 79, 163, 0.78) 64.9%, rgba(255, 143, 197, 0.78) 100%)')
    // }
    // else if($(document).scrollTop() >= section6.offset().top){
    //     header.css('background','rgba(23, 156, 120, 0.84)')
    // }
    // else{
    //     header.css('background','hsl(193, 27%, 31%)')
    // }
    if($(document).scrollTop() == section3.offset().top){
        header.css('background','#929292')
    }
    else if($(document).scrollTop() == section4.offset().top){
        header.css('background','#1A3F83')
    }
    else if($(document).scrollTop() == section5.offset().top){
        header.css('background','linear-gradient(0deg, rgba(255, 143, 197, 0.78) 0%, rgba(255, 79, 163, 0.78) 64.9%, rgba(255, 143, 197, 0.78) 100%)')
    }
    else if($(document).scrollTop() == section6.offset().top){
        header.css('background','rgba(23, 156, 120, 0.84)')
    }
    else{
        header.css('background','hsl(193, 27%, 31%)')
    }
})
