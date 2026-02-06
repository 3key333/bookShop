
const firstCircle = document.querySelector('.first-circle')
const secondCircle = document.querySelector('.second-circle')
const thirdCircle = document.querySelector('.third-circle')

const imgSlider = document.querySelector('.img-slider')

const arrWithNumberWords = ['first', 'second', 'third']
const images = [
    '/assets/images/first-banner.svg',
    '/assets/images/second-banner.svg',
    '/assets/images/third-banner.svg'
]


let currentValue = 0
//imgSlider.style.backgroundImage=url(/public/assets/images/first-banner.svg);

function changeImg(){
    imgSlider.style.opacity = 0

    setTimeout(() => {
        imgSlider.style.backgroundImage = `url('${images[currentValue]}')`
        currentValue = (currentValue+1)%images.length

        changeCircle()

        imgSlider.style.opacity = 1
        imgSlider.style.transition = 'all 0.5s ease'
    }, 300);
}
function changeCircle(){

    if(currentValue === 0){
        firstCircle.src = '/assets/images/circle-active.svg'
        secondCircle.src = '/assets/images/circle-dis.svg'
        thirdCircle.src = '/assets/images/circle-dis.svg'
    }else if(currentValue === 1){
        firstCircle.src = '/assets/images/circle-dis.svg'
        secondCircle.src = '/assets/images/circle-active.svg'
        thirdCircle.src = '/assets/images/circle-dis.svg'
    }else if(currentValue === 2){
        firstCircle.src = '/assets/images/circle-dis.svg'
        secondCircle.src = '/assets/images/circle-dis.svg'
        thirdCircle.src = '/assets/images/circle-active.svg'
    }

}

document.addEventListener('DOMContentLoaded', ()=>{
    changeImg()
})

setInterval(changeImg, 4000)

