// lib/getGalleryImages.ts
import fs from 'fs';
import path from 'path';

export const getGalleryImages = (): string[] => {
  const galleryDir = path.join(process.cwd(), 'public/imgs/gallery');
  const imageFiles = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/.test(file));

  // Shuffle images
  for (let i = imageFiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageFiles[i], imageFiles[j]] = [imageFiles[j], imageFiles[i]];
  }

  return imageFiles;
};
