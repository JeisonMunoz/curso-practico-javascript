// const precioOriginal = 120
// const descuento = 50;

// const precioConDescuento = (precioOriginal * (100-descuento)) / 100;

// console.log({precioOriginal, descuento, precioConDescuento});

function calcularPrecioConDescuento(precio, descuento) {
    const precioDescuento = (precio * (100-descuento)) / 100;
    return precioDescuento
}


//Interactuando con HTML:
// vamos a crear un parrafo en hatml que se modifique con la info que le entrega JS
function onClickbuttonPriceDiscount () {
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value

    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;


}