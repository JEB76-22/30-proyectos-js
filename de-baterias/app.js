const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");
// console.log(containerEl)


kits.forEach(kit=>{
// console.log(kit);
const btnEl = document.createElement("button");
btnEl.classList.add("btn");
btnEl.innerText = kit;
btnEl.style.backgroundImage = "url(imagenes/" + kit + ".png)";
containerEl.appendChild(btnEl);

const audioEl = document.createElement("audio");
audioEl.src = "sonidos/" + kit + ".mp3";
containerEl.appendChild(audioEl);

btnEl.addEventListener("click", ()=>{
    audioEl.play();
});
window.addEventListener("keydown", (event)=>{
    if(event.key === kit.slice(0,1)){
        audioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(()=>{
            btnEl.style.transform = "scale(1)";
        },100);
    }
});
});