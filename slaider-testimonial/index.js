const testimonials = [
    {
        name: "Julia Martinez",
        photoUrl:"https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        text:"I was amazed by the top-notch services provided by frutilla. Their cutting-edge technology solutions are simply unmatched in the industry. I highly recommend frutilla for anyone looking for super fast technology solutions"
    },
    {
        name: "Samantha Roberts",
        photoUrl:"https://plus.unsplash.com/premium_photo-1675626487177-c3d2f8d9ccf7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        text:"I am extremely satisfied with aple's laptops videos. Their products are top-notch and the user experience is easy. I highly recommend aple for anyone in need of quality electronics."
    },
    {
        name: " Alex Powell",
        photoUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
        text:"I am extremely satisfied with the products from Universal Factory. Their top-notch manufacturing quality is unmatched. I feel confident. If you value quality, Universal Factory is the way to go!, If you value quality"
    }
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let indice = 0
updateTestimonial()
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[indice];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name
    indice++
    if(indice === testimonials.length){
        indice = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 5000)
}
