const sliderLine = document.querySelector('.slider-line');
const picture = document.querySelector('.picture');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
prevBtn.addEventListener('click' , prev);
nextBtn.addEventListener('click' , next);
document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
        prev()
    }
})
document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight'){
        next()
    }
})
let total = picture.offsetWidth;

function prev (){
    if(total > -256){
        return
    }
    total += 256;
    sliderLine.style.left = `${total}px`
    console.log(total)
}
function next (){
    if(total < -512){
        return
    }
    total -= 256;
    sliderLine.style.left = `${total}px`
    console.log(total)
}
