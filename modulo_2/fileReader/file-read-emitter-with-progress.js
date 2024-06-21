const fs = require("fs");
const EventEmitter = require("events");

class FileReadEmitter extends EventEmitter {

    readFile(file) {
        this.emit("beforeRead", file);

        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file, {encoding: 'utf-8'});
            let data = '';
            let bytesRead = 0;

            stream.on('data', (chunk) => {
                data += chunk;
                bytesRead += chunk.length;
                this.emit("progress", file, bytesRead);
            });

            stream.on('end', () => {
                this.emit("read", file, data);
                this.emit("afterRead", file);
                resolve();
            });

            stream.on('error', (error) => {
                this.emit("error", error)
                reject(error)
            });
        });
    }

    async readFiles(files) {
        if (!Array.isArray(files)){
            throw new TypeError("The argument must be an array of file paths");
        }

        try {
            const promises = files.map(file => this.readFile(file));
            await Promise.all(promises);
        } catch (error) {
            this.emit("error", error);
        }
    }
}

const fileReadEmitter = new FileReadEmitter();

fileReadEmitter.on("beforeRead", (file) => {
    console.log(`Reading file ${file}`);
});

fileReadEmitter.on("progress", (file, bytesRead) => {
    console.log(`Reading progress of file ${file}: ${bytesRead} bytes read`);
});

fileReadEmitter.on("read", (file, data) => {
    console.log(`File ${file} read successfully  ===>`);
});

fileReadEmitter.on("afterRead", (file) => {
    console.log(`Finishing reading ${file}`);
});


(async () => {
    try {
        await fileReadEmitter.readFiles(["file_1.txt", "file_2.txt", "file_3.txt"])
    } catch (error) {
        console.error(`There was an error in the readFiles method: ${error}`)
    }
})();