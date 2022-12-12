var idade = 2e-2; // 0.02
var idade = 2e2; // 200 // precisão até e20, depois disso ele arredonda para '2e+21'

var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 20201201 % 3;

// console.log(modulo);

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = (10 + 10) + 20 + 30 * 4 / (2 + 10);
console.log(soma1);

var incremento = 5;
// console.log(incremento--); // 5
// console.log(incremento); // 4
// console.log(--incremento); // 4
// console.log(incremento); // 4

// incremento = incremento + 1 // 5

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '24';
+idade; // 24 (number)
-idade; // -24 (number)
console.log(+idade + 5); // 29

var possuiFaculdade = false;
console.log(+possuiFaculdade);

var idade1 = +'24';
var somaIdade = 4;
console.log(idade1 + -somaIdade)