const lista = [10, 50, 50, 10];
const listaOrdenada = lista.sort();

const mitadLista = parseInt(listaOrdenada.length/2); // SE usa parseInt() ya que la mitad en este caso no puede ser un decimal. Eso convierte el numero en el entero mas proximo hacia abajo.

function esPar(largoLista) {
    if (largoLista % 2 === 0){
        return true;
    } else{
        return false;
    }
}

// if lista es par sumar dos valor en la mediana y calcular mediana
//if lista es impar obtener el valor en la mitad
//declaremos la mediana antes de llamarla o cambiarla
let mediana;

if (esPar(listaOrdenada.length)) {
     const elemento1 = listaOrdenada[mitadLista - 1]
     const elemento2 = listaOrdenada[mitadLista]
     const promedio = (elemento1 + elemento2)/2

     mediana = promedio

    
} else {
    mediana = listaOrdenada[mitadLista];
}


//Interactuando con HTML:

function onClickCalcularMediana() {
    // Se captura los datos del html y se guardan los valores dentro de una variable
    const inputLista = document.getElementById("inputLista");
    // Al ser un String los valores capturados, se procede a convertir el formato a Number 
    const inputListaValue = inputLista.value;
    //se transforma el formato a array
    let arrayMediana = Array.from(inputListaValue.split(","), Number);
    
    //   Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort();
    // Creamos la variable mitadLista
    // SE usa parseInt() ya que la mitad en este caso no puede ser un decimal. Eso convierte el numero en el entero mas proximo hacia abajo.
    const mitadLista = parseInt(listaOrdenada.length/2); 

     // Creamos la funcion esPar para verificar si la lista es par o impar
    function esPar(largoLista) {
        if (largoLista % 2 === 0){
            return true;
        } else{
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1]
        const elemento2 = listaOrdenada[mitadLista]
        const promedio = (elemento1 + elemento2)/2

        mediana = promedio

        const resultado = document.getElementById('resultadoMediana');
        resultado.innerText = 'La mediana es: ' + mediana;

        
    } else {
        mediana = listaOrdenada[mitadLista];

        const resultado = document.getElementById('resultadoMediana');
        resultado.innerText = 'La mediana es: ' + mediana;
    }

}
