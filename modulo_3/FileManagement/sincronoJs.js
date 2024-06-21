const fs = require('fs')

function main() {
    console.log("====== Read file ======")
    try {
        const data = fs.readFileSync("input.txt", "utf-8")
        console.log("File content: ", data)
    } catch (error) {
        console.error("Error reading file: ", error)
    }

    console.log("====== Create file with a text ======")
    try {
        fs.writeFileSync("output.txt", "Hello world!", "utf-8");
        console.log("File created successfully!");
    } catch (error) {
        console.error("Error creating file: ", error)
    }

    console.log("====== Copy file ======");

    try {
        fs.copyFileSync("input.txt", "input-copy.txt");
        console.log("File copied successfully!");
    } catch (error) {
        console.error("Error copy file: ", error);
    }

    try {
        fs.renameSync("input-copy.txt", "input-rename.txt")
        console.log("File renamed successfully!")
    } catch (error) {
        console.error("Error renaming file: ", error);
    }

    setTimeout(() => {
        try {
            fs.unlinkSync("input-rename.txt");
            console.log("File deleted successfully");
        } catch (error) {
            console.error("Error deleting file: ", error);
        }
    }, 3000);
   
}

main();

