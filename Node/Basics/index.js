
const fs = require("fs")
const { Command } = require("commander");

const program = new Command();

program
    .name("counter")
    .description("A CLI to do file based tasks")
    .version("1.0.0")

program
    .command('count_words')
    .description("Count the number of words in a file")
    .argument("<file>", "File to count")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            const words = data.split(" ").length;
            console.log("This file has " + words + " words.");
        })
    });
    
program
    .command('count_sentences')
    .description("Count the number of sentences in a file")
    .argument("<file>", "File to count")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                console.log(err);
            }
            else{
                const sentences = data.split("\n").length;
                console.log("This file has " + sentences + " sentences.");
            }
        });
    });

program.parse();