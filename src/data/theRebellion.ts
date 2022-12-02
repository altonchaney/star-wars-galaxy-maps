
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
    image: 'https://static.wikia.nocookie.net/starwars/images/c/c1/Luke_on_Endor.jpg',
    color: 'rgb(50,240,90)',
    wikiLink: 'https://starwars.fandom.com/wiki/Luke_Skywalker'
  },
  {
    name: 'Leia',
    image: 'https://static.wikia.nocookie.net/starwars/images/8/83/Sw4-Leia2.png',
    color: 'rgb(70,30,60)',
    wikiLink: 'https://starwars.fandom.com/wiki/Leia_Skywalker_Organa_Solo'
  },
  {
    name: 'Han',
    image: 'https://static.wikia.nocookie.net/starwars/images/0/01/Hansoloprofile.jpg',
    color: 'rgb(115,60,40)',
    wikiLink: 'https://starwars.fandom.com/wiki/Han_Solo'
  },
  {
    name: 'C3P0',
    image: 'https://static.wikia.nocookie.net/starwars/images/3/35/C-3PO-Crait.png',
    color: 'rgb(240,180,90)',
    wikiLink: 'https://starwars.fandom.com/wiki/C-3PO'
  },
  {
    name: 'R2-D2',
    image: 'https://static.wikia.nocookie.net/starwars/images/c/cf/Artoo_plugged_in_ANH.png',
    color: 'rgb(0,70,180)',
    wikiLink: 'https://starwars.fandom.com/wiki/R2-D2'
  },
  {
    name: 'Vader',
    image: 'https://static.wikia.nocookie.net/starwars/images/6/6e/Vader_Sidious.png',
    color: 'rgb(220,40,50)',
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
    image: 'https://static.wikia.nocookie.net/starwars/images/0/06/Star_Wars_Style_A_poster_1977.jpg',
    chapters: aNewHopeChapterList
  },
  {
    title: 'Episode V: Empire Strikes Back',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e4/Empire_strikes_back_old.jpg',
    chapters: empireStrikesBackChapterList
  },
  {
    title: 'Episode VI: Return of the Jedi',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b2/ReturnOfTheJediPoster1983.jpg',
    chapters: returnOfTheJediChapterList
  },
];

