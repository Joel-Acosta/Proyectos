let operator = ''
let previousValue = ''
let currentValue = ''



document.addEventListener("DOMContentLoaded", function () {
  //store all components on HTML in our JS
  let clear = document.querySelector("#clear-btn");
  let equal = document.querySelector(".equal");
  let decimal = document.querySelector(".decimal");

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    })
  );

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = previousValue + " " + operator;
      currentScreen.textContent = currentValue;
    })
  );

  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

  equal.addEventListener("click", function () {
    if (currentValue != "" && previousValue != "") {
      calculate();
      previousScreen.textContent = "";
      if (previousValue.length < 10 && currentValue.length < 10) {
        currentScreen.textContent = previousValue;
      } else{
        currentScreen.textContent = previousValue
      }
    }
  });

  decimal.addEventListener('click', function(){
    addDecimal()
  })

}); 

function handleNumber(num) {
  if (currentValue.length < 10) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if(operator === '+'){
        previousValue += currentValue
    }else if (operator === '-'){
        previousValue -= currentValue
    }else if(operator === 'x'){
        previousValue *= currentValue
    }else if(operator === '/'){
        previousValue /= currentValue
    }else{
        return
    }
     previousValue = previousValue.toString()
     currentValue = currentValue.toString()
    
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.'
    }
}