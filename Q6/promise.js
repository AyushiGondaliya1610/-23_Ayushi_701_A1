const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

// Promisify fs.unlink
const unlinkAsync = promisify(fs.unlink);

// Path to file to delete
const filePath = path.join(__dirname, "test.txt");

// Create the file to demonstrate deletion
fs.writeFileSync(filePath, "This is a test file.");

// Delete the file using promisified unlink
unlinkAsync(filePath)
  .then(() => {
    console.log("File deleted successfully:", filePath);
  })
  .catch((err) => {
    console.error(" Error deleting file:", err.message);
  });
