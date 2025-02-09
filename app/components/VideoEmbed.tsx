/*
  HELPER FUNCTIONS
*/

// This function takes a youtube URL, extracts the ID, and then constructs a YouTube embed URL
const getEmbedUrl = (url: string) => {
  const regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

/*
  COMPONENT
*/

interface VideoEmbedProps {
  url: string;
  title?: string;
}

const VideoEmbed = ({ url, title }: VideoEmbedProps) => {
  const embedUrl = getEmbedUrl(url || '');
  if (!embedUrl) return <></>;

  return (
    <iframe
      className='rounded-md lg:rounded-xl mx-auto w-full lg:max-w-[972px] aspect-video'
      src={embedUrl}
      title={title || 'YouTube Video'}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowFullScreen></iframe>
  );
};

export default VideoEmbed;
