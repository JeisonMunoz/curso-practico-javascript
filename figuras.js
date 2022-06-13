// Codigo del cuadrado
// Para evitar muchos console log en la consola, usar:
/// console.group(''nombre_grupo);
/// console.groupEnd();

console.group('cuadrados');

// const ladoCuadrado = 5;
// console.log('los lados del cuadrado miden: ' + ladoCuadrado);

// const perimetroCuadrado = ladoCuadrado*4;
// console.log('El perimetro del cuadrado dime: ' + perimetroCuadrado);

// const areaCuadrada = ladoCuadrado * ladoCuadrado;
// console.log('el area del cuadrado mide ' + areaCuadrada);

function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd()


//codigo del triangulo

console.group('triangulos');
// const ladoTirangulo1=6;
// const ladodoTriangulo2=6;
// const baseTriangulo=4;
// const alturaTriangulo=5.5;

// perimetroTriangulo = ladoTirangulo1 + ladodoTriangulo2 + baseTriangulo;
// console.log('el perimetro del triangulo es ' + perimetroTriangulo);

// areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
// console.log('el area del triangulo es ' + areaTriangulo)

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base*altura)/2;
}

//Ejercicio: En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

// La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
// La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
// La función debe retornar la altura del triángulo.

function alturaIsoceles (lado1,lado2,base) {
    if (lado1==lado2) {
        // formula: h = raiz cuadrada de [(a^2) - (b^2)/4]
        const altura = Math.sqrt(lado1**2 - base**2 / 4);
        console.log('es un trangulo isoceles y su altura es: ' + altura);
        }
        else {
            console.error('no es un triangulo isoceles');
        }
    }  
console.groupEnd();


//codigo del circulo

console.group('circulos');
// const radio = 4;
// const diametro = radio*2;
const PI = Math.PI;
// const perimetro = diametro*PI;
// const areaCirculo = (radio*radio)*PI;

// console.log('El perimetro del circulo es ' + perimetro);
// console.log('El area del circulo es: ' + areaCirculo);

function diametroCirculo (radio) {
    return radio*2;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo (radio) {
    return (radio*radio)*PI;
}
console.groupEnd();


// Aqui interactuamos con HTML
// funciones del cuadrado
function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones del triangulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLado1");
    const inputLado2 = document.getElementById("inputLado2");
    const inputBase = document.getElementById("inputBase");

    const lado1 = parseInt(inputLado1.value);
    const lado2 = parseInt(inputLado2.value);
    const base = parseInt(inputBase.value);

    //se usa parseINT para que al hacer el calculo del perimetro sume en vez de concatenar:
    // function trianglePerimeter(side1, side2, base) {
    //     return (side1 + side2 + base);
    // }
    // trianglePerimeter(5, 5, 5);
    // // Output 555
    
    //con parseINT al sumar 5+5+5 da un perimetro de 15. 
    // todo lo que entra en un formulario es tipo string, el input type=“number” lo que hace es que solamente reciba caracteres tipo número. Pero no significa que lo que entra JS lo tome como Number en las funciones.
    // Para ello se debe hacer coerción de lo que queda en los values o hacer la coerción en las funciones mismas al definirlas.
    // Si esto no se hace, el resultado va a ser muy diferente a lo esperado.

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAlturaTriangulo");

    const base = inputBase.value;
    const altura = inputAltura.value;
    const area = areaTriangulo(base,altura);
    alert(area);
}

// Funciones del circulo
function calcularDiametro() {
    const input = document.getElementById(inputRadio);
    const radio = parseInt(input.value);

    const diametro = diametroCirculo(radio)
    alert(diametro)
}