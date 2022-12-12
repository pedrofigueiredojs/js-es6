var x = 5;
var y = 10;

x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y; (9765625)

var numero = 20;
var numero2 = 10;

numero += numero2; // numero = numero + 10
console.log(numero);

var idade = 19;
var naoPossuiDiabetes = true;
var podeBeber =
  (idade >= 18) & naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);
// condição ? true : false

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Sim possui");
else console.log("Nao possui");

// if (possuiFaculdade)
//   console.log("Sim possui");
// else
//   console.log("Nao possui");
