var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// var ultimoItem = videoGames.pop();

videoGames.push("3DS");

console.log(videoGames.length);

for (var numero = 1; numero <= 5; numero++) {
  console.log(numero);
}
// Retorno de 0 a 9 no console

var i = 0;

while (i <= 5) {
  console.log(i);
  // i++;
  i = i + 5;
}

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "XBOX") {
    break;
  }
}

var frutas = ["Banana", "Pera", "Macã", "Abacaxi", "Uva"];

frutas.forEach(function (fruta, index, array) {
  // frutas.pop();
  console.log(fruta, index, frutas);
});

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}
