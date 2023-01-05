const slides= document.querySelectorAll(".slide")
const next = document.querySelector(".fa-forward")
const prev = document.querySelector(".fa-backward")
let currSlide = 0;
const maxSlide = slides.length-1
console.log(maxSlide)



slides.forEach((slide,index)=>{
  slide.style.transform = `translateX(${index * 100}%)`;
})

next.addEventListener("click",()=>{
    if(currSlide===maxSlide){
        currSlide=0
    }
    else{
        currSlide++
    }

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${10000*(index- currSlide)}%)`
    })
})

prev.addEventListener("click",()=>{
    if(currSlide===0){
        currSlide=maxSlide
    }
    else{
        currSlide--
    }

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${100000*(index- currSlide)}%)`
    })
})
