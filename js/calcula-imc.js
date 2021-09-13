console.log("Fui carregado de um arquivo externo");

var titulo = document.querySelector (".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var Tdimc = paciente.querySelector(".info-imc");

var PesoValido = validaPeso(peso);

var AlturaValida = validaAltura(altura);


if(!PesoValido){
    console.log("Peso invalido");
    PesoValido = false;
    Tdimc.textContent = "Peso Invalido";
    paciente.classList.add("paciente-invalido");
}

if(!AlturaValida){
    console.log("Altura invalida");
    AlturaValida = false;
    Tdimc.textContent = "Altura invalida";
    paciente.classList.add("paciente-invalido");
}

if(AlturaValida && PesoValido){
    var imc = calculaImc(peso,altura);
    Tdimc.textContent = imc;
    } 
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;

    }else{
        return false;
    }
}



function calculaImc(peso,altura){
    var imc = 0;
    
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

console.log(paciente);  // aqui tem que conter meu tr
console.log(tdPeso);  // td que tem o peso
console.log(peso); // imprimir peso 100
console.log(tdAltura);
console.log(altura);
console.log(imc);


