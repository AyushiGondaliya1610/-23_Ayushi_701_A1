//CLI  using Node's readline module.

const readline = require('readline');
const getBotResponse = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});

console.log("TravelBot is online! Type your question or type 'exit' to quit.");

rl.setPrompt('>');
rl.prompt();

rl.on("line",(input) => {
    if (input.toLowerCase() === 'exit') {
        console.log("Exiting TravelBot. Goodbye!");
        rl.close();
    } else {
        const response = getBotResponse(input);
        console.log(`TravelBot: ${response}`);
        rl.prompt();
    }
});