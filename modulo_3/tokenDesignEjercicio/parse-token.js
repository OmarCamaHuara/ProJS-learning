const fs = require("fs/promises");


function kebabase(str) {
    return str
        .replace(/([a-z])(A-Z)/g, "$1-$2")
        .replace(/[\s_]+/g, "-")
        .toLowerCase();
}

function processToken(obj) {
    let css = ":root {\n";
    for (const category in obj) {
        const properties = obj[category]
        for (const property in properties) {
            if (property === "$type") continue;
            const cssVarName = `--${kebabase(category)}-${kebabase(property)}`
            const cssValue = properties[property].$value;
            css += ` ${cssVarName}: ${cssValue};\n`
        }
    }
    css += "}\n";
    return css;
}

async function main() {
    try {
       const data = await fs.readFile("./dtcg.json", "utf-8")
       const json = JSON.parse(data)
       const css = processToken(json);
       await fs.writeFile("./design-token.css", css, "utf-8")
       console.log("CSS file generated!!")
    } catch (error) {
        console.error("Error: ", error)
    }
}

main();