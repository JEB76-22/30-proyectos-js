const contadoresEl =document.querySelectorAll(".contador");
// console.log(contadoresEl);

contadoresEl.forEach((ele) =>{
    ele.innerHTML=0;

    incrementaContador();
    function incrementaContador(){
        let currentNum = +ele.innerText
        const dataCeil = ele.getAttribute("data-ceil");
        // console.log(dataCeil);
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);
        
        if (currentNum < dataCeil) {
            ele.innerText = currentNum;
            setTimeout
            (incrementaContador, 40);
        }
        else{
                ele.innerText = dataCeil;
            }
    }
})