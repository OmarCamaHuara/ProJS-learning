const fs = require('fs/promises')

async function main() {
    console.log("====== Read file ======")
    try {
        const data = await fs.readFile("input.txt", "utf-8")
        console.log("File content: ", data)
    } catch (error) {
        console.error("Error reading file: ", error)
    }

    console.log("====== Create file with a text ======")
    try {
        await fs.writeFile("output.txt", "Hello world!", "utf-8");
        console.log("File created successfully!");
    } catch (error) {
        console.error("Error creating file: ", error)
    }

    console.log("====== Copy file ======");

    try {
        await fs.copyFile("input.txt", "input-copy.txt");
        console.log("File copied successfully!");
    } catch (error) {
        console.error("Error copy file: ", error);
    }

    try {
        await fs.rename("input-copy.txt", "input-rename.txt")
        console.log("File renamed successfully!")
    } catch (error) {
        console.error("Error renaming file: ", error);
    }

    setTimeout(() => {
        try {
            fs.unlink("input-rename.txt");
            console.log("File deleted successfully");
        } catch (error) {
            console.error("Error deleting file: ", error);
        }
    }, 3000);
   
}

main();

