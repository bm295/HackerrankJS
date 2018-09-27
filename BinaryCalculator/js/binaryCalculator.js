var btn0 = document.getElementById("btn0")
var btn1 = document.getElementById("btn1")
var btnClr = document.getElementById("btnClr")
var btnSum = document.getElementById("btnSum")
var btnSub = document.getElementById("btnSub")
var btnMul = document.getElementById("btnMul")
var btnDiv = document.getElementById("btnDiv")
var btnEql = document.getElementById("btnEql")
var operatorChar

btn0.onclick = function() {
  concatScreen("0")
}

btn1.onclick = function() {
  concatScreen("1")
}

btnClr.onclick = function() {
  setScreen("")
}

btnSum.onclick = function() {
  prepareOperation('+')
}

btnSub.onclick = function() {
  prepareOperation('-')
}

btnMul.onclick = function() {
  prepareOperation('*')
}

btnDiv.onclick = function() {
  prepareOperation('/')
}

btnEql.onclick = function() {
  setScreen(getResultBy(operatorChar))
}

function getResultBy(operatorChar) {
  var operands = document.getElementById("res").innerHTML.split(operatorChar)
  var result
  switch(operatorChar) {
    case '+':
      result = parseInt(operands[0], 2) + parseInt(operands[1], 2)      
      break;
    case '-':
      result = parseInt(operands[0], 2) - parseInt(operands[1], 2)
      break;
    case '*':
      result = parseInt(operands[0], 2) * parseInt(operands[1], 2)
      break;
    case '/':
      result = parseInt(operands[0], 2) / parseInt(operands[1], 2)
      break;
    default:
      break;
  }
  
  return result.toString(2)
}

function concatScreen(input) {
  document.getElementById("res").innerHTML += input
}

function setScreen(input) {
  document.getElementById("res").innerHTML = input
}

function setOperatorChar(input) {
  operatorChar = input
}

function prepareOperation(operatorChar) {
  concatScreen(operatorChar)
  setOperatorChar(operatorChar)
}
