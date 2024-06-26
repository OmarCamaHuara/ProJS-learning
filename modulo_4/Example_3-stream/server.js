const http = require("http");
const fs = require("fs/promises");
const sharp = require("sharp");

const server = http.createServer(async (req, res) => {
    try {
        const inputImg = await fs.readFile("./imgConstelation.png")
        const outputImg = await sharp(inputImg).grayscale().toBuffer(); 
        
        res.writeHead(
            200, 
            { "Content-Type": "image/png" }
        );
        res.end(outputImg)
    } catch (error) {
        res.writeHead(500);
        res.end(JSON.stringify(error))
    }
})

const port = 3001;
server.listen(port)