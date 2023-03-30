import { execa } from "execa";
import { mkdir } from "fs/promises";
import { join } from "path";
import { chdir, cwd } from "process";
import { createSpinner } from "nanospinner";

export async function mkDirAndInit(pm: string, pathName: string) {
    const path = join(cwd(), pathName);
    await mkdir(path);
    chdir(path);
    const spinInit = createSpinner("Initializing").start();
    if (pm === "npm") {
        await execa(pm, ["init", "-y"]).on("close", (code: number) => {
            if (code === 0) {
                spinInit.success();
            } else {
                spinInit.error();
            }
        });
    } else {
        await execa(pm, ["init"]).on("close", (code: number) => {
            if (code === 0) {
                spinInit.success();
            } else {
                spinInit.error();
            }
        });
    }
    const spin = createSpinner("Installing deps with " + pm).start();
    if (pm === "yarn") {
        await execa(pm, ["add", "-D", "setso", "vite"]).on(
            "close",
            (code: number) => {
                if (code === 0) {
                    spin.success();
                } else {
                    spin.error();
                }
            }
        );
    } else {
        await execa(pm, ["add", "-D", "setso", "vite"]).on(
            "close",
            (code: number) => {
                if (code === 0) {
                    spin.success();
                } else {
                    spin.error();
                }
            }
        );
    }
}
