const fs = require("fs/promises");
const EventEmitter = require("events");

class FileReadEmitter extends EventEmitter {
    async readFile(file) {
        this.emit("beforeRead", file)
        try {
            const data = await fs.readFile(file, "utf-8");
            this.emit("read", file, data)
            this.emit("afterRead", file)
        } catch (error) {
            this.emit("error", error)
        }
    }

    async readFiles(files) {
        if(!Array.isArray(files)) {
            throw new TypeError("The argument must be an array of files paths")
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

fileReadEmitter.on("read", (file, data) => {
    console.log(`File ${file} read successfully ===> `, data)
});

fileReadEmitter.on("error", (error) => {
    console.error(`There was an error: ${error}`)
});

fileReadEmitter.on("beforeRead", (file) => {
    console.log(`Reading file ${file}`)
})

fileReadEmitter.on("afterRead", (file) => {
    console.log(`Finishing reading ${file}`)
});

// (async () => {
//     await fileReadEmitter.readFile("file_1.txt")
//     await fileReadEmitter.readFile("file_2.txt")
//     await fileReadEmitter.readFile("file_3.txt")
// })();

(async () => {
    try {
        await fileReadEmitter.readFiles(["file_1.txt", "file_2.txt", "file_3.txt"])
    } catch (error) {
        console.error(`There was an error in the readFiles method: ${error}`)
    }
})();