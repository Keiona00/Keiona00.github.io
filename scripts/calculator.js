const getInputValue = (name) => {
    return document.getElementById(name).value
}

let result = document.getElementById("result")

document.getElementById("submit-btn").addEventListener("click", () => {
let val = Number(getInputValue("number1"))
let val2 = Number(getInputValue("number2"))

let operator = getInputValue("operator")
    if (operator == "+") {
        result.innerText = (val + val2)
    } else if (operator == "-") {
        result.innerText = (val - val2)
    } else if (operator == "/") {
        if (num2 != 0) {
            result.innerText = (val / val2)
        } else {
            result.innerText = "Cannot divide '" + String(val) + "'' by zero."
        }
    } else if (operator == "x" || operator == "*") {
        result.innerText = (val * val2)
    } else {
        result.innerText = "Invalid operator '" + operator + "' Ex. (+, -, /, x, %)."
    }
})