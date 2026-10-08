
let subtotal = 0;

const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");
const desconto = document.getElementById("desconto");

function calcular() {
  const porcentagem = desconto.value;
  const total = subtotal - (subtotal * porcentagem / 100);

  document.getElementById("subtotal").innerHTML = subtotal;
  document.getElementById("total").innerHTML = total;
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const quantidade = document.getElementById("quantidade").value;
  const preco = document.getElementById("preco").value;

  if (nome == "" || quantidade == "" || preco == "") {
    alert("Preencha todos os campos");
    return;
  }

  const totalItem = quantidade * preco;
  subtotal = subtotal + totalItem;

  lista.innerHTML = lista.innerHTML +
    "<p>" + nome + " - " + quantidade + " x R$ " + preco + " = R$ " + totalItem + "</p>";

  formulario.reset();
  calcular();
});

desconto.addEventListener("input", calcular);