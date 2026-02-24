import { redirect } from 'next/navigation';
import musicList from '@/app/data/music/musicList';
import { formatMetaDescr } from '@/app/libs/formatMetaDescr';
import MusicTemplate from '@/app/components/music/MusicTemplate';
import getMusicAlbumSchema from '@/app/libs/getMusicAlbumSchema';

interface IParams {
  slug: string;
}

export const generateMetadata = async ({ params }: { params: Promise<IParams> }) => {
  const { slug } = await params;
  const release = musicList.find((release) => release.slug === slug);

  if (!release) return;

  const title = `${release.name} - Shepherds of Cassini`;
  const description = formatMetaDescr(release);

  return {
    title,
    description,
    keywords: `shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland ${release.name}`,
    alternates: {
      canonical: `/music/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: release.openGraphImg, width: 315, height: 315 }],
    },
    twitter: {
      title,
      description,
      images: [{ url: release.openGraphImg, width: 315, height: 315 }],
    },
  };
};

export default async function MusicRelease({ params }: { params: Promise<IParams> }) {
  const { slug } = await params;
  const release = musicList.find((release) => release.slug === slug);

  if (!release) redirect('/');

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getMusicAlbumSchema(release)) }}
      />
      <MusicTemplate release={release} />
    </>
  );
}
