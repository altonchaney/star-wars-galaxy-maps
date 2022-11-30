
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/galaxymap-full.png';

const mapData: Map = {
  image: map,
  dimensions: [3371, 3753 ],
  source: 'https://www.reddit.com/r/StarWarsEU/comments/p3qd7o/here_comes_my_canonlegends_map_v22_i_keep_adding/'
};

const aNewHopeChapterList: Chapter[] = [
  { altName: 'Boarding Party', chapter: 0 },
  { altName: 'The Droids Escape', chapter: 1 },
  { altName: 'The Lars Homestead', chapter: 2 },
  { altName: `Obi-Wan's Plea`, chapter: 3 },
  { altName: `The Millenium Falcon`, chapter: 4 },
  { altName: `Leia's Torture`, chapter: 5 },
  { altName: `Aboard the Death Star`, chapter: 6 },
  { altName: `'For Luck'`, chapter: 7 },
  { altName: `Obi-Wan's Sacrifice`, chapter: 8 },
  { altName: `The Rebels Rally`, chapter: 9 },
  { altName: `Trench Run`, chapter: 10 },
  { altName: `'Use the Force'`, chapter: 11 },
  { altName: `Victory Ceremony`, chapter: 12 }
];

const empireStrikesBackChapterList: Chapter[] = [
  { altName: `Luke's Encounter`, chapter: 0 },
  { altName: `Han's Rescue`, chapter: 1 },
  { altName: `The Battle of Hoth`, chapter: 2 },
  { altName: `Departures`, chapter: 3 },
  { altName: `The Asteroid Field`, chapter: 4 },
  { altName: `Dagobah`, chapter: 5 },
  { altName: `'This Is No Cave'`, chapter: 6 },
  { altName: `The Cavern`, chapter: 7 },
  { altName: `Hidden in Refuse`, chapter: 8 },
  { altName: `Cloud City`, chapter: 9 },
  { altName: `Yoda's Warning`, chapter: 10 },
  { altName: `Carbonite Chamber`, chapter: 11 },
  { altName: `'It's a Trap!'`, chapter: 12 },
  { altName: `Luke vs. Vader`, chapter: 13 },
  { altName: `The Rebels Regroup`, chapter: 14 }
];

const returnOfTheJediChapterList: Chapter[] = [
  { altName: `Vader's Arrival`, chapter: 0 },
  { altName: `R2's Message`, chapter: 1 },
  { altName: `Leia's Disguise`, chapter: 2 },
  { altName: `The Rancor Pit`, chapter: 3 },
  { altName: `Jabba's Sail Barge`, chapter: 4 },
  { altName: `Final Preparations`, chapter: 5 },
  { altName: `Yoda's Final Message`, chapter: 6 },
  { altName: `The Alliance Prepares`, chapter: 7 },
  { altName: `Approaching Endor`, chapter: 8 },
  { altName: `Ewok Encounter`, chapter: 9 },
  { altName: `Luke Departs`, chapter: 10 },
  { altName: `The Battle Begins`, chapter: 11 },
  { altName: `Fully Operational`, chapter: 12 },
  { altName: `Turning Tides`, chapter: 13 },
  { altName: `The Final Duel`, chapter: 14 },
  { altName: `Shield's Down`, chapter: 15 },
  { altName: `The Falcon Strikes`, chapter: 16 },
  { altName: `The Empire Falls`, chapter: 17 },
  { altName: `Victory Celebrations`, chapter: 18 }
];

export const characters: Character[] =[
  {
    name: 'Luke',
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e5/Anakin-and-OOMs.png',
    color: 'rgb(29,46,188)',
    wikiLink: 'https://starwars.fandom.com/wiki/Anakin_Skywalker'
  },
  {
    name: 'Leia',
    image: 'https://static.wikia.nocookie.net/starwars/images/9/9d/PregnancyRevealed.png',
    color: 'rgb(125,75,80)',
    wikiLink: 'https://starwars.fandom.com/wiki/Padmé_Amidala'
  },
  {
    name: 'Han',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'C3P0',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'R2-D2',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'Vader',
    image: 'https://static.wikia.nocookie.net/starwars/images/4/45/AhsokaFlames-OFNF.png',
    color: 'rgb(200,111,85)',
    wikiLink: 'https://starwars.fandom.com/wiki/Anakin_Skywalker'
  },
];

enum CharacterIndex {
  'Luke' = 0,
  'Leia' = 1,
  'Han' = 2,
  'C3P0' = 3,
  'R2D2' = 4,
  'Vader' = 5
}

enum InstallmentIndex {
  'aNewHope' = 0,
  'empireStrikesBack' = 1,
  'returnOfTheJedi' = 2,
}

export const installments: Installment[] = [
  {
    title: 'Episode IV: A New Hope',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png',
    chapters: aNewHopeChapterList
  },
  {
    title: 'Episode V: Empire Strikes Back',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg',
    chapters: empireStrikesBackChapterList
  },
  {
    title: 'Episode VI: Return of the Jedi',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png',
    chapters: returnOfTheJediChapterList
  },
];

export const seriesData: Series = {
  title: 'The Rebellion',
  stub: 'therebellion',
  image: 'https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg',
  timeframe: '0 BBY - 4 ABY',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_CLONE_WARS_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Tatooine',
      coordinates: [858, 2834],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/91/Jawa_moisture_farm_ANH.jpg',
      appearances: {
        [InstallmentIndex.aNewHope + 1]: [
          5, 6, 7
        ].map(i => (aNewHopeChapterList[i])),
      },
      description: `Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet orbited two scorching suns, resulting in the world lacking the necessary surface water to sustain large populations.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Tatooine',
      confirmed: true
    },
    {
      title: 'Alderaan',
      coordinates: [1950, 2015],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a0/Alderaan_mountains.png',
      appearances: {
        [InstallmentIndex.aNewHope + 1]: [
          5, 6, 7, 8
        ].map(i => (aNewHopeChapterList[i])),
      },
      description: `Alderaan, located in the Core Worlds, was a terrestrial planet covered with mountains. During the waning decades of the Galactic Republic, it was ruled by Queen Breha Organa and represented in the Galactic Senate by her husband, Senator Bail Prestor Organa. Alderaan was regarded for its natural beauty, its tranquility, and the sophistication of its arts and culture.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Alderaan',
      confirmed: true
    },
    // Yavin
    // Hoth
    // Hoth Asteroid Field
    // Dagobah
    // Bespin
    // Rebel Redevouz
    // Endor
    // Naboo
    // Coruscant
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
