import { redirect } from 'next/navigation';
import musicList from '@/app/data/music/musicList';
import { formatMetaDescr } from '@/app/libs/formatMetaDescr';
import MusicTemplate from '@/app/components/music/MusicTemplate';

interface IParams {
  slug: string;
}

export const generateMetadata = async ({ params }: { params: IParams }) => {
  const { slug } = params;
  const release = musicList.find((release) => release.slug === slug);

  if (!release) return;

  const title = `${release.name} by Shepherds of Cassini`;
  const description = formatMetaDescr(release);

  return {
    title,
    description,
    keywords: `shepherds of cassini new zealand music rock metal progressive post prog psychedelic auckland ${release.name}`,
    openGraph: {
      title,
      description,
      images: [release.frontCover],
    },
    twitter: {
      title,
      description,
      images: [release.frontCover],
    },
  };
};

export default async function MusicRelease({ params }: { params: IParams }) {
  const { slug } = params;
  const release = musicList.find((release) => release.slug === slug);

  if (!release) redirect('/');

  return <MusicTemplate release={release} />;
}
