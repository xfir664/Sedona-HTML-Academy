import fs from "fs";
import path from "path";
import SVGO from "svgo";
import { ensureDirSync } from "fs-extra";
import svgoConfig from "./../svgo.config.js";

const rawDir = "./raw/img";

const outputDir = "./public/img";

ensureDirSync(outputDir);

function getAllFiles(dir) {
  const files = [];

  const dirents = fs.readdirSync(dir, { withFileTypes: true });

  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      files.push(...getAllFiles(res));
    } else {
      files.push(res);
    }
  }

  return files;
}

async function processSVG(inputPath, outputPath) {
  try {
    const fileContent = fs.readFileSync(inputPath, "utf8");

    const result = await SVGO.optimize(fileContent, {
      path: inputPath,
      ...svgoConfig,
    });

    if (result.data) {
      ensureDirSync(path.dirname(outputPath));
      fs.writeFileSync(outputPath, result.data);
      console.log(`Processed: ${outputPath}`);
    } else {
      console.warn(`No data returned for: ${inputPath}`);
    }
  } catch (error) {
    console.error(`Error processing SVG: ${inputPath}`, error);
  }
}

async function processSVGs() {
  try {
    const allFiles = getAllFiles(rawDir);

    for (const filePath of allFiles) {
      const extname = path.extname(filePath).toLowerCase();
      if (extname === ".svg") {
        const relativePath = path.relative(rawDir, filePath);
        const outputPath = path.join(outputDir, relativePath);

        await processSVG(filePath, outputPath);
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }
}

processSVGs();
