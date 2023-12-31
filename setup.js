import fs from "fs";
import path from "path";

const directories = [
  "config",
  "Controllers",
  "logs",
  "middleware",
  "model",
  "routes",
  "utils",
];

const createDirectories = (basePath, dirs) => {
  dirs.forEach((dir) => {
    const directoryPath = path.join(basePath, dir);
    try {
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
        console.log(`Directory created: ${directoryPath}`);
      } else {
        console.log(`Directory already exists: ${directoryPath}`);
      }
    } catch (err) {
      console.error(`Error creating directory: ${directoryPath} - ${err}`);
    }
  });
};

const createUserAuthStructure = () => {
  const userDir = process.cwd();
  createDirectories(userDir, directories);
};

export default createUserAuthStructure;
