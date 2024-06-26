const fs = require('fs');
const printPixels = require("./bmpPixelPrinter")

const readableStream = fs.createReadStream('./fine.bmp');
const writableStream = fs.createWriteStream('./outputImage.bmp')

readableStream.on("data", (chunk) => {
    //console.log(chunk);
    printPixels(chunk);
    writableStream.write(chunk)
});

readableStream.on("end", () => {
    console.log("End of reading file!")
    writableStream.end();
});

writableStream.on("end", () => {
    console.log("End of writing file!")
});

readableStream.on("error", () => {
    console.log("Error in reading file")
})

writableStream.on("error", () => {
    console.log("Error in writing file")
})