export const seriesData: Series = {
  title: 'The Rebellion',
  stub: 'theRebellion',
  image: 'https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg',
  timeframe: '0 BBY - 4 ABY',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_REBELLION_DATA: DataBundle = {
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
          0, 1, 2, 3, 4
        ].map(i => (aNewHopeChapterList[i])),
        [InstallmentIndex.returnOfTheJedi + 1]: [
          1, 2, 3, 4, 18
        ].map(i => (returnOfTheJediChapterList[i])),
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
    {
      title: 'Yavin 4',
      coordinates: [2612, 2547],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/b/ba/Yavin_landing_pad.png',
      appearances: {
        [InstallmentIndex.aNewHope + 1]: [
          9, 10, 11, 12
        ].map(i => (aNewHopeChapterList[i])),
      },
      description: `Yavin 4, also known as Yavin, was the jungle-covered fourth moon in orbit around the red gas giant Yavin Prime. Prior to and during the Galactic Civil War, it hosted the headquarters of the Alliance to Restore the Republic, a group of resistance fighters that opposed the dominant Galactic Empire`,
      wikiLink: 'https://starwars.fandom.com/wiki/Yavin_4',
      confirmed: true
    },
    {
      title: 'Hoth',
      coordinates: [555, 1646],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/4/45/BiomesHoth.png',
      appearances: {
        [InstallmentIndex.empireStrikesBack + 1]: [
          0, 1, 2, 3
        ].map(i => (empireStrikesBackChapterList[i])),
      },
      description: `Hoth was a remote, icy planet that was the sixth planet in the star system of the same name, located in the Anoat sector of the galaxy's Outer Rim Territories. It was the homeworld to the primitive wampa species.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Hoth',
      confirmed: true
    },
    {
      title: 'Hoth Asteroid Belt',
      coordinates: [555, 1651],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/1/1b/Hoth_Asteroid_Belt_TESB.png',
      appearances: {
        [InstallmentIndex.empireStrikesBack + 1]: [
          4, 6, 8
        ].map(i => (empireStrikesBackChapterList[i])),
      },
      description: `The Hoth asteroid belt, also known as the Anoat Asteroid Belt, was an asteroid field overlapping the boundaries of the Hoth and Anoat systems near the planet Hoth.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Hoth_asteroid_belt',
      confirmed: true
    },
    {
      title: 'Dagobah',
      coordinates: [410, 2066],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/1/17/Dragonsnake_Bog.jpg',
      appearances: {
        [InstallmentIndex.empireStrikesBack + 1]: [
          5, 7, 10
        ].map(i => (empireStrikesBackChapterList[i])),
        [InstallmentIndex.returnOfTheJedi + 1]: [
          6
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Dagobah was a remote, unexplored planet in the Dagobah system, and one of the purest places in the galaxy within the Force. A remote world of swamps and forests, it served as a refuge for Jedi Grand Master Yoda during his exile after the destruction of the Jedi Order.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Dagobah',
      confirmed: true
    },
    {
      title: 'Bespin',
      coordinates: [576, 1639],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/f/f1/Cloud_City.png',
      appearances: {
        [InstallmentIndex.empireStrikesBack + 1]: [
          9, 11, 12, 13
        ].map(i => (empireStrikesBackChapterList[i])),
        [InstallmentIndex.returnOfTheJedi + 1]: [
          18
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Bespin was a gas giant in the star system of the same name. Forming a part of the Anoat sector, its riches manifested in the form of rare tibanna gas. Attracting mining interests and remaining unaffiliated in galactic affairs, Ugnaughts were employed to extract tibanna from repulsorlifted facilities whilst Bespin's mostly human population resided in the open upper levels, exposed to a thin layer of breathable atmosphere in an area known as a "Life Zone."`,
      wikiLink: 'https://starwars.fandom.com/wiki/Bespin',
      confirmed: true
    },
    {
      title: 'Sullust',
      coordinates: [684, 2054],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/b/b9/Sullust_hovering_TIEs.jpg',
      appearances: {
        [InstallmentIndex.returnOfTheJedi + 1]: [
          7
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Sullust was a barren, obsidian world of lava streams and turquoise lakes. Native fauna such as ash angels foraged during the day and returned to nest at night, while rockrenders prowled the planet's underground. Because the planet's atmosphere was highly toxic, native Sullustans lived in technologically advanced subterranean cities that were highly regarded for their beauty.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Sullust',
      confirmed: true
    },
    {
      title: 'Endor',
      coordinates: [848, 1236.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/9c/Endor_matte.jpg',
      appearances: {
        [InstallmentIndex.returnOfTheJedi + 1]: [
          0, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Endor, designated IX3244-A, also known as the Forest Moon of Endor or the Sanctuary Moon, was a small forested moon that was the ninth moon that orbited the Outer Rim planet of the same name. It was the homeworld of the sentient Dulok, Ewok, and Yuzzum species, as well as the Wistie and semi-sentient Gorax races.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Endor',
      confirmed: true
    },
    {
      title: 'Naboo',
      coordinates: [807, 2346],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a1/Naboo2.jpg',
      appearances: {
        [InstallmentIndex.returnOfTheJedi + 1]: [
          18
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Naboo was a bountiful planet in the Chommell sector of the Mid Rim, in the Trailing Sectors and close to the border of the Outer Rim Territories. It was home to the indigenous Gungan species and to a population of humans known as the Naboo.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Naboo',
      confirmed: true
    },
    {
      title: 'Coruscant',
      coordinates: [1964, 1798],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/6/66/Coruscant_landscape_RotS.png',
      appearances: {
        [InstallmentIndex.returnOfTheJedi + 1]: [
          18
        ].map(i => (returnOfTheJediChapterList[i])),
      },
      description: `Coruscant, also known as Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Coruscant',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[5],
      confirmed: false,
      coordinates: [
        [858, 2834],
        [1950, 2015]
      ],
    },
    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1950, 2015]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1950, 2015]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1950, 2015]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1950, 2015]
      ],
    },
    
    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[9],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },
    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[9],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[9],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[9],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[9],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },

    {
      character: characters[CharacterIndex.Vader],
      installment: installments[InstallmentIndex.aNewHope],
      chapter: aNewHopeChapterList[10],
      confirmed: true,
      coordinates: [
        [1950, 2015],
        [2612, 2547]
      ],
    },

    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[5],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [410, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[5],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [410, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[12],
      confirmed: true,
      coordinates: [
        [410, 2066],
        [576, 1639]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[12],
      confirmed: true,
      coordinates: [
        [410, 2066],
        [576, 1639]
      ],
    },

    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[14],
      confirmed: false,
      coordinates: [
        [576, 1639],
        [168.5, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[14],
      confirmed: false,
      coordinates: [
        [576, 1639],
        [168.5, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[14],
      confirmed: false,
      coordinates: [
        [576, 1639],
        [168.5, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[14],
      confirmed: false,
      coordinates: [
        [576, 1639],
        [168.5, 2066]
      ],
    },

    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[4],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [555, 1651]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[4],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [555, 1651]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[4],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [555, 1651]
      ],
    },

    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[9],
      confirmed: true,
      coordinates: [
        [555, 1651],
        [576, 1639]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[9],
      confirmed: true,
      coordinates: [
        [555, 1651],
        [576, 1639]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[9],
      confirmed: true,
      coordinates: [
        [555, 1651],
        [576, 1639]
      ],
    },

    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[13],
      confirmed: false,
      coordinates: [
        [576, 1639],
        [858, 2834]
      ],
    },

    {
      character: characters[CharacterIndex.Vader],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[4],
      confirmed: true,
      coordinates: [
        [555, 1646],
        [555, 1651]
      ],
    },
    {
      character: characters[CharacterIndex.Vader],
      installment: installments[InstallmentIndex.empireStrikesBack],
      chapter: empireStrikesBackChapterList[9],
      confirmed: false,
      coordinates: [
        [555, 1651],
        [576, 1639]
      ],
    },

    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [410, 2066]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[6],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [410, 2066]
      ],
    },

    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[7],
      confirmed: true,
      coordinates: [
        [410, 2066],
        [684, 2054]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[7],
      confirmed: true,
      coordinates: [
        [410, 2066],
        [684, 2054]
      ],
    },

    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[7],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [684, 2054]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[7],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [684, 2054]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[7],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [684, 2054]
      ],
    },

    {
      character: characters[CharacterIndex.Luke],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[8],
      confirmed: true,
      coordinates: [
        [684, 2054],
        [848, 1236.5]
      ],
    },
    {
      character: characters[CharacterIndex.Leia],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[8],
      confirmed: true,
      coordinates: [
        [684, 2054],
        [848, 1236.5]
      ],
    },
    {
      character: characters[CharacterIndex.Han],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[8],
      confirmed: true,
      coordinates: [
        [684, 2054],
        [848, 1236.5]
      ],
    },
    {
      character: characters[CharacterIndex.C3P0],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[8],
      confirmed: true,
      coordinates: [
        [684, 2054],
        [848, 1236.5]
      ],
    },
    {
      character: characters[CharacterIndex.R2D2],
      installment: installments[InstallmentIndex.returnOfTheJedi],
      chapter: returnOfTheJediChapterList[8],
      confirmed: true,
      coordinates: [
        [684, 2054],
        [848, 1236.5]
      ],
    },
  ]
};
