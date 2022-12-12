function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

console.log(imc(130, 1.9));

function corFavorita(cor) {
  if (cor === "Preto") {
    return "Você gosta das trevas";
  } else if (cor === "Verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

console.log(corFavorita("Preto"));

// var btn = document.querySelector(".botao");

// btn.addEventListener("click", () => {
//   console.log("clicou");
// });

function mostraConsole() {
  console.log("clicou");
}

addEventListener("click", mostraConsole);

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}

imc2(130, 1.7); // return = undefined
console.log(imc2(130, 2.2)); // undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor informe sua idade com números";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(24));

var totalPaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Faltam visitar ${totalPaises - paisesVisitados}`;
}

console.log(faltaVisitar(20));

console.log(totalPaises);

var profissao = "desenvolvedor";

function dados() {
  var nome = "Pedro";
  var idade = 23;
  function outrosDados() {
    var endereco = "Mato grosso";
    var idade = 24;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna "Pedro", 24, "Mato grosso", "Desenvolvedor"
// outrosDados(); // retorna um erro por conta do escopo
