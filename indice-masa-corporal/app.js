const btnEl = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result")
const weightConditionEl = document.getElementById("weight-condition");



function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100

    const weightValue = document.getElementById("weight").value
    
    const bmiValue = weightValue / (heightValue * heightValue)
    
    bmiInput.value = bmiValue;

    if(bmiValue < 18.5){
        weightConditionEl.innerText = "Bajo peso";

    }else if(bmiValue > 18.5 && bmiValue <= 24.9){
        weightConditionEl.innerText = "Peso Normal";
    }else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Sobre Peso";

    }else if(bmiValue >= 30){
        weightConditionEl.innerText = "Obesidad";
    }
}


btnEl.addEventListener("click", calculateBMI);







// const heightEl = document.querySelector("#height");
// console.log(heightEl)
