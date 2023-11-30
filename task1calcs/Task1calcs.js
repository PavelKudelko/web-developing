function first_calc() {
    var operator = document.getElementById("operator1").value;
    var result;

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }
    
    document.getElementById("result").textContent = "Result: " + result;
}


function second_calc() {
    var operator = document.querySelector('input[name="operator2"]:checked').value;
    var result;

    var num1 = Number(document.getElementById("num3").value);
    var num2 = Number(document.getElementById("num4").value);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }
    
    document.getElementById("result2").textContent = "Result: " + result;
}

document.getElementById("up1").addEventListener("click", () => {
    const num5Element = document.getElementById("num5");
    num5Element.value = parseFloat(num5Element.value) + 1;
});

document.getElementById("down1").addEventListener("click", () => {
    const num5Element = document.getElementById("num5");
    num5Element.value = parseFloat(num5Element.value) - 1;
});

document.getElementById("up2").addEventListener("click", () => {
    const num6Element = document.getElementById("num6");
    num6Element.value = parseFloat(num6Element.value) + 1;
});

document.getElementById("down2").addEventListener("click", () => {
    const num6Element = document.getElementById("num6");
    num6Element.value = parseFloat(num6Element.value) - 1;
});

function third_calc() {
    var operator = document.getElementById("operator3").value;
    var result;

    var num1 = Number(document.getElementById("num5").value);
    var num2 = Number(document.getElementById("num6").value);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }
    
    document.getElementById("result3").textContent = "Result: " + result;
}
