#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
// Display welcome message
console.log(chalk.italic.bold.bgCyanBright("\n ***WELCOME TO THE COUNTDOWN ⌚ TIMER*** \n"));
// Prompt user for countdown time
const result = await inquirer.prompt({
    name: "UserInput",
    type: "number",
    message: chalk.italic.bold.bgYellowBright(" Please enter the countdown time in seconds : "),
    validate: (input) => {
        if (isNaN(input)) {
            console.log(chalk.bold.bgRedBright(" \n\n Invalid input! Please enter a valid number. "));
            process.exit(1); // Exit the program
        }
        else if (input > 60) {
            console.log(chalk.bold.bgRedBright(" \n\n Invalid input! The countdown time must be less than or equal to 60 seconds."));
            process.exit(1); // Exit the program
        }
        else {
            return true;
        }
    }
});
// Extract user input
let input = result.UserInput;
// Function to start the countdown timer
function startTimer(duration) {
    let timeLeft = duration;
    const interval = setInterval(() => {
        if (timeLeft <= 0) {
            console.log(chalk.bold.bgGreenBright(" Successfully😍 ...Countdown completed! "));
            clearInterval(interval);
            process.exit();
        }
        const min = Math.floor(timeLeft / 60);
        const sec = timeLeft % 60;
        console.log(chalk.bold.blue(`Time left : ${min.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")} seconds`));
        timeLeft -= 1;
    }, 1000);
}
// Start the countdown timer with the user input
startTimer(input);
