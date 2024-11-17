'use strict';

const cal = document.querySelector('#start');
cal.addEventListener('click', function(){
  const num1 = parseFloat(document.querySelector('#num1').value);
  const num2 = parseFloat(document.querySelector('#num2').value);
  const x = document.getElementById("operation").value;
  let result;
    if (x === "add") {
      result = num1 + num2;
    } else if (x === "sub") {
      result = num1 - num2;
    } else if (x === "multi") {
      result = num1 * num2;
    } else if (x === "div") {
      result = num1 / num2;
    }else {
      result = "error"
    }
  document.getElementById("result").innerHTML = result;
})