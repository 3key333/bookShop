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
    imgSlider.style.backgroundImage = `url('${images[currentValue]}')`
    currentValue = (currentValue+1)%images.length
}

document.addEventListener('DOMContentLoaded', ()=>{
    changeImg()
})

setInterval(changeImg, 4000)