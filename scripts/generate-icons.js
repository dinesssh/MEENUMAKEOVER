const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const input = path.join(__dirname, '../public/logo.webp');
  
  const size = 512;
  const roundedCorners = Buffer.from(
    `<svg><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#fff" /></svg>`
  );

  const roundedLogo = await sharp(input)
    .resize(size, size, { fit: 'cover' })
    .composite([{ input: roundedCorners, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // apple-touch-icon (180x180)
  await sharp(roundedLogo)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  // favicon-32x32
  await sharp(roundedLogo)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-32x32.png'));

  // favicon-16x16
  await sharp(roundedLogo)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, '../public/favicon-16x16.png'));

  // favicon.ico (64x64 png fallback)
  await sharp(roundedLogo)
    .resize(64, 64)
    .png()
    .toFile(path.join(__dirname, '../public/favicon.ico'));
    
  console.log('Icons generated successfully.');
}

generate().catch(console.error);
