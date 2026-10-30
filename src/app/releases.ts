// All content for the homepage lives here, so new releases only need a new entry.

export type StreamLink = { label: string; url: string };

export type Release = {
  title: string;
  artist: string;
  type: 'Original' | 'Remix' | 'Edit';
  cover: string;
  url: string;
};

// HyperFollow lists every store until the direct store links are known.
const THAT_ONE_GIRL_HYPERFOLLOW = 'https://distrokid.com/hyperfollow/raphmilla/that-one-girl';

export type FeaturedRelease = {
  title: string;
  label: string;
  cover: string;
  stream: StreamLink[];
  visualizer?: string;
  bandcamp?: string;
  // Bandcamp page of the DJ-friendly extended mix; hidden until set
  extended?: string;
  // Short self-hosted clip played from the cover
  preview?: string;
};

// Also served on its own at /that-one-girl
export const thatOneGirl: FeaturedRelease = {
  title: 'That One Girl',
  label: 'Out now',
  cover: '/releases/that-one-girl.jpg',
  stream: [
    { label: 'Spotify', url: 'https://open.spotify.com/track/1OzVFy930Wmc0P0cANxy5X' },
    { label: 'Apple Music', url: 'https://music.apple.com/album/6823834234?i=6823834235' },
    { label: 'YouTube Music', url: THAT_ONE_GIRL_HYPERFOLLOW },
    { label: 'Amazon Music', url: THAT_ONE_GIRL_HYPERFOLLOW },
  ],
  visualizer: 'https://www.youtube.com/watch?v=vneQSKmNQYM',
  bandcamp: 'https://raphmilla.bandcamp.com/track/that-one-girl',
  extended: 'https://raphmilla.bandcamp.com/track/that-one-girl-extended-version',
  preview: '/audio/that-one-girl-preview.m4a',
};

// The release shown at the top of the homepage
export const featured = thatOneGirl;

export const featuredSet = {
  title: 'Funky Feel-Good House Session',
  duration: '1:16:04',
  youtubeId: 'aH1ejbDJwD0',
  thumbnail: '/releases/set-funky-feel-good.jpg',
  mixcloud: 'https://www.mixcloud.com/RaphMilla/funky-feel-good-house-session/',
};

export const moreSets = [
  {
    title: 'Sunny Balcony Mix',
    duration: '51:48',
    url: 'https://www.youtube.com/watch?v=XeSOzbluX24',
  },
];

export const releases: Release[] = [
  {
    title: 'That One Girl',
    artist: 'Raph Milla',
    type: 'Original',
    cover: '/releases/that-one-girl.jpg',
    url: 'https://open.spotify.com/track/1OzVFy930Wmc0P0cANxy5X',
  },
  {
    title: 'Love Come Down',
    artist: 'Evelyn King',
    type: 'Remix',
    cover: '/releases/love-come-down.jpg',
    url: 'https://www.youtube.com/watch?v=9L7G-ziHc0Y',
  },
  {
    title: 'Schwarze SUVs',
    artist: 'Paula Hartmann',
    type: 'Edit',
    cover: '/releases/schwarze-suvs.jpg',
    url: 'https://www.youtube.com/watch?v=AyQpVLg4rMo',
  },
  {
    title: 'Take My Mind',
    artist: 'WizTheMc',
    type: 'Edit',
    cover: '/releases/take-my-mind.jpg',
    url: 'https://www.youtube.com/watch?v=qWFP1q3jgqc',
  },
  {
    title: 'The Color Violet',
    artist: 'Tory Lanez',
    type: 'Edit',
    cover: '/releases/the-color-violet.jpg',
    url: 'https://www.youtube.com/watch?v=w9bxg5CNfls',
  },
];

// Entries without a url are hidden until the link is known.
export const socials = [
  { label: 'Instagram', url: 'https://www.instagram.com/raphmillamusic/', icon: '/icons/instagram.svg' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@raphmilla', icon: '/icons/tiktok.svg' },
  { label: 'YouTube', url: 'https://www.youtube.com/@raphmilla', icon: '/icons/youtube.svg' },
  { label: 'SoundCloud', url: 'https://soundcloud.com/raphmilla', icon: '/icons/soundcloud.svg' },
  { label: 'Spotify', url: 'https://open.spotify.com/artist/7tIcunX6ryBI3VpYv4UNZA', icon: '/icons/spotify.svg' },
  { label: 'Apple Music', url: 'https://music.apple.com/artist/6823780521', icon: '/icons/applemusic.svg' },
];

export const playlist = {
  title: 'Groovy Mix',
  description: 'Groovy, funky feel-good house with a tech house drive and disco flavors.',
  cover: '/releases/playlist-groovy-mix.jpg',
  url: 'https://open.spotify.com/playlist/4gJG7zt2YgFcZpVtGBjqvM',
};
