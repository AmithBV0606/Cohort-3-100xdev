const fs = require("fs");

function read(err, contents){
    if (err) {
        console.log("File not found!!");
    } else {
        console.log(contents);5
    }
}

fs.readFile("a.txt", "utf8", read)

fs.readFile("b.txt", "utf8", read)

console.log("Done");
