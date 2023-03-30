import inquirer from "inquirer";

export async function askNameOfApp() {
    const response = await inquirer.prompt({
        type: "input",
        name: "appName",
        message: "How should we name your app?",
        default: "setso-app",
    });
    return response.appName;
}
