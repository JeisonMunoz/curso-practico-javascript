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

    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputBase");
    const inputAltura = document.getElementById("inputAltura");

    const base = inputBase.value;
    const altura = inputAltura.value;
    const area = areaTriangulo(base,altura);
    alert(area);
}