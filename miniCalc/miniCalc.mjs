import PromptSync from "prompt-sync";
const prompt = PromptSync();
// mini calculator
let num1 = prompt("Enter First Number: ");
let num2 = prompt("Enter Second Number: ");
let operation = prompt("Enter 0 for Addition, 1 for Munis, 2 for Multiplication, 3 for Division: ");
let result = null;
if (operation == 0) {
    result = num1 + num2;
} else if (operation == 1) {
    result = num1 - num2;
} else if (operation == 2) {
    result = num1 * num2;
} else if (operation == 3) {
    result = num1 / num2;
} else {
    result = "Please Chose the right option"
}

console.log(result);