#! /usr/bin/env node
import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 4) + 1);
let userInput = await inquirer.prompt({
    type: 'number',
    name: 'guessedNumber',
    message: 'Guess a number between 1 to 4:'
});
if (userInput.guessedNumber === roundNumber) {
    console.log(' Congratulations! You guess correctly!');
}
else {
    console.log(`Sorry! try next time. correct ans is: ${roundNumber}`);
}
