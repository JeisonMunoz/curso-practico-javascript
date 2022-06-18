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