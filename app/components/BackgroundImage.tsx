import Image from 'next/image';

interface BackgroundImageProps {
  url: string;
  altText: string;
}

const BackgroundImage = ({ url, altText }: BackgroundImageProps) => {
  return (
    <div className='absolute top-0 left-0 w-full min-h-svh aspect-square'>
      <Image
        priority
        src={url}
        alt={altText}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='absolute top-0 left-0 w-full transition duration-1000 object-cover opacity-40 blur-sm'
      />
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent'></div>
    </div>
  );
};

export default BackgroundImage;
