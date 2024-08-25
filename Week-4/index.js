// import chalk from "chalk";

// console.log(chalk.blue('Hello, world!'));
// console.log(chalk.red.bold('This is an error message.'));
// console.log(chalk.green.underline('This is a success message.'));

// To run the above code rename the file to (.mjs)

const fs = require("fs");

function main(fileName){
    fs.readFile(fileName, "utf-8", function(err, data){
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === " ") {
                total++;
            }
        }
        console.log(total+1)
    });
}

main("a.txt");
console.log(process.argv)