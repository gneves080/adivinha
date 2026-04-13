let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasMax = 10;
let tentativasRestantes = tentativasMax;

const input = document.getElementById("palpite");
const btn = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

btn.addEventListener("click", jogar);

function jogar() {
  if (tentativasRestantes <= 0) return;

  let palpite = parseInt(input.value);

  // validação
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100!";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou!";
    finalizarJogo();
  } 
  else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior ⬆️";
  } 
  else {
    mensagem.textContent = "O número secreto é menor ⬇️";
  }

  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
    mensagem.textContent = `💀 Você perdeu! O número era ${numeroSecreto}`;
    finalizarJogo();
  }

  input.value = "";
  input.focus();
}

function finalizarJogo() {
  btn.disabled = true;
  input.disabled = true;
}