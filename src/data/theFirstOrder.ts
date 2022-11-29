
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/galaxymap-full.png';

const mapData: Map = {
  image: map,
  dimensions: [3371, 3753 ],
  source: 'https://www.reddit.com/r/StarWarsEU/comments/p3qd7o/here_comes_my_canonlegends_map_v22_i_keep_adding/'
};

const theForceAwakensChapterList: Chapter[] = [
  { altName: 'Attack on Tuanal', chapter: 0 },
  { altName: 'The Finalizer', chapter: 1 },
  { altName: `A Scavenger's Discovery`, chapter: 2 },
  { altName: `Escape From The Finalizer`, chapter: 3 },
  { altName: `'That One's Garbage!'`, chapter: 4 },
  { altName: `Reunion`, chapter: 5 },
  { altName: `Wrong Fuses`, chapter: 6 },
  { altName: `Supreme Leader`, chapter: 7 },
  { altName: `BB's Map`, chapter: 8 },
  { altName: `Maz's Castle`, chapter: 9 },
  { altName: `The Conflict Within`, chapter: 10 },
  { altName: `First Steps`, chapter: 11 },
  { altName: `Hosnian Cataclysm`, chapter: 12 },
  { altName: `Battle of Takodana`, chapter: 13 },
  { altName: `The Resistance`, chapter: 14 },
  { altName: `Rey's Imprisonment`, chapter: 15 },
  { altName: `Rescue Party`, chapter: 16 },
  { altName: `Battle of Starkiller Base`, chapter: 17 },
  { altName: `Rey and Ren`, chapter: 18 },
  { altName: `The Celebration`, chapter: 19 },
  { altName: `Luke Skywalker`, chapter: 20 },
];

const theLastJediChapterList: Chapter[] = [
  { altName: `Evacuating D'Qar`, chapter: 0 },
  { altName: `Bomber Run`, chapter: 1 },
  { altName: `Finding Skywalker`, chapter: 2 },
  { altName: `Snoke's Lair`, chapter: 3 },
  { altName: `The Elusive Teacher`, chapter: 4 },
  { altName: `Pursuing the Fleet`, chapter: 5 },
  { altName: `Luke's Change of Heart`, chapter: 6 },
  { altName: `A New Commander`, chapter: 7 },
  { altName: `Rey's First Lesson`, chapter: 8 },
  { altName: `Canto Bight`, chapter: 9 },
  { altName: `Rey's Second Lesson`, chapter: 10 },
  { altName: `Fathier Escape`, chapter: 11 },
  { altName: `The Cave`, chapter: 12 },
  { altName: `Ren's Revelations`, chapter: 13 },
  { altName: `The Burden of All Masters`, chapter: 14 },
  { altName: `Finn Returns 'Home'`, chapter: 15 },
  { altName: `Poe's Mutiny`, chapter: 16 },
  { altName: `Snoke's Trap`, chapter: 17 },
  { altName: `Resistance in Peril`, chapter: 18 },
  { altName: `Snoke's Downfall`, chapter: 19 },
  { altName: `The Holdo Manuever`, chapter: 20 },
  { altName: `Battle of Crait`, chapter: 21 },
  { altName: `Luke's Last Stand`, chapter: 22 },
  { altName: `Rebellion Reborn`, chapter: 23 }
];

