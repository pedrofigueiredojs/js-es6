// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: "Pedro",
  sobrenome: "Figueiredo",
  idade: 24,
  profissao: "Developer",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
// dadosPessoais.nomeCompleto = function () {
//   return `${this.nome} ${this.sobrenome}`;
// };
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "Homem") {
      return "Au Au";
    } else {
      return "Nda";
    }
  },
};
