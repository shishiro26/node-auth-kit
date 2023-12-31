import fs from "fs-extra";
const filesToCopy = [
  "./config",
  "./Controllers",
  "./middleware",
  "./model",
  "./routes",
  "./utils",
  "./index.js",
  "./env.example",
];

filesToCopy.forEach((file) => {
  fs.copySync(file, `./node_modules/node-auth-kit/${file}`);
});
