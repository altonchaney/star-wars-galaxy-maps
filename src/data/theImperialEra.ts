
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/galaxymap-full.png';

const mapData: Map = {
  image: map,
  dimensions: [3371, 3753 ],
  source: 'https://www.reddit.com/r/StarWarsEU/comments/p3qd7o/here_comes_my_canonlegends_map_v22_i_keep_adding/'
};

// <> denotes an appearance, not destination
// * denotes unconfirmed path destination
const theBadBatchChapterList: Chapter[] = [
  { altName: 'Aftermath', chapter: 1 },
  // Kaller, Kamino, Onderon, Kamino
  { altName: 'Cut and Run', chapter: 2 },
  // Saleucami
  { altName: `Replacements`, chapter: 3 },
  // Ordo Moon, <Kamino>
  { altName: `Cornered`, chapter: 4 },
  // Pantora (Orto Plutonia)
  { altName: `Rampage`, chapter: 5 },
  // Ord Mantell
  { altName: `Decommissioned`, chapter: 6 },
  // Ord Mantell, Corellia
  { altName: `Battle Scars`, chapter: 7 },
  // Ord Mantell*, Bracca, 
  { altName: `Reunion`, chapter: 8 },
  // <Kamino>, Bracca, 
  { altName: `Bounty Lost`, chapter: 9 },
  // Bracca, <Kamino>, Bora Vio, 
  { altName: `Common Ground`, chapter: 10 },
  // Ord Mantell, Raxus Secundus, Ord Mantell
  { altName: `Devil's Deal`, chapter: 11 },
  // Ryloth, 
  { altName: `Rescue on Ryloth`, chapter: 12 },
  // Ryloth, Ord Mantell
  { altName: `Infested`, chapter: 13 },
  // Ord Mantell, 
  { altName: `War-Mantle`, chapter: 14 },
  // Daro, <Kamino>, 
  { altName: `Return to Kamino`, chapter: 15 },
  // Ord Mantell, Kamino
  { altName: `Kamino Lost`, chapter: 16 }
  // Kamino
];

export const characters: Character[] =[
  {
    name: 'Bad Batch',
    image: 'https://static.wikia.nocookie.net/starwars/images/0/0c/The-Bad-Batch-in-the-snow.png',
    color: 'rgb(110,55,75)',
    wikiLink: 'https://starwars.fandom.com/wiki/Clone_Force_99'
  },
];

enum CharacterIndex {
  'badBatch' = 0,
}

enum InstallmentIndex {
  'theBadBatch' = 0,
}

export const installments: Installment[] = [
  {
    title: 'The Bad Batch (Season 1)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/d4/BadBatchPoster.jpg',
    chapters: theBadBatchChapterList
  },
];

