const { rename } = require("fs");
const fs = require("fs/promises");
const path = require("path");

async function main(){
    try {
        
        await fs.mkdir("test_foder");
        console.log("Folde created successfully");
    } catch (error) {
        console.error("Error creating folder: ", error)
    }

    try {
        await fs.rename("test_foder", "renamed_folder")
        console.log("Folder renamed successfully")
    } catch (error) {
        console.error("Error renaming folder", error)
    }

    try {
        const cont = 1;
        await fs.mkdir("parent_folder");
        await fs.rename("renamed_folder", path.join("parent_folder", "renamed_folder"))
        console.log("Folder moved successfully")
    } catch (error) {
        console.error("Erro moving folder: ", error)
    }

    async function copyFolder(src, dest) {
        try {
            await fs.mkdir(dest);
            const files = await fs.readdir(src)

            for(const file of files) {
                const srcPath = path.join(src, file);
                const destPath = path.join(dest, file);
                const stat = await fs.stat(srcPath);

                if (stat.isDirectory()) {
                    await copyFolder(srcPath, destPath)
                } else {
                    await fs.copyFile(srcPath, destPath)
                }
            }
        } catch (error) {
            console.error("Error copying folder", error)
        }
    }

    try {
        await copyFolder("parent_folder", "copied_folder")
        console.log("Folder copied successfully");
    } catch (error) {
        console.error("Error copying folder: ", error);
    }


    async function removeFolder(folderPath){
        try {
            const files = await fs.readdir(folderPath);
            for( const file of files) {
                const filePath = path.join(folderPath, file);
                const stat = await fs.stat(filePath)

                if (stat.isDirectory) {
                    await removeFolder(filePath)
                } else {
                    await fs.unlink(filePath);
                }
            }
            await fs.rmdir(folderPath)
        } catch (error) {
            console.error("Error deleted folder: ", error);
        }
    }

    setTimeout(() => {
        try {
            removeFolder("copied_folder")
            console.log("Folder deleted successfully");
        } catch (error) {
            console.error("Error deleted folder: ", error);
        }
    }, 3000)

    try {
        await fs.cp("parent_folder", "backup", {recursive: true})
        console.log("Folder cp successfully");
    } catch (error) {
        console.error("Error cp folder: ", error);
    }

    //fs.cp(src, dest, {recursive: true})
    
}

main();