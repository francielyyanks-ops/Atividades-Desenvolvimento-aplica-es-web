let saldo = 0;

function atualizarSaldo() {
  document.getElementById("saldo").textContent = `R$ ${saldo.toFixed(2)}`;
}

function mostrarMensagem(texto, cor) {
  const msg = document.getElementById("mensagem");
  msg.textContent = texto;
  msg.style.color = cor;
}

function depositar() {
  const valor = parseFloat(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    mostrarMensagem(" O valor precisa ser maior que zero!", "red");
    return;
  }

  saldo += valor;
  atualizarSaldo();
  mostrarMensagem(` Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`, "green");
  document.getElementById("valor").value = "";
}

function sacar() {
  const valor = parseFloat(document.getElementById("valor").value);

  if (isNaN(valor) || valor <= 0) {
    mostrarMensagem(" Por favor, insira um valor valido para saque.", "red");
    return;
  }

  if (valor > saldo) {
    mostrarMensagem(" Saldo insuficiente. Tente um valor menor.", "red");
  } else {
    saldo -= valor;
    atualizarSaldo();
    mostrarMensagem(` Saque de R$ ${valor.toFixed(2)} realizado!`, "green");
  }

  document.getElementById("valor").value = "";
}

function resetar() {
  saldo = 0;
  atualizarSaldo();
  mostrarMensagem(" Caixa reiniciado. Seu saldo agora é R$ 0,00.", "#3a3333ff");
}
