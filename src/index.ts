import chalkAnimation from "chalk-animation";
import { askNameOfApp } from "./utils/askNameOfApp.js";
import { sleep } from "./utils/sleep.js";
import kebab from "just-kebab-case";
import { getPm } from "./utils/getPm.js";
import { mkDirAndInit } from "./utils/mkDirAndInit.js";
import { initDirs } from "./utils/initDirs.js";
import { argv } from "process";

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
