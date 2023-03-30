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
    await writeFile("./readme.md", `
# Welcome to setso + vite

> If you already know how to use setso, you can skip this document.

## What is this

This is the recommended template to start using setso with vite.

## Installation

"""bash
git clone https://github.com/sesto/template
"""

## Available commands

### "dev"

"""shell
npm run dev
"""

Start the vite server.

`.replaceAll('"', '`'))
    spin.success();
}
