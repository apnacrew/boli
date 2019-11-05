import { loremIpsum } from 'lorem-ipsum';

function randNum(a, b) {
  return a + Math.floor(Math.random() * (b - a));
}

function generateSong({ numLines }) {
  return {
    name: loremIpsum({ count: randNum(1, 5), units: 'words' }),
    artist: loremIpsum({ count: randNum(2, 3), units: 'words' }),
    writer: loremIpsum({ count: randNum(2, 3), units: 'words' }),
    runtime: randNum(150, 300),
    releaseDate: new Date(`${randNum(1, 12)}/${randNum(1, 30)}/${randNum(1998, 2019)}`),
    description: loremIpsum({ count: randNum(1, 3) }),
    imageUrl: 'https://picsum.photos/1440/400',
    lyrics: {
      orig: {
        lang: loremIpsum({ count: 1, units: 'words' }),
        lines: new Array(numLines).fill().map(() => loremIpsum({ count: 1 })),
      },
      translated: {
        lang: loremIpsum({ count: 1, units: 'words' }),
        lines: new Array(numLines).fill().map(() => loremIpsum({ count: 1 })),
      },
    },
  };
}

export {
  randNum,
  generateSong,
};
