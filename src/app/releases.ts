// All content for the homepage lives here, so new releases only need a new entry.

export type StreamLink = { label: string; url: string };

export type Release = {
  title: string;
  artist: string;
  type: 'Original' | 'Remix' | 'Edit';
  cover: string;
  url: string;
  // Easter egg: breathing glow over a spot on the cover, in % of the cover size
  glow?: { x: number; y: number; size: number };
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

export type DjSet = {
  title: string;
  minutes: number;
  youtubeId: string;
  thumbnail: string;
  mixcloud?: string;
};

// DJ sets for "The set", newest first — the first one is shown by default
export const sets: DjSet[] = [
  {
    title: 'Funky Feel-Good House Session',
    minutes: 76,
    youtubeId: 'aH1ejbDJwD0',
    thumbnail: '/releases/set-funky-feel-good.jpg',
    mixcloud: 'https://www.mixcloud.com/RaphMilla/funky-feel-good-house-session/',
  },
  {
    title: 'Sunny Balcony Mix',
    minutes: 52,
    youtubeId: 'XeSOzbluX24',
    thumbnail: '/releases/set-sunny-balcony.jpg',
  },
];

export const releases: Release[] = [
  {
    title: 'That One Girl',
    artist: 'Raph Milla',
    type: 'Original',
    cover: '/releases/that-one-girl.jpg',
    url: '/that-one-girl',
    glow: { x: 45.2, y: 49.9, size: 7.1 },
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
