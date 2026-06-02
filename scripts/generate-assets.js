const fs = require('fs');
const sharp = require('sharp');

async function createAssets() {
  try {
    // 1. og-default.jpg
    await sharp('./public/hero-bride.webp')
      .resize(1200, 630, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 80 })
      .toFile('./public/og-default.jpg');
    console.log('og-default.jpg created');

    // 2. SVG Monogram for favicon and apple-touch-icon
    const svgBuffer = Buffer.from(`<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#f5efe6"/>
      <text x="256" y="360" font-family="Georgia, serif" font-size="380" fill="#b8893e" text-anchor="middle">M</text>
    </svg>`);

    // 3. apple-touch-icon.png
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile('./public/apple-touch-icon.png');
    console.log('apple-touch-icon.png created');

    // 4. favicon.ico (For simplicity we'll just create a 32x32 PNG and rename it to .ico which works in all modern browsers, or we can just use favicon.ico as a PNG)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('./public/favicon.ico');
    console.log('favicon.ico created');

  } catch (err) {
    console.error('Error creating assets:', err);
  }
}
createAssets();
