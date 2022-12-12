// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = ["1959", "1962", "1970", "1944", "2002"];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (index = 0; index < copasBrasil.length; index++) {
  console.log(`O brasil ganhou a copa de ${copasBrasil[index]}`);
}
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (index = 0; index <= frutas.length; index++) {
  console.log(frutas[index]);
  if (frutas[index] === "Pera") {
    break;
  }
}

// frutas.forEach(function (fruta) {
//   console.log(fruta);
//   if (fruta === "Pera") {
//     break;
//   }
// });

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
// var ultimaFruta = frutas.reverse()[0];
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
