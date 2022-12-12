var possuiGraduacao = false;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("Possui graduacao");
} else if (possuiDoutorado) {
  console.log("Possui doutorado");
} else {
  console.log("Não possui nada");
}

var nome = "10kg" / 10;

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log("Nao possui graduacao");
}

var x = 10;

console.log(x !== 10);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;

if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Preto";

switch (corFavorita) {
  case "Preto":
    console.log("Feche os olhos.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Não faça nada");
}

// False
if (false);
if (0); // ou -0
if (NaN);
if (null);
if (undefined);
if (""); // ou "" ``
// Todo o resto é TRUE
if (true);
if (1);
if (" ");
if ("Pedro");
if (-5);
if ({});

// operador !
if (!true); // false
if (!1); // false
if (!""); // true
if (!undefined); // true
if (!!" "); // true
if (!!""); // false

// Operadores de comparacao
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false
10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

// Operadores Lógicos &&
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // "Cão"
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

// Operador lógico ||
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // "Gato"
5 - 5 || 5 + 5; // 10
"Gato" || false; // "Gato"
5 >= 5 || 3 < 6; // true
