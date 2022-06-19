function onClickCalcularModa() {
     // Se captura los datos del html y se guardan los valores dentro de una variable
     const inputLista = document.getElementById("inputListaModa");
    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
     const inputListaValue = inputLista.value;
     //se transforma el formato a array
     let arrayModa = Array.from(inputListaValue.split(","), Number);
}