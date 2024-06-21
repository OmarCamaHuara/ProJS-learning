const fs = require('fs');
const printPixels = require("./bmpPixelPrinter")

const readableStream = fs.createReadStream('./fine.bmp');

readableStream.on("data", (chunk) => {
    //console.log(chunk);
    printPixels(chunk);
});

readableStream.on("end", () => {
    console.log("End of file!")
});

readableStream.on("error", () => {
    console.log("Error in read")
})
