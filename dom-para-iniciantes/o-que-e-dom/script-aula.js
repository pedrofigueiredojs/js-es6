// window.alert("Alo"); // funciona
// alert("Alo"); // também funciona

const href = window.location.href;
console.log(href);

if (href === "http://127.0.0.1:5500/o-que-e-dom/") {
  console.log("È igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", teste);

h1Selecionado.innerText; // retorna o texto;
h1Selecionado.classList; // retorna as classes;
h1Selecionado.id; // retorna o id;
h1Selecionado.offsetHeight; // retorna a altura do elemento
