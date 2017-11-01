const answerEl = document.getElementById("answer");
let number1 = 0;
let number2 = 0;
let operationAction = "";

// put an click event listener on each of the buttons
document.getElementById("add").addEventListener("click", function () {collectData("add");})
document.getElementById("subtract").addEventListener("click", function () {collectData("subtract");})
document.getElementById("multiply").addEventListener("click", function () {collectData("multiply");})
document.getElementById("divide").addEventListener("click", function () {collectData("divide");})

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyNum(num1, num2) {
    let product = num1 * num2;
    return product;  
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addNum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractNum(num1, num2) {
    let difference = num1 - num2;
    return difference;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideNum(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function operation(num1, num2, action) {
    let answer = 0;
    switch (action) {
        case "add":
            answer = addNum(num1, num2);
            break;
        case "subtract":
            answer = subtractNum(num1, num2);
            break;
        case "multiply":
            answer = multiplyNum(num1, num2);
            break;
        default:
            answer = divideNum(num1, num2);
            break;
        }
    // Post the answer in the innerHTML of the h3 id="answer"
    answerEl.innerHTML = `${answer}`
    
}

function collectData(action) {
    number1 = parseInt(document.getElementById("firstNum").value);
    number2 = parseInt(document.getElementById("secondNum").value);
    operationAction = action;
    operation(number1,number2, operationAction); 
}