const theRiseOfSkywalkerChapterList: Chapter[] = [
  { altName: `Hunt For The Holocron`, chapter: 0 },
  { altName: `The Hidden Emperor`, chapter: 1 },
  { altName: `Lightspeed Skipping`, chapter: 2 },
  { altName: `A Jedi Rises`, chapter: 3 },
  { altName: `Resistance Briefing`, chapter: 4 },
  { altName: `Court of the Supreme Leader`, chapter: 5 },
  { altName: `Mission to Pasaana`, chapter: 6 },
  { altName: `'They Fly Now`, chapter: 7 },
  { altName: `Lair of the Vexis`, chapter: 8 },
  { altName: `Hidden Power`, chapter: 9 },
  { altName: `Aboard the Steadfast`, chapter: 10 },
  { altName: `Rey's Setbacks`, chapter: 11 },
  { altName: `The Droidsmith`, chapter: 12 },
  { altName: `Rescuing Chewbacca`, chapter: 13 },
  { altName: `Rey's Lineage`, chapter: 14 },
  { altName: `Bonded Duel`, chapter: 15 },
  { altName: `Back to Endor`, chapter: 16 },
  { altName: `The Death Star Ruins`, chapter: 17 },
  { altName: `Ben Solo`, chapter: 18 },
  { altName: `Leia's Funeral`, chapter: 19 },
  { altName: `A Show of Force`, chapter: 20 },
  { altName: `Passing the Torch`, chapter: 21 },
  { altName: `One Last Lesson`, chapter: 22 },
  { altName: `Preparing for War`, chapter: 23 },

  // { altName: `Leia's Funeral`, chapter: 24 },
  // { altName: `A Show of Force`, chapter: 25 },
  // { altName: `Passing the Torch`, chapter: 26 },
  // { altName: `One Last Lesson`, chapter: 27 },
  // { altName: `Preparing for War`, chapter: 28 }
];

export const characters: Character[] =[
  {
    name: 'Rey',
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e5/Anakin-and-OOMs.png',
    color: 'rgb(29,46,188)',
    wikiLink: 'https://starwars.fandom.com/wiki/Anakin_Skywalker'
  },
  {
    name: 'Finn',
    image: 'https://static.wikia.nocookie.net/starwars/images/9/9d/PregnancyRevealed.png',
    color: 'rgb(125,75,80)',
    wikiLink: 'https://starwars.fandom.com/wiki/Padmé_Amidala'
  },
  {
    name: 'Poe',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'Kylo',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'BB-8',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  }
];

enum CharacterIndex {
  'Rey' = 0,
  'Finn' = 1,
  'Poe' = 2,
  'Kylo' = 3,
  'BB8' = 4
}

export const installments: Installment[] = [
  {
    title: 'Episode VII: The Force Awakens',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png',
    chapters: theForceAwakensChapterList
  },
  {
    title: 'Episode VIII: The Last Jedi',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg',
    chapters: theLastJediChapterList
  },
  {
    title: 'Episode IX: The Rise of Skywalker',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png',
    chapters: theRiseOfSkywalkerChapterList
  },
];

export const seriesData: Series = {
  title: 'The First Order',
  stub: 'thefirstorder',
  image: 'https://static.wikia.nocookie.net/starwars/images/e/e4/Rise_of_Skywalker_promo.jpg',
  timeframe: '0 BBY - 4 ABY',
  description: `The Clone Wars was a galaxy-spanning conflict between the Galactic Republic and the Confederacy of Independent Systems, which had seceded from the Republic. Unbeknownst to many, these wars were planned decades prior in a Sith plot to destroy the Jedi order.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_CLONE_WARS_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    // {
    //   title: 'Tatooine',
    //   coordinates: [858, 2834],
    //   type: 'planet',
    //   image: 'https://static.wikia.nocookie.net/starwars/images/9/91/Jawa_moisture_farm_ANH.jpg',
    //   appearances: {
    //     1: [
    //       5, 6, 7
    //     ].map(i => (theForceAwakensChapterList[i])),
    //   },
    //   description: `Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet orbited two scorching suns, resulting in the world lacking the necessary surface water to sustain large populations.`,
    //   wikiLink: 'https://starwars.fandom.com/wiki/Tatooine',
    //   confirmed: true
    // },
  ],
  paths: [
    // {
    //   character: characters[CharacterIndex.ObiWan],
    //   installment: installments[0],
    //   chapter: thePhantomMenaceChapterList[5],
    //   confirmed: true,
    //   coordinates: [
    //     [807, 2346],
    //     [858, 2834],
    //   ],
    // },
  ]
};
