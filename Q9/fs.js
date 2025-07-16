const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.txt");
const newFilePath = path.join(__dirname, "renamed.txt");

//  Write a file (async)
fs.writeFile(filePath, "This is an example file.\n", (err) => {
  if (err) throw err;
  console.log(" File written.");

  //Append data (async)
  fs.appendFile(filePath, "Appending some extra content.\n", (err) => {
    if (err) throw err;
    console.log(" File appended.");

    // Read the file (async)
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) throw err;
      console.log(" File content:\n", data);

      // Rename the file
      fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err;
        console.log(" File renamed.");

        // Get file stats
        fs.stat(newFilePath, (err, stats) => {
          if (err) throw err;
          console.log(" File stats:", stats);

          // Delete the file
          fs.unlink(newFilePath, (err) => {
            if (err) throw err;
            console.log("🗑️ File deleted.");
          });
        });
      });
    });
  });
});
