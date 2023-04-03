// Imports
// Import chalkAnimations for animating text in rainbow form
import chalkAnimation from "chalk-animation";
// Import kebab case to do what it says
import kebab from "just-kebab-case";
// Import argv to get args cli
import { argv } from "process";
// Import askNameOfApp to prompt for the app name
import { askNameOfApp } from "./utils/askNameOfApp.js";
// Import sleep to sleep for x number of seconds
import { sleep } from "./utils/sleep.js";
// Import getPm to get the package manager that is being used
import { getPm } from "./utils/getPm.js";
// Import mkDirAndINit to create the directory and initilize the project with npm
import { mkDirAndInit } from "./utils/mkDirAndInit.js";
// Import initilize dirs to create basic directorys
import { initDirs } from "./utils/initDirs.js";

// We get the package manager
const pm = getPm();

const animation = chalkAnimation.rainbow("Welcome to the setso cli!");

animation.start();
await sleep(1000);
animation.stop();

let response;

if (argv[2] !== undefined) {
  response = kebab(argv[2])
} else {
  response = kebab(await askNameOfApp());
}

await mkDirAndInit(pm, response);
await initDirs();

const ani = chalkAnimation.rainbow("DONE!!");

ani.start();
await sleep(1000);
ani.stop();

console.log(`
    Next steps:

    cd ${response}
    ${pm} run dev

    Read the documentation:
    https://github.com/setsojs/setso/tree/dev/docs/guides
`);
