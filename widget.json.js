import pkg from "./package.json" with { type: "json" };
import { writeFile, copyFile } from "fs/promises";

const json = {
    "name": pkg.name,
    "author": pkg.author,
    "url": pkg.repository.url,
    "version": pkg.version,
    "minAppVersion": "2.8.8",
    "displayName": {
        "default": "Secret Block",
        "zh_CN": "加密文本"
    },
    "description": {
        "default": "This widget can encrypt and store text to protect certain sensitive information, so that others can view your notes but cannot access sensitive information.",
        "zh_CN": "这个挂件可以加密存储文本，用于保护某些敏感信息，让别人可以虽然可以查看你的笔记但是不能访问敏感信息。"
    },
    "readme": {
        "default": "README.md",
        "zh_CN": "README.md"
    },
    "funding": {
        "openCollective": "",
        "patreon": "",
        "github": "",
        "custom": [
        ]
    }
};


async function writeJson() {
    try {
        await writeFile("./dist/widget.json", JSON.stringify(json, null, 4));        
        await writeFile("./widget.json", JSON.stringify(json, null, 4));
        await copyFile('./preview.png', './dist/preview.png');
        await copyFile('./icon.png', './dist/icon.png');
        await copyFile('./README.md', './dist/README.md');
    } catch (error) {
        console.error("Error writing files:", error);
    }
}

writeJson();