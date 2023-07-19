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

// Initilize an animation
const animation = chalkAnimation.rainbow("Welcome to the setso cli!");

// Start it
animation.start();
// Wait 1 second
await sleep(1000);
// Stop it
animation.stop();

// Respones (witch is the name of the app)
let response;

// If the argv is not undefined
if (argv[2] !== undefined) {
  // Take that argument
  response = kebab(argv[2])
} else {
  // Prompt for the name of the app
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
