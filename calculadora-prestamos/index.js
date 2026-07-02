function calculateLoan(){
// console.log("Change")
importeDelPrestamo = document.getElementById("loan-amount").value;

valorTasaDeInteres = document.getElementById("interest-rate").value;
// console.log(valorTasaDeInteres);

valorMesAPgar = document.getElementById("months-to-play").value;
// console.log(valorMesAPgar);

interes = (importeDelPrestamo * (valorTasaDeInteres * 0.01)) / valorMesAPgar

pagoMensual = (importeDelPrestamo / valorMesAPgar + interes).toFixed(2);

document.getElementById("payment").innerHTML = `Pago Mensual: ${pagoMensual}`


}


