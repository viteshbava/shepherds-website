import BlurImage from '../../BlurImage';
import ScrollReveal from '../../ui/ScrollReveal';
import { Image } from '@/app/types';

interface ImageGridProps {
  images: Image[];
  onClickImage: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onClickImage }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4'>
      {images.slice(0, 6).map((image, index) => (
        <ScrollReveal key={image.url} delay={index * 80}>
          <div
            className='relative w-full aspect-square cursor-pointer hover:scale-[1.02] transition-all duration-200'
            onClick={() => onClickImage(index)}>
            <BlurImage
              src={image.url}
              alt={image.altText}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-sm object-cover'
            />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ImageGrid;
