/*
- mostrar numeros clicados no display (check)
- colocar numeros um do lado do outro ao clicar nos botoes (check)
- detectar o simbolo da operação ao clicar no botao
- fazer todas as operaçoes
- salvar como previousOperand tudo que vier antes de uma operationKey
- se clicar em uma operationKey pela segunda vez faz a operação e mostra o resultado no previousOperand
- botao ac limpa previous e currentOperand
- botao delete apagar um caracter por vez começando pelo ultimo (check)
*/

savedNumber = document.getElementById('current-operand').innerHTML
function visor(number) {
  savedNumber = document.getElementById('current-operand').innerHTML
  document.getElementById('current-operand').innerHTML = this.savedNumber + number;



}

function clearAll() {
  document.getElementById("current-operand").innerHTML = '';
  document.getElementById("previous-operand").innerHTML = '';
  console.log("clear")
}

function deleteThis() {
  tamanhoDoNumber = document.getElementById('current-operand').innerHTML.length
  document.getElementById('current-operand').innerHTML = document.getElementById('current-operand').innerHTML.slice(0,tamanhoDoNumber - 1)
}


