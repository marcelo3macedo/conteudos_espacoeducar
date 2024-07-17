import fs from 'fs';
import path from 'path';

export function readFiles(name: string) {
  const dataPath = path.join(process.cwd(), 'data', name);

  if (!fs.existsSync(dataPath)) {
    throw new Error('No data not found');
  }

  const fileContents = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(fileContents);
}
