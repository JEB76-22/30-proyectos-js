const btnEl = document.querySelector(".btn");
// console.log(btnEl);
const closeIconEl = document.querySelector(".close-icon");
// console.log(closeIconEl);
const trailerContainerEl = document.querySelector(".trailer-container");
// console.log(trailerContainerEl);
const mainContainerEl = document.querySelector(".main-container");
// console.log(mainContainerEl);
const videoEl = document.querySelector("video");
// console.log(videoEl);


btnEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.remove("active");
    mainContainerEl.classList.add("active")
})
closeIconEl.addEventListener("click", ()=>{
    trailerContainerEl.classList.add("active");
    mainContainerEl.classList.remove("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})
