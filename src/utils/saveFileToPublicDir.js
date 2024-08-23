import fs from "node:fs/promises"
import path from "node:path"

import { PUBLIC_DIR } from "../constants/index.js";

const saveFileToPublicDir = async (file, filePath) => {
    const newPath = path.join(PUBLIC_DIR, filePath, file.filename)
  await fs.rename(file.path, newPath);
  
  return `${env('APP_DOMAIN')}/uploads/${file.filename}`;
};

export default saveFileToPublicDir;