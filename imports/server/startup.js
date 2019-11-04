import Songs from '../collections/songs';

// Insert a default song in db
Songs.upsert({
  name: 'Qismat',
  artist: 'Ammy Virk',
  writer: 'Jaani',
  runtime: 643,
  release: new Date('22 Jul 2017'),
}, {
  $set: {
    description: 'Qismat is a punjabi romanticized song reflecting the scarifices we make in love in order to win a perpetual fight against our destiny.',
    imageUrl: '/images/qismat-cover.jpg',
  },
});