export const seriesData: Series = {
  title: 'The Imperial Era',
  stub: 'theImperialEra',
  image: 'https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg',
  timeframe: '19 BBY - 9 BBY',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_IMPERIAL_ERA_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Kamino',
      coordinates: [1014, 3056],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/2c/TipocaCity-CC.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          0, 2, 7, 8, 13, 14, 15
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Kamino was an aquatic extragalactic planet located in a remote star system in the Abrion sector beyond the Outer Rim just outside the boundaries of the galaxy and straggled south of the Rishi Maze irregular dwarf satellite galaxy. It was inhabited by the Kaminoans — a race of tall, elegant beings with long necks who were regarded as a mysterious species that tended to keep to themselves. They were also known for their cloning technology, which was used to create a clone army for the Galactic Republic.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Kamino',
      confirmed: true
    },
    {
      title: 'Saleucami',
      coordinates: [2234, 2994],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a5/Saleiucami_landscape.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          1
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Saleucami, a name that translated into "oasis," was a planet located in the Saleucami system, within the Suolriep sector of the galaxy's Outer Rim Territories. During the Clone Wars, its inhabitants wished to stay out of the conflict, though war would eventually reach the backwater planet. Although Republic forces were able to drive the Separatists from Saleucami, it became the site of an invasion and one of the final battles of the war.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Saleucami',
      confirmed: true
    },
    {
      title: 'Kaller',
      coordinates: [2674, 1772],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/3/36/CalebDumeEscapesOrder66-Aftermath.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          0
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Kaller was a terrestrial planet with a complex climate located in the Kaller system of the galaxy's Outer Rim Territories. It was the homeworld of the Kallerans.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Kaller',
      confirmed: true
    },
    {
      title: 'Onderon',
      coordinates: [1988, 2408],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/5/50/YolahnSquareSoftWar.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          0
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Onderon was a jungle world located within the Inner Rim. During the Clone Wars, the planetary government aligned itself with the Confederacy of Independent Systems; in the Separatist Senate, Onderon was represented by Senator Mina Bonteri and later by her son, Lux Bonteri.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Onderon',
      confirmed: true
    },
    {
      title: 'Ordo Moon',
      coordinates: [2122, 2972],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/5/50/YolahnSquareSoftWar.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          2
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `The Ordo Moon was a rocky moon that orbited a blue gas giant. It had a thin atmosphere and was home to the Ordo Moon Dragon, a creature that fed on raw energy.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Ordo_Moon',
      confirmed: false
    },
    {
      title: 'Pantora',
      coordinates: [478.5, 2548.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/6/60/Pantoran_city.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          3
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Pantora was the primary moon in orbit around the planet Orto Plutonia, in the Pantora system, located in the Sujimis sector of the Outer Rim Territories, in grid square P-19 on the Standard Galactic Grid. It was the homeworld of the Pantorans, who were led by the Pantoran Assembly and the Supreme Chairman of Pantora, a post held by Chi Cho, who was later replaced by Baron Notluwiski Papanoida.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Pantora',
      confirmed: true
    },
    {
      title: 'Ord Mantell',
      coordinates: [2380, 1803.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/aa/OrdMantellCity.jpg',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          4, 5, 6, 9, 11, 12, 14
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Ord Mantell was a planet of the galaxy's Mid Rim that served as the capital of the Bright Jewel system. It was the homeworld of the Mantellian Savrip species. Ord Mantell was colonized around 12,000 BBY by Corellian settlers during the expansion of the Galactic Republic, where it became an Ordnance/Regional Depot outpost. In the waning days of the Republic, Ord Mantell City housed a base of operations for the Black Sun crime syndicate. It later came under control of the Galactic Empire and became home to an Imperial deepdock.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Ord_Mantell',
      confirmed: true
    },
    {
      title: 'Corellia',
      coordinates: [1652, 2056],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/f/f8/Coronet_City.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          5
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Corellia was a planet located in the galaxy's Core Worlds known for its ace pilots and large starships. The planet's vast shipyards produced many vessels over hundreds of years, including starfighters and Star Destroyers for the Galactic Empire as well as other famous models such as the YT-1300 light freighter.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Corellia',
      confirmed: true
    },
    {
      title: 'Bracca',
      coordinates: [2101, 2546],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/3/3d/Bracca_terrain.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          6, 7, 8
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Bracca was an inhospitable junkyard planet located in the galaxy's Mid Rim. Located close to various hyperspace routes, Bracca's strategic importance made it the site of a campaign during the Clone Wars. During the reign of the Galactic Empire, the Scrapper Guild operated on the planet, breaking down starship wreckage and selling the components to the Empire.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Bracca',
      confirmed: true
    },
    {
      title: 'Bora Vio',
      coordinates: [990, 3062.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/5/51/Bora_Vio.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          8
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Bora Vio was a planet situated in the Lido system. The planet had a cloudy atmosphere, which hosted a Kaminoan facility that was abandoned by the time of the Galactic Empire.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Bora_Vio',
      confirmed: true
    },
    {
      title: 'Raxus Secundus',
      coordinates: [2630.5, 3053],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/25/RaxusLandscape-HOBS.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          9
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Raxus Secundus, also known simply as Raxus, was a lush world in the Outer Rim Territories' Tion Hegemony that served as the capital planet of the Confederacy of Independent Systems during the Clone Wars. Renowned for its beauty, Raxus had a temperate climate and was covered with oceans and landmasses.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Raxus_Secundus',
      confirmed: true
    },
    {
      title: 'Ryloth',
      coordinates: [719, 2894.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/3/37/Twi%27lek_freedom_fighters.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          10, 11
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Ryloth was a planet in the Ryloth system of the Outer Rim Territories, and the homeworld of the Twi'lek species. Its terrain varied, filled with jungles, mesas, valleys, and volcanoes, and had an atmosphere breathable for Twi'leks and humans alike. A forest covered its equator, filled with dangerous predators. Given the varied and dangerous terrain, Twi'leks lived in caves underground where it was safer.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Ryloth',
      confirmed: true
    },
    {
      title: 'Daro',
      coordinates: [2494, 2480],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/f/f7/DaroLandscape-WM.png',
      appearances: {
        [InstallmentIndex.theBadBatch + 1]: [
          13
        ].map(i => (theBadBatchChapterList[i])),
      },
      description: `Daro was a forested rocky planet situated in the Outer Rim Territories. Though data claimed that the planet contained no settlements or installations, the Galactic Empire maintained a secret military base within a mountain on Daro in the time shortly after the regime's formation, where troopers were recruited as part of Project War-Mantle.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Daro',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[0],
      confirmed: true,
      coordinates: [
        [2674, 1772],
        [1014, 3056],
        [1988, 2408],
        [1014, 3056],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[1],
      confirmed: true,
      coordinates: [
        [1014, 3056],
        [2234, 2994],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[2],
      confirmed: true,
      coordinates: [
        [2234, 2994],
        [2122, 2972],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[3],
      confirmed: true,
      coordinates: [
        [2122, 2972],
        [478.5, 2548.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[4],
      confirmed: true,
      coordinates: [
        [478.5, 2548.5],
        [2380, 1803.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[5],
      confirmed: true,
      coordinates: [
        [2380, 1803.5],
        [1652, 2056],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[6],
      confirmed: false,
      coordinates: [
        [1652, 2056],
        [2380, 1803.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[6],
      confirmed: true,
      coordinates: [
        [2380, 1803.5],
        [2101, 2546],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[8],
      confirmed: true,
      coordinates: [
        [2101, 2546],
        [990, 3062.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[9],
      confirmed: true,
      coordinates: [
        [990, 3062.5],
        [2380, 1803.5],
        [2630.5, 3053],
        [2380, 1803.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[10],
      confirmed: true,
      coordinates: [
        [2380, 1803.5],
        [719, 2894.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[11],
      confirmed: true,
      coordinates: [
        [719, 2894.5],
        [2380, 1803.5],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[13],
      confirmed: true,
      coordinates: [
        [2380, 1803.5],
        [2494, 2480],
      ],
    },
    {
      character: characters[CharacterIndex.badBatch],
      installment: installments[InstallmentIndex.theBadBatch],
      chapter: theBadBatchChapterList[14],
      confirmed: true,
      coordinates: [
        [2494, 2480],
        [2380, 1803.5],
        [1014, 3056],
      ],
    },
  ]
};
