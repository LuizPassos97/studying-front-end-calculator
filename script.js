/*
- mostrar numeros clicados no display (check)
- colocar numeros um do lado do outro ao clicar nos botoes
- detectar o simbolo da operação ao clicar no botao
- fazer todas as operaçoes
- salvar como previousOperand tudo que vier antes de uma operationKey
- se clicar em uma operationKey pela segunda vez faz a operação e mostra o resultado no previousOperand
- botao ac limpa previous e currentOperand
- botao delete apagar um caracter por vez começando pelo ultimo
*/


var clickedButton = document.getElementsByTagName("button");
for (var i = 0; i < clickedButton.length; i++) {
  (function (i) {
    clickedButton[i].addEventListener("click", function () {
      document.getElementById("current-operand").innerHTML.toString()
      clickedButton = document.getElementsByTagName("button")[i].innerHTML
      document.getElementById("current-operand").innerHTML = clickedButton;
      
       var concat = clickedButton.concat(document.getElementById("current-operand").innerHTML)
       document.getElementById("current-operand").innerHTML = concat
    })
  })(i);
}

function clearAll() {
  document.getElementById("current-operand").innerHTML = ' ';
  document.getElementById("previous-operand").innerHTML = ' ';
  console.log("clear")
}








