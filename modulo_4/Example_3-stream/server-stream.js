const http = require("http");
const fs = require("fs");
const sharp = require("sharp");

const server = http.createServer(async (req, res) => {
    const inputImg = await fs.createReadStream("./imgConstelation.png")
    const grayscaleTransformation = sharp().grayscale()
    
    inputImg.pipe(grayscaleTransformation).pipe(res);
})

const port = 3002;
server.listen(port)