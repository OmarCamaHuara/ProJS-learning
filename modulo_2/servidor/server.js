const http = require("http"); //modulo
const fs = require("fs/promises");
const url = require("url"); // Permite interpretar os parametros de las urls

const server = http.createServer(async (request, response) => {
    const queryObject = url.parse(request.url, true).query;
    const fileName = queryObject.file;

    if(fileName){
        try {
            const data = await fs.readFile(fileName, "utf-8")
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(data);
            response.end();
        } catch(error) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("File not found"); 
            response.end();
        } 
    } else {
       response.writeHead(400, {"Content-Type": "text/plain"});
       response.write("Bad request: please provide a file name"); 
       response.end();
    }
}); 

// http://localhost:3000/?file=file_1.txt

const port = 3000;
server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

