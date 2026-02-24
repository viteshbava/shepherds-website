// This file generates the JSON-LD schema for the Shepherds of Cassini music group.

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const getMusicGroupSchema = () => {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Shepherds of Cassini | Official Website',
      url: baseUrl,
      description: 'Shepherds of Cassini – psychedelic prog metal from Auckland, New Zealand.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'Shepherds of Cassini',
      url: baseUrl,
      description: 'Psychedelic prog metal from Auckland, New Zealand.',
      foundingDate: '2012',
      foundingLocation: {
        '@type': 'Place',
        name: 'Auckland, New Zealand',
      },
      genre: ['Progressive Metal', 'Psychedelic Rock', 'Post-Metal'],
      member: [
        {
          '@type': 'Person',
          name: 'Omar Al-Hashimi',
          roleName: 'Drums',
        },
        {
          '@type': 'Person',
          name: 'Felix Lun',
          roleName: 'Electric Violin',
        },
        {
          '@type': 'Person',
          name: 'Vitesh Bava',
          roleName: 'Bass',
        },
        {
          '@type': 'Person',
          name: 'Brendan Zwaan',
          roleName: 'Guitar, Vocals, Keys',
        },
      ],
      album: [
        {
          '@type': 'MusicAlbum',
          name: 'Shepherds of Cassini',
          url: `${baseUrl}/music/shepherdsofcassini`,
        },
        {
          '@type': 'MusicAlbum',
          name: 'Helios Forsaken',
          url: `${baseUrl}/music/heliosforsaken`,
        },
        {
          '@type': 'MusicAlbum',
          name: 'In Thrall to Heresy',
          url: `${baseUrl}/music/inthralltoheresy`,
        },
      ],
      sameAs: [
        'https://shepherdsofcassini.bandcamp.com/',
        'https://open.spotify.com/artist/7znkRbIN9sOYccThMoIHqM',
        'https://music.apple.com/us/artist/shepherds-of-cassini/738917354',
        'https://www.amazon.com/music/player/artists/B00GHA5UKW/shepherds-of-cassini',
        'https://www.youtube.com/shepherdsofcassini',
        'https://www.facebook.com/shepherdsofcassiniband/',
        'https://www.instagram.com/shepherdsofcassini/',
      ],
      image: `${baseUrl}/imgs/heresy/front-cover-lettering.png`,
    },
  ];
};

export default getMusicGroupSchema;
