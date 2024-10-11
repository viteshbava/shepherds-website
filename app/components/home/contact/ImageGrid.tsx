import Image from 'next/image';

interface ImageGridProps {
  images: string[];
  onClickImage: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onClickImage }) => {
  console.log(images);

  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-4'>
      {images.slice(0, 6).map((image, index) => (
        <div
          key={image}
          className='relative w-full h-48 cursor-pointer'
          onClick={() => onClickImage(index)}>
          <Image
            src={`/gallery/${image}`}
            alt={`Image ${index + 1}`}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
