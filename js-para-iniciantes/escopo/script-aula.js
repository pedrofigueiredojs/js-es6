"use strict";

var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // "Fusca" no console
console.log(carro); // Erro, carro is not defined

if (true) {
  let mes = "Dezembro";
  console.log(mes);
}
// console.log(mes); // Erro, mes is not defined

{
  var carro2 = "Golf";
  const ano = 2020;
}
console.log(carro2); // "Golf"
// console.log(ano); // Erro, ano is not defined

var index = 50;
for (let index = 0; index < 10; index++) {
  // console.log(`Numero ${index}`);
}
console.log(index * 10);

const mes = "Junho";
// const mes = "Tal" // erro, redeclaração
// mes = "Janeiro"; // errou, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 6,
  mes: "Junho",
  ano: 1998,
};

data.dia = 29; // Funciona
data.hora = "20:00";
// data = "Janaeiro"; // Erro

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável
