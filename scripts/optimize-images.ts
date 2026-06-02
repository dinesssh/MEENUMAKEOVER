import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ORIGINALS_DIR = path.join(PUBLIC_DIR, 'originals');

const MAX_SIZE_BYTES = 200 * 1024; // 200KB
const MAX_DIMENSION = 2400;
const QUALITY = 82;

async function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    await fs.promises.mkdir(dirPath, { recursive: true });
  }
}

async function walkDir(dir: string): Promise<string[]> {
  const files = await fs.promises.readdir(dir);
  let allFiles: string[] = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'originals' || file === 'node_modules') continue;

    const stat = await fs.promises.stat(fullPath);
    if (stat.isDirectory()) {
      allFiles = allFiles.concat(await walkDir(fullPath));
    } else {
      allFiles.push(fullPath);
    }
  }

  return allFiles;
}

async function run() {
  await ensureDir(ORIGINALS_DIR);
  
  const files = await walkDir(PUBLIC_DIR);
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  
  console.log('Starting image optimization...');
  const results = [];

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    
    // Cleanup double extensions like .JPG.jpeg
    const parsed = path.parse(filePath);
    if (parsed.name.toUpperCase().endsWith('.JPG') && ext === '.jpeg') {
      const fixedPath = path.join(parsed.dir, parsed.name.slice(0, -4) + '.jpg');
      await fs.promises.rename(filePath, fixedPath);
      console.log(`Renamed double extension: ${path.basename(filePath)} -> ${path.basename(fixedPath)}`);
      // We will skip optimizing in this iteration, and re-run or just handle fixedPath
      // Let's just handle it as fixedPath now.
      continue; 
    }

    if (!imageExtensions.includes(ext)) continue;

    const stat = await fs.promises.stat(filePath);
    if (stat.size <= MAX_SIZE_BYTES) continue;

    const relativePath = path.relative(PUBLIC_DIR, filePath);
    const originalSavePath = path.join(ORIGINALS_DIR, relativePath);
    await ensureDir(path.dirname(originalSavePath));

    const newExt = '.webp';
    const newRelativePath = relativePath.substring(0, relativePath.lastIndexOf('.')) + newExt;
    const newFilePath = path.join(PUBLIC_DIR, newRelativePath);

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let resizeOpts = {};
      if (metadata.width && metadata.height) {
        if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
          resizeOpts = {
            width: metadata.width > metadata.height ? MAX_DIMENSION : undefined,
            height: metadata.height > metadata.width ? MAX_DIMENSION : undefined,
            fit: 'inside'
          };
        }
      }

      await image
        .resize(resizeOpts)
        .webp({ quality: QUALITY })
        .toFile(newFilePath);

      const newStat = await fs.promises.stat(newFilePath);

      results.push({
        file: relativePath,
        beforeKB: (stat.size / 1024).toFixed(2),
        afterKB: (newStat.size / 1024).toFixed(2),
        reduction: (((stat.size - newStat.size) / stat.size) * 100).toFixed(1) + '%'
      });

      // Move original to originals folder
      await fs.promises.rename(filePath, originalSavePath);

    } catch (err) {
      console.error(`Failed to optimize ${relativePath}:`, err);
    }
  }

  // Handle double extension renaming loop correctly
  const filesAgain = await walkDir(PUBLIC_DIR);
  for (const filePath of filesAgain) {
    const ext = path.extname(filePath).toLowerCase();
    if (!imageExtensions.includes(ext)) continue;

    const stat = await fs.promises.stat(filePath);
    if (stat.size <= MAX_SIZE_BYTES) continue;

    const relativePath = path.relative(PUBLIC_DIR, filePath);
    const originalSavePath = path.join(ORIGINALS_DIR, relativePath);
    await ensureDir(path.dirname(originalSavePath));

    const newExt = '.webp';
    const newRelativePath = relativePath.substring(0, relativePath.lastIndexOf('.')) + newExt;
    const newFilePath = path.join(PUBLIC_DIR, newRelativePath);

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let resizeOpts = {};
      if (metadata.width && metadata.height) {
        if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) {
          resizeOpts = {
            width: metadata.width > metadata.height ? MAX_DIMENSION : undefined,
            height: metadata.height > metadata.width ? MAX_DIMENSION : undefined,
            fit: 'inside'
          };
        }
      }

      await image
        .resize(resizeOpts)
        .webp({ quality: QUALITY })
        .toFile(newFilePath);

      const newStat = await fs.promises.stat(newFilePath);

      results.push({
        file: relativePath,
        beforeKB: (stat.size / 1024).toFixed(2),
        afterKB: (newStat.size / 1024).toFixed(2),
        reduction: (((stat.size - newStat.size) / stat.size) * 100).toFixed(1) + '%'
      });

      // Move original to originals folder
      await fs.promises.rename(filePath, originalSavePath);

    } catch (err) {
      console.error(`Failed to optimize ${relativePath}:`, err);
    }
  }

  // LQIP for IMG_9609
  const heroImageName = 'gallery/IMG_9609.webp'; // assuming it got converted to webp
  const heroImagePath = path.join(PUBLIC_DIR, heroImageName);
  if (fs.existsSync(heroImagePath)) {
    const lqipPath = path.join(PUBLIC_DIR, 'gallery/IMG_9609_lqip.webp');
    await sharp(heroImagePath)
      .resize(20)
      .blur()
      .webp({ quality: 20 })
      .toFile(lqipPath);
    console.log('Generated LQIP for IMG_9609');
  }

  console.table(results);
}

run().catch(console.error);
