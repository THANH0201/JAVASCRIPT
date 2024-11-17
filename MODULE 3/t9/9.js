'use strict';

const cal = document.querySelector('#start');
cal.addEventListener('click', function(){
  const calculation = document.getElementById('calculation').value;
  let result;
    if (calculation.includes("+")) {
      const [num1, num2] = (calculation.split("+").map(parseFloat));
      result = num1 + num2;

    } else if (calculation.includes("-")) {
      const [num1, num2] = (calculation.split("-").map(parseFloat));
      result = num1 - num2;
    } else if (calculation.includes("*")) {
      const [num1, num2] = (calculation.split("*").map(parseFloat));
      result = num1 * num2;
    } else if (calculation.includes("/")) {
      const [num1, num2] = (calculation.split("/").map(parseFloat));
      result = num1 / num2;
    }else {
      result = "error"
    }
  document.getElementById("result").innerHTML = result;
})