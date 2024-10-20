import fs from 'fs';
import path from 'path';

interface GetGalleryImagesProps {
  folderPath: string;
  shuffle?: boolean;
}

export const getGalleryImages = ({
  folderPath,
  shuffle = false,
}: GetGalleryImagesProps): string[] => {
  const galleryDir = path.join(process.cwd(), `public/${folderPath}`);
  const imageFiles = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp|gif)$/.test(file));

  // Shuffle images if required
  if (shuffle) {
    for (let i = imageFiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageFiles[i], imageFiles[j]] = [imageFiles[j], imageFiles[i]];
    }
  }

  return imageFiles.map((image) => `${folderPath}/${image}`);
};
