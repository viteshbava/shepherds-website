import fs from 'fs';
import path from 'path';
import { Image } from '@/app/types';

interface GetGalleryImagesProps {
  folderPath: string;
  shuffle?: boolean;
}

export const getGalleryImages = ({
  folderPath,
  shuffle = false,
}: GetGalleryImagesProps): Image[] => {
  const galleryDir = path.join(process.cwd(), `public/${folderPath}`);
  const imageFiles = fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp|avif|gif)$/i.test(file));

  // Shuffle images if required
  if (shuffle) {
    for (let i = imageFiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageFiles[i], imageFiles[j]] = [imageFiles[j], imageFiles[i]];
    }
  }

  // Read alt text metadata if available
  const altTextPath = path.join(galleryDir, '_alt-text.json');
  let altTextMap: Record<string, string> = {};
  if (fs.existsSync(altTextPath)) {
    altTextMap = JSON.parse(fs.readFileSync(altTextPath, 'utf-8'));
  }

  return imageFiles.map((image) => ({
    url: `${folderPath}/${image}`,
    altText: altTextMap[image] ?? '',
  }));
};
