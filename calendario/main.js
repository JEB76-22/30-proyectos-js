const mesNombreEl = document.getElementById("mes-mombre");
const diaNombreEl = document.getElementById("dia-nombre");
const diaNumeroEl = document.getElementById("dia-numero");
const añoEl = document.getElementById("año");

const fecha = new Date();
const mes = fecha.getMonth();
mesNombreEl.innerText = fecha.toLocaleString("es", {
    month:"long"
});
diaNombreEl.innerText = fecha.toLocaleString("es", {
    weekday:"long"
});
diaNumeroEl.innerText = fecha.getDate();
añoEl.innerText = fecha.getFullYear();