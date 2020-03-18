/*
- mostrar numeros clicados no display (check)
- colocar numeros um do lado do outro ao clicar nos botoes (check)
- detectar o simbolo da operação ao clicar no botao (check)
- fazer todas as operaçoes
- salvar como previousOperand tudo que vier antes de uma operationKey (check*)
- se clicar em uma operationKey pela segunda vez faz a operação e mostra o resultado no previousOperand
- botao ac limpa previous e currentOperand (check)
- botao delete apagar um caracter por vez começando pelo ultimo (check)
- só permitir um ponto por numeral
*/

savedNumber = document.getElementById('current-operand').innerHTML

function visor(number) {
  savedNumber = document.getElementById('current-operand').innerHTML
  document.getElementById('current-operand').innerHTML = this.savedNumber + number;

}

function clearAll() {
  document.getElementById("current-operand").innerHTML = '';
  document.getElementById("previous-operand").innerHTML = '';

}

function deleteThis() {
  tamanhoDoNumber = document.getElementById('current-operand').innerHTML.length
  document.getElementById('current-operand').innerHTML = document.getElementById('current-operand').innerHTML.slice(0, tamanhoDoNumber - 1)

}

function updateVisor(value) {
  document.getElementById("previous-operand").innerHTML = document.getElementById("current-operand").innerHTML + value;
  document.getElementById("current-operand").innerHTML = '';


}




function checkString() {
  intString = document.getElementById("previous-operand").innerHTML + document.getElementById("current-operand").innerHTML
  var str = document.getElementById("previous-operand").innerHTML;
  var checkMultiply = str.includes("*");
  if (checkMultiply === true) {
    number1 = parseFloat(document.getElementById("previous-operand").innerHTML)
    number2 = parseFloat(document.getElementById("current-operand").innerHTML)
    result = number1 * number2
    document.getElementById("current-operand").innerHTML = result
    document.getElementById("previous-operand").innerHTML = '';

    
  }

  var checkPlus = str.includes("+");
  if (checkPlus === true) {
    number1 = parseFloat(document.getElementById("previous-operand").innerHTML)
    number2 = parseFloat(document.getElementById("current-operand").innerHTML)
    result = number1 + number2
    document.getElementById("current-operand").innerHTML = result
    document.getElementById("previous-operand").innerHTML = '';
  }

  var checkDivide = str.includes("÷");
  if (checkDivide === true) {
    number1 = parseFloat(document.getElementById("previous-operand").innerHTML)
    number2 = parseFloat(document.getElementById("current-operand").innerHTML)
    result = number1 / number2
    document.getElementById("current-operand").innerHTML = result
    document.getElementById("previous-operand").innerHTML = '';
  }

  var checkMinus = str.includes("-");
  if (checkMinus === true) {
    number1 = parseFloat(document.getElementById("previous-operand").innerHTML)
    number2 = parseFloat(document.getElementById("current-operand").innerHTML)
    result = number1 - number2
    document.getElementById("current-operand").innerHTML = result
    document.getElementById("previous-operand").innerHTML = '';
  }
}

function checkMultipleOperation(intString) {
  
   
  }
  
  
  
