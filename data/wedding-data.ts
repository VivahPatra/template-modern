import { WeddingConfig } from '@/types/wedding.types'

export const weddingData: WeddingConfig = {
  brideName: 'Aisha',
  groomName: 'Arjun',
  groomParents: 'Mr. Vikram & Mrs. Priya Mehta',
  brideParents: 'Mr. Farhan & Mrs. Nadia Khan',
  weddingDate: new Date('2027-03-15T17:00:00'),
  hashtag: '#ArjunAishaForever',
  tagline: 'Two souls, one constellation',
  invitationText:
    'In the city where we fell in love, we invite you to celebrate the beginning of our forever. Your presence will light up our evening.',
  heroImage: '/assets/background.webp',

  backgroundMusic: 'https://vivahpatra.co/music/tumhi-dekho-na.mp3',
  events: [
    { id: 'cocktail', name: 'Cocktail Night', emoji: '🍸', date: 'March 13, 2027', time: '8:00 PM', venue: 'Skybar Lounge', venueAddress: 'Connaught Place, Delhi', image: '/assets/events/engagement.webp', color: '#3a8fd4', description: 'Craft cocktails and city lights.' },
    { id: 'mehendi', name: 'Mehendi', emoji: '🌿', date: 'March 14, 2027', time: '4:00 PM', venue: 'The Terrace Garden', venueAddress: 'Hauz Khas Village, Delhi', image: '/assets/events/mehendi.webp', color: '#c0a060', description: 'Henna, music and rooftop vibes.' },
    { id: 'sangeet', name: 'Sangeet Night', emoji: '🎵', date: 'March 14, 2027', time: '9:00 PM', venue: 'The Grand Ballroom', venueAddress: 'The Oberoi, Delhi', image: '/assets/events/sangeet.webp', color: '#e85050', description: 'Dance under chandeliers and city stars.' },
    { id: 'haldi', name: 'Haldi', emoji: '✨', date: 'March 15, 2027', time: '10:00 AM', venue: 'Poolside Deck', venueAddress: 'ITC Maurya, Delhi', image: '/assets/events/haldi.webp', color: '#c0a060', description: 'Golden morning, golden memories.' },
    { id: 'wedding', name: 'The Wedding', emoji: '💍', date: 'March 15, 2027', time: '5:00 PM', venue: 'The Imperial Lawns', venueAddress: 'Janpath, New Delhi', image: '/assets/events/wedding.webp', color: '#c0a060', description: 'Seven vows as the sun sets over the city.' },
    { id: 'reception', name: 'Reception', emoji: '🥂', date: 'March 15, 2027', time: '9:00 PM', venue: 'The Imperial Ballroom', venueAddress: 'Janpath, New Delhi', image: '/assets/events/reception.webp', color: '#3a8fd4', description: 'A night to remember under crystal lights.' },
  ],

  galleryImages: [
    { src: '/assets/gallery/gallery-1.jpg', alt: 'Couple photo 1', span: 'wide' },
    { src: '/assets/gallery/gallery-2.jpg', alt: 'Couple photo 2', span: 'tall' },
    { src: '/assets/gallery/gallery-3.jpg', alt: 'Couple photo 3', span: 'normal' },
    { src: '/assets/gallery/gallery-4.jpg', alt: 'Couple photo 4', span: 'normal' },
    { src: '/assets/gallery/gallery-5.jpg', alt: 'Couple photo 5', span: 'wide' },
    { src: '/assets/gallery/gallery-6.jpg', alt: 'Couple photo 6', span: 'normal' },
  ],

  coupleStory: [
    { date: 'September 2021', title: 'The Meet-Cute', description: 'A chance encounter at a rooftop café in South Delhi. He spilled his coffee, she laughed — the rest is history.', icon: '☕', image: '/assets/story/story-1.jpg' },
    { date: 'April 2022', title: 'First Date', description: 'A midnight drive through Lutyen\'s Delhi, street food at Chandni Chowk, and a sunrise at India Gate.', icon: '🌃', image: '/assets/story/story-2.jpg' },
    { date: 'December 2025', title: 'The Proposal', description: 'On the observation deck of a skyscraper, with the entire city glittering below, he asked the question. She said yes before he finished.', icon: '💍', image: '/assets/story/story-3.jpg' },
    { date: 'March 2027', title: 'Forever Begins', description: 'The city that brought us together will witness our forever. We can\'t wait to celebrate with everyone who matters.', icon: '🏙️', image: '/assets/story/story-4.jpg' },
  ],

  familyBride: [
    { name: 'Farhan Khan', relation: 'Father', photo: '/assets/family/bf.jpg', side: 'bride' },
    { name: 'Nadia Khan', relation: 'Mother', photo: '/assets/family/bm.jpg', side: 'bride' },
    { name: 'Zara Khan', relation: 'Sister', photo: '/assets/family/bb.jpg', side: 'bride' },
  ],

  familyGroom: [
    { name: 'Vikram Mehta', relation: 'Father', photo: '/assets/family/gf.jpg', side: 'groom' },
    { name: 'Priya Mehta', relation: 'Mother', photo: '/assets/family/gm.jpg', side: 'groom' },
    { name: 'Rohan Mehta', relation: 'Brother', photo: '/assets/family/gs.jpg', side: 'groom' },
  ],

  venue: {
    name: 'The Imperial New Delhi',
    address: 'Janpath, Connaught Place, New Delhi — 110001',
    mapUrl: 'https://maps.google.com',
  },

  rsvp: {
    whatsappNumber: '919876543210',
    message: 'Hi! I would like to RSVP for the wedding of Arjun & Aisha on 15th March 2027.',
    deadline: 'February 28, 2027',
  },

  socialLinks: { instagram: 'https://instagram.com' },
}
