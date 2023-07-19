import inquirer from "inquirer";

export async function askNameOfApp() {
  const response = await inquirer.prompt({
    type: 'confirm',
    name: 'git',
    message: 'Do you want to initilze a git repo?',
    default: false,
  });
  return response.git;
}
