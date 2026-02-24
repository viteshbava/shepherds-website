import { redirect } from 'next/navigation';
import musicList from '@/app/data/music/musicList';
import { formatMetaDescr } from '@/app/libs/formatMetaDescr';
import MusicTemplate from '@/app/components/music/MusicTemplate';

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'MusicAlbum',
      name: release.name,
      url: `${baseUrl}/music/${slug}`,
      image: `${baseUrl}${release.frontCover.url}`,
      ...(release.releaseDate && {
        datePublished: release.releaseDate.toISOString().split('T')[0],
      }),
      numTracks: release.trackListing.length,
      byArtist: {
        '@type': 'MusicGroup',
        name: 'Shepherds of Cassini',
      },
      track: {
        '@type': 'ItemList',
        numberOfItems: release.trackListing.length,
        itemListElement: release.trackListing.map((track, index) => ({
          '@type': 'MusicRecording',
          name: track,
          position: index + 1,
          byArtist: {
            '@type': 'MusicGroup',
            name: 'Shepherds of Cassini',
          },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Music',
          item: `${baseUrl}/#music`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: release.name,
          item: `${baseUrl}/music/${slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MusicTemplate release={release} />
    </>
  );
}
