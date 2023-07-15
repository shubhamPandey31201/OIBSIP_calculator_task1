function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  var result = document.getElementById("result").value;
  var calculatedResult = eval(result);
  document.getElementById("result").value = calculatedResult;
}

function calculateTrig(operation) {
  var result = document.getElementById("result").value;
  var angle = parseFloat(result);
  var radians = angle * (Math.PI / 180);
  var calculatedResult = Math[operation](radians);
  document.getElementById("result").value = calculatedResult;
}

function calculateSqrt() {
  var result = document.getElementById("result").value;
  var calculatedResult = Math.sqrt(result);
  document.getElementById("result").value = calculatedResult;
}
