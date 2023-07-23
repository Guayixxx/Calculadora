var inicio = "0";
var resultado = "";
let pantalla = document.getElementById('screen');

pantalla.innerHTML = inicio;

function imprimir() {
    pantalla.innerHTML = resultado;
}

function limpiar() {
    pantalla.innerHTML = "0";
    resultado = "";
}

function cero() {
    resultado += "" + 0;
    imprimir();
}

function uno() {
    resultado += "" + 1;
    imprimir();
}

function dos() {
    resultado += "" + 2;
    imprimir();
}

function tres() {
    resultado += "" + 3;
    imprimir();
}

function cuatro() {
    resultado += "" + 4;
    imprimir();
}

function cinco() {
    resultado += "" + 5;
    imprimir();
}

function seis() {
    resultado += "" + 6;
    imprimir();
}

function siete() {
    resultado += "" + 7;
    imprimir();
}

function ocho() {
    resultado += "" + 8;
    imprimir();
}

function nueve() {
    resultado += "" + 9;
    imprimir();
}

function punto() {
    resultado += "" + ".";
    imprimir();
}

function del() {
    resultado = resultado.slice(0, -1);
    console.log(resultado);
    imprimir();
}

function mas() {
    resultado += "+";
    imprimir();
}

function menos() {
    resultado += "-";
    imprimir();
}

function mult() {
    resultado += "×";
    imprimir();
}

function div() {
    resultado += "÷";
    imprimir();
}

function porcentaje() {
    if (pantalla.innerHTML == "0") {
        pantalla.innerHTML = "0";
    } else {
        resultado = parseInt(resultado);
        resultado = resultado / 100;
        toString(resultado);
        imprimir();
    }
}

function equal() {
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i] === '×') {
            resultado = resultado.replace('×', '*');
            console.log(resultado);
        } else if (resultado[i] === '÷') {
            resultado = resultado.replace('÷', '/');
            console.log(resultado);
        }
    }
    resultado = eval(resultado);
    imprimir();
}
