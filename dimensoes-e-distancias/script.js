const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector("h2");
const h2Left = primeiroH2.offsetLeft;
console.log(h2Left);

const h2Rect = primeiroH2.getBoundingClientRect();
console.log(h2Rect.right);

if (h2Rect.top < 0) {
  console.log("passou do elemento");
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.scrollY,
  window.scrollX
);

const small = window.matchMedia("(max-width: 300px)").matches;

if (small) {
  console.log("usuario mobile");
} else {
  console.log("usuario desktop");
}
