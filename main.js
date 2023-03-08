// Bienvenida
alert("Bienvenido al restaurante venga y no vuelva");

// Productos:
// Combos vegetarianos: 
// 1. Sopa de vegetales: 3.500
// 2. Ensalas y jugos: 3.000
// Combos no vegetarianos: 
// 1. Pollo: 8.500
// 2. Res: 9.500
// 3. Cerdo: 7.000
// Comida rapida: 
// 1. Perros calientes: 10.000
// 2. Hamburguesas: 9.000

let sopa = 3500;
let ensaladaConJugo = 3000;
let pollo = 8500;
let res = 9500;
let cerdo = 7000;
let perroCaliente = 10000;
let hamburguesa = 9000;

// Descuentos: 
let descuentoVegetarino = 0.2; // Comida vegetariana: 20% = 0.2
let descuentoNoVegetarino = 0.1; // Comida no vegetariana: 10% = 0.1
let descuentoComidaRapida = 0.05; // Comida Rapida: 5% = 0.05

//IVA:
let iva = 1.18; // El iva del 18%


//Valor compra: 
let valorSinIva;
let valorConIva;
let valorConDescuento;


// Solicita tipo de comida y combo
var tipoDeComida = parseInt(prompt("Actualemente tenemos varios tipos de comida: 1. Comida Vegetariana, 2. No Vegetariana y 3. Comida rapida ¿Qué clase de comida te gustaría comprar?"));
var tipoDeCombo;
var cantidad; 



// Solicitando tipo de comida, combo y cantidad:

if (tipoDeComida > 0 && tipoDeComida < 4) {
    if (tipoDeComida == 1) {
        tipoDeCombo = parseInt(prompt("Los combos de comida vegetariana son: 1. Sopa de vegetales por un valor de $3.500 y 2. Ensalada y jugo por un valor de $3.000 ¿Qué combo desea adquirir?"));
        cantidad = parseInt(prompt("¿Qué cantidad deseas adquirir?"));
    } else if (tipoDeComida == 2) {
        tipoDeCombo = parseInt(prompt("Los combos de comida no vegetariana son: 1. Pollo por un valor de $8.500, 2. Res por un valor de $9.500 y 3. Cerdo por un valor de $7.000"));
        cantidad = parseInt(prompt("¿Qué cantidad deseas adquirir?"));
    } else {
        tipoDeCombo = parseInt(prompt("Los combos de comida rapida son: 1. Perros Calientes por un valor de $10.000 y 2. Hamburguesas por un valor de $9.000"));
        cantidad = parseInt(prompt("¿Qué cantidad deseas adquirir?"));
    }
} else {
    alert("Ingrese un valor valido por favor");
}

// Combo vegetariano:

if (tipoDeComida == 1 && tipoDeCombo > 0 && tipoDeCombo < 3) {
    if (tipoDeCombo == 1) {
        tipoDeCombo = "sopa/s de vegetales";
        
alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*sopa)} sin iva.
        
        Te recordamos que por la compra de comida vegetariana obtienes un descuento del 20% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoVegetarino)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`); 
        //Valores
        alert(`
        Ticket:
        Tipo de comida: Vegetariana
        Tipo de combo: Sopa de vegetales
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    } else {
        tipoDeCombo = "ensalada/s con jugo";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*ensaladaConJugo)} sin iva.
        
        Te recordamos que por la compra de comida vegetariana obtienes un descuento del 20% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoVegetarino)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: Vegetariana
        Tipo de combo: Ensalada con jugo
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    }
}

// Combo no vegetariano:

if (tipoDeComida == 2 && tipoDeCombo > 0 && tipoDeCombo <= 3) {
    if (tipoDeCombo == 1) {
        tipoDeCombo = "pollo/s";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*pollo)} sin iva.
        
        Te recordamos que por la compra de comida no vegetariana obtienes un descuento del 10% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoNoVegetarino)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: No Vegetariana
        Tipo de combo: Pollo
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    } else if (tipoDeCombo == 2){
        tipoDeCombo = "carne/s de res";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*res)} sin iva.
        
        Te recordamos que por la compra de comida no vegetariana obtienes un descuento del 10% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoNoVegetarino)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: No Vegetariana
        Tipo de combo: Carne de Res
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    } else {
        tipoDeCombo = "carne/s de cerdo";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*cerdo)} sin iva.
        
        Te recordamos que por la compra de comida no vegetariana obtienes un descuento del 10% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoNoVegetarino)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: No Vegetariana
        Tipo de combo: Carne de Cerdo
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    }
}

// Combo Comida Rapida:

if (tipoDeComida == 3 && tipoDeCombo > 0 && tipoDeCombo < 3) {
    if (tipoDeCombo == 1) {
        tipoDeCombo = "perro/s caliente/s";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*perroCaliente)} sin iva.
        
        Te recordamos que por la compra de comida rápida obtienes un descuento del 5% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoComidaRapida)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: Rapida
        Tipo de combo: Perro Caliente
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    } else {
        tipoDeCombo = "hamburguesa/s";
        alert(`Vas a adquirir ${cantidad} ${tipoDeCombo} por un total de $${valorSinIva = (cantidad*hamburguesa)} sin iva.
        
        Te recordamos que por la compra de comida rápida obtienes un descuento del 5% por lo que el total de la compra es de $${valorConDescuento = (valorSinIva)- (valorSinIva * descuentoComidaRapida)} sin iva y con iva es un total de $${valorConIva = (valorConDescuento * iva)}`);
        //Valores
        alert(`
        Ticket:
        Tipo de comida: Rapida
        Tipo de combo: Hamburguesa
        Cantidad: ${cantidad}
        Valor de los productos sin descuento: $${valorSinIva}
        Valor de los productos con descuento: $${valorConDescuento}
        Valor final de los productos con iva: $${valorConIva}
        `)
    }
}