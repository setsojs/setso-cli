import { mkdir, writeFile, readFile } from "fs/promises";
import { createSpinner } from "nanospinner";
import { addScript } from "./addScript.js";

export async function initDirs() {
    const spin = createSpinner("Scaffolding").start();
    const res = addScript((await readFile("./package.json")).toString());
    await writeFile("./package.json", res);
    await mkdir("./content");
    await writeFile(
        "./content/test.md",
        `
# You can write markdown

LOREM IMPUS DOLOR
    `
    );
    await writeFile(
        "./content/test.mdx",
        `
# And mdx TOO   

LOREM IMPUS DOLOR 
    `
    );
    spin.success();
}
