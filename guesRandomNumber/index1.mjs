import PromptSync from "prompt-sync";
import randomIntegerInRange from "random-integer-in-range";
const prompt = PromptSync();
// Get minimum and maximum number from user
let min = Number(prompt("Enter Min number: "));
let max = Number(prompt("Enter Max number: "));

// generate random number using range
let random = randomIntegerInRange(min, max);
for (let i = 0; i <= 4; i++) {
    let userChoice = Number(prompt("Enter a number to guess: "));
    if (random === userChoice) {
        console.log("You are win ");
        break;
    } else if (i === 4) {
        console.log("you lost the game")
    } else {
        console.log("Try again");
    }

}
