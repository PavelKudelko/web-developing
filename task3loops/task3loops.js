function factorial() {
    var num = Number(document.getElementById("num1").value);
    var result = 1;
    while (num--) {
        result *= (num + 1)
    }
    document.getElementById("result").textContent = "Result: " + result;
}


function second_calc() {
    var num = Number(document.getElementById("num2").value);
    let result = 0;
    if (num >= 1) {
        for (let i = 1; i <= num; i++) {
            result += i
        }
        document.getElementById("result2").textContent = "Result: " + result;
    } else {
        document.getElementById("result2").textContent = "Invalid input";
    }
}

function third_calc() {
    var num = Number(document.getElementById("num3").value);
    let sum_odd = 0;
    let sum_even = 0;
    for (let i = 1; i <= num; i = i + 2) {
        sum_odd += i
    }
    for (let i = 2; i <= num; i = i + 2) {
        sum_even += i
    }
    document.getElementById("result3").textContent = "Sum of odd: " + sum_odd
     + ";" + " Sum of even: " + sum_even;
}
