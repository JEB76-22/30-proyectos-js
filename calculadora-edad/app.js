const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");




function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Por favor ingrese su Cumple !!")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `Tu edad es ${age} ${age > 1 ? "años": "años"} `
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let  age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    if (month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);