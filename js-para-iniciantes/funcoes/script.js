// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  // if (valor === true) {
  //   return "valor é true";
  // } else {
  //   return "valor é false";
  // }
  return !!valor;
}
console.log(verificaValor(true));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  let perimetro = lado * 4;
  return perimetro;
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  let seuNome = `${nome} ${sobrenome}`;
  return seuNome;
}
console.log(nomeCompleto("Pedro", "Figueiredo"));

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if (numero % 2 == 0) {
    return "numero par";
  } else {
    return "numero impar";
  }
}
console.log(numeroPar(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(true));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", function () {
  console.log("Pedro Figueiredo");
});

// Corrija o erro abaixo
let totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
