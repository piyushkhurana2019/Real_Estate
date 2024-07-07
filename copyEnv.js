import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceEnvPath = path.join(__dirname, '.env');
const targetDir = path.join(__dirname, 'client'); // replace 'subdirectory' with your target subdirectory
const targetEnvPath = path.join(targetDir, '.env');

async function copyEnvFile() {
  try {
    // Ensure the target directory exists
    await fs.mkdir(targetDir, { recursive: true });

    // Copy the contents of the .env file
    await fs.copyFile(sourceEnvPath, targetEnvPath);

    console.log(`.env file copied to ${targetEnvPath}`);
  } catch (err) {
    console.error('Error copying .env file:', err);
  }
}

copyEnvFile();
