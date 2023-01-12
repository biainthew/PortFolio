//javascript 로 hover 실패 ㅅ,, 
//let animateSpan = document.querySelectorAll('.animate-h1');
// let spanBouncing = [
//     {transform: 'scale(1)'},
//     {transform: 'scale(.6)'},
//     {transform: 'scale(1)'}
// ]
// let spanbTiming = [
//     {duration: 500},
//     {iteration: 1}
// ]
// for(let i=0; i<animateSpan.length; i++){
//     animateSpan[i].addEventListener('click',function(){
//         this.animate(spanBouncing, spanbTiming)
//         console.log(this)
//     })
// };

let animateSpan = $('.blast');
animateSpan.mouseover(function(){
    $(this).addClass('animated bounce')
})
animateSpan.mouseout(function(){
    let _this = $(this)
    setTimeout(function(){
        _this.removeClass('animated bounce')
    },1000)
    // setTimeout(function(){
    //     $(this).removeClass('animated bounce')
    //     console.log($(this))
    // },1000)
})