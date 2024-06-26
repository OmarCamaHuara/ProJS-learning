const fs = require('fs');
const converTextToMorze = require("./convert-text-to-morze")

const readableStream = fs.createReadStream('./texto.txt', { encoding: 'utf-8' });
const writableStream = fs.createWriteStream('./MorzeText.txt');

readableStream.on("data", (chunk) => {
    if (chunk !== undefined) {
        try {
            const morseCode = converTextToMorze(chunk);
            writableStream.write(morseCode);
        } catch(error) {
            console.error(error)
        }
    } 
})

readableStream.on("end", () => {
    console.log("End of reading text!");
    writableStream.end();
})

writableStream.on("end", () => {
    console.log("End of writing and convert texts")
})

readableStream.on("error", () => {
    console.log("Error in reading file")
})

writableStream.on("error", () => {
    console.log("Error in writin file")
})