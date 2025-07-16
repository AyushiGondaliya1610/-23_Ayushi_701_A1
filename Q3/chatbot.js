//logic

function getBotResponse(message)
{
    const msg= message.toLowerCase();

    if(msg.includes("hello") || msg.includes("hi")){
        return "Hello!I'm your Travel Assistant. How can I assist you today?";
    }
    else if (msg.includes("book") && msg.includes("flight")) {
        return "Sure, I can help you book a flight. Where do you want to go?";
    } else if (msg.includes("places") || msg.includes("recommend")) {
        return "I recommend visiting Paris, Bali, or Tokyo. They're amazing!";
    } else if (msg.includes("thanks") || msg.includes("thank you")) {
        return "You're welcome! Have a safe journey!";
    } else {
        return "Sorry, I can only help with travel-related questions.";
    }
}
module.exports = getBotResponse;