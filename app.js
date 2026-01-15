const fs = require("fs").promises;

const text = "This is a test - and should be stored in a file!";

fs.writeFile("node-message.txt", text)
  .then((result) => {
    console.log("wrote file!");
  })
  .catch((err) => {
    console.log(err);
  });
