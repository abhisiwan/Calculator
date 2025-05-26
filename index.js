var result = document.getElementById("result");
var alertP = document.getElementById("alert");
function input(num) {
  result.value += num;
}

function calc() {
  var finalResult = eval(result.value);
  result.value = finalResult;
}

function cancel() {
  result.value = "";
}

function even() {
  var num = result.value;
  if (num % 2 == 0) {
    alertP.innerHTML = "Even Number";
    alertP.style.color = "dogerblue";
    result.value = "";
  } else {
    alertP.innerHTML = "This is not an Even Number";
    alertP.style.color = "red";
    result.value = "";
  }
}
