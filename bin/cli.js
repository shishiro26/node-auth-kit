import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`);
    return false;
  }
};
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/shishiro26/autheasy`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloing the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);
// Change directory back to original location
execSync("cd ..");
console.log(`Done installing dependencies for ${repoName}\n`);
