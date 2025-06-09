import fs from "fs";
import path from "path";

const iconsDir = path.resolve("public/img/icons");
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));

files.forEach((file) => {
  const filePath = path.join(iconsDir, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Заменяем fill="что угодно" на fill="currentColor"
  content = content.replace(/fill="[^"]*"/g, 'fill="currentColor"');

  fs.writeFileSync(filePath, content);
});

console.log("Заменили fill на currentColor во всех SVG");
