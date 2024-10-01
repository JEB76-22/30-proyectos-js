const imageContainer = document.querySelector(".image-container");

const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    imageNum = 10;
    agregarNuevaImagen()
});

function agregarNuevaImagen(){
    for (let index = 0; index < imageNum; index++) {
        
        const nuevImagEl = document.createElement("img");
        nuevImagEl.src =`https://picsum.photos/300?random=${
            Math.floor(Math.random()*2000)}`;
        
        imageContainer.appendChild(nuevImagEl);
    }
        
    }

