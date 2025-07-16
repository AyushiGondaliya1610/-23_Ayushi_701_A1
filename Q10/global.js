//  __dirname - Directory of current file
console.log("Current directory (__dirname):", __dirname);

// __filename - Full path of current file
console.log(" Current file (__filename):", __filename);

//  global - Global namespace object
global.customVar = "I'm a global variable!";
console.log("Global variable:", global.customVar);

// process - Provides info about the current Node.js process
console.log(" Process ID:", process.pid);
console.log(" Current Working Directory:", process.cwd());
console.log("Node Version:", process.version);

// setTimeout - Timer to run after delay
setTimeout(() => {
  console.log(" Timeout triggered after 1 second");
}, 1000);

// setInterval - Runs repeatedly every interval
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Interval count: ${counter}`);
  if (counter === 3) {
    clearInterval(intervalId); // stop after 3 times
    console.log(" Interval cleared.");
  }
}, 1000);

// console - Global console object
console.log(" This is a standard log.");
console.warn(" This is a warning.");
console.error(" This is an error message.");
