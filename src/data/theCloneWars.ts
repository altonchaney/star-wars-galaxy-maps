
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/galaxymap-full.png';

const mapData: Map = {
  image: map,
  dimensions: [3371, 3753 ],
  source: 'https://www.reddit.com/r/StarWarsEU/comments/p3qd7o/here_comes_my_canonlegends_map_v22_i_keep_adding/'
};

const thePhantomMenaceChapterList: Chapter[] = [
  { altName: 'Short Negotiations', chapter: 0 },
  { altName: 'Queen Amidala', chapter: 1 },
  { altName: 'Otoh Gunga', chapter: 2 },
  { altName: 'The Planet Core', chapter: 3 },
  { altName: 'Running the Blockade', chapter: 4 },
  { altName: 'Tatooine Detour', chapter: 5 },
  { altName: 'Podracing', chapter: 6 },
  { altName: 'Darth Maul Attacks', chapter: 7 },
  { altName: 'The Jedi Council', chapter: 8 },
  { altName: `The Queen's Gambit`, chapter: 9 },
  { altName: `A Plea to the Gungans`, chapter: 10 },
  { altName: `Duel of the Fates`, chapter: 11 },
  { altName: `Farewell to a Jedi`, chapter: 12 }
];

const attackOfTheClonesChapterList: Chapter[] = [
  { altName: 'Return to Coruscant', chapter: 0 },
  { altName: 'Speeder Chase', chapter: 1 },
  { altName: 'New Assignments', chapter: 2 },
  { altName: 'Traveling Incognito', chapter: 3 },
  { altName: 'Jedi Archives', chapter: 4 },
  { altName: 'Return to Naboo', chapter: 5 },
  { altName: 'Kamino Arrival', chapter: 6 },
  { altName: 'Forbidden Love', chapter: 7 },
  { altName: 'Obi-Wan vs. Jango', chapter: 8 },
  { altName: `Back to Tatooine`, chapter: 9 },
  { altName: `Asteroid Chase`, chapter: 10 },
  { altName: `Tusken Camp`, chapter: 11 },
  { altName: `Enemies Revealed`, chapter: 12 },
  { altName: `Droid Factory`, chapter: 13 },
  { altName: `Yoda's Cavalry`, chapter: 14 },
  { altName: `Duel with Dooku`, chapter: 15 },
  { altName: `Lord Tyranus`, chapter: 16 },
  { altName: `Begin, The Clone War Has`, chapter: 17 },
  { altName: `Secret Union`, chapter: 18 },
];

const revengeOfTheSithChapterList: Chapter[] = [
  { altName: 'Battle Over Coruscant', chapter: 0 },
  { altName: 'Rescuing the Chancellor', chapter: 1 },
  { altName: 'Grievous on Utapau', chapter: 2 },
  { altName: 'On the Jedi Council', chapter: 3 },
  { altName: 'Tragedy of Darth Plagueis', chapter: 4 },
  { altName: 'Kashyyyk', chapter: 5 },
  { altName: 'Arrival on Utapau', chapter: 6 },
  { altName: `Jedi War Council`, chapter: 7 },
  { altName: 'Utapau Chase', chapter: 8 },
  { altName: `Rise Lord Vader`, chapter: 9 },
  { altName: `Order 66`, chapter: 10 },
  { altName: `The Heroes Regroup`, chapter: 11 },
  { altName: `Birth of the Empire`, chapter: 12 },
  { altName: `The Terrible Truth`, chapter: 13 },
  { altName: `Yoda Visits the Emperor`, chapter: 14 },
  { altName: `Battle of the Heroes`, chapter: 15 },
  { altName: `Secret Delivery`, chapter: 16 },
  { altName: `Darth Vader Awakes`, chapter: 17 },
  { altName: `The Future of the Twins`, chapter: 18 },
];

export const characters: Character[] =[
  {
    name: 'Anakin',
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e5/Anakin-and-OOMs.png',
    color: 'rgb(29,46,188)',
    wikiLink: 'https://starwars.fandom.com/wiki/Anakin_Skywalker'
  },
  {
    name: 'Obi-Wan',
    image: 'https://static.wikia.nocookie.net/starwars/images/3/37/Insider204-Kenobi.jpg',
    color: 'rgb(88,106,148)',
    wikiLink: 'https://starwars.fandom.com/wiki/Obi-Wan_Kenobi'
  },
  {
    name: 'Padme',
    image: 'https://static.wikia.nocookie.net/starwars/images/9/9d/PregnancyRevealed.png',
    color: 'rgb(125,75,80)',
    wikiLink: 'https://starwars.fandom.com/wiki/Padmé_Amidala'
  },
  {
    name: 'Yoda',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/b4/YodaDuel.jpg',
    color: 'rgb(114,176,83)',
    wikiLink: 'https://starwars.fandom.com/wiki/Yoda'
  },
  {
    name: 'Ahsoka',
    image: 'https://static.wikia.nocookie.net/starwars/images/4/45/AhsokaFlames-OFNF.png',
    color: 'rgb(200,111,85)',
    wikiLink: 'https://starwars.fandom.com/wiki/Ahsoka_Tano'
  },
];

enum CharacterIndex {
  'Anakin' = 0,
  'ObiWan' = 1,
  'Padme' = 2,
  'Yoda' = 3,
  'Ahsoka' = 4
}

export const installments: Installment[] = [
  {
    title: 'Episode I: The Phantom Menace',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/7/75/EPI_TPM_poster.png',
    chapters: thePhantomMenaceChapterList
  },
  {
    title: 'Episode II: Attack of the Clones',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg',
    chapters: attackOfTheClonesChapterList
  },
  {
    title: 'Episode III: Revenge of the Sith',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png',
    chapters: revengeOfTheSithChapterList
  },
];

export const seriesData: Series = {
  title: 'The Clone Wars',
  stub: 'theclonewars',
  image: 'https://static.wikia.nocookie.net/starwars/images/e/e7/EPIII_RotS_poster.png',
  timeframe: '32 BBY - 19 BBY',
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
    {
      title: 'Naboo',
      coordinates: [807, 2346],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a1/Naboo2.jpg',
      appearances: {
        1: [
          0, 1, 2, 3, 4, 10, 11, 12
        ].map(i => (thePhantomMenaceChapterList[i])),
        2: [
          5, 7, 18
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Naboo was a bountiful planet in the Chommell sector of the Mid Rim, in the Trailing Sectors and close to the border of the Outer Rim Territories. It was home to the indigenous Gungan species and to a population of humans known as the Naboo.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Naboo',
      confirmed: true
    },
    {
      title: 'Tatooine',
      coordinates: [858, 2834],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/91/Jawa_moisture_farm_ANH.jpg',
      appearances: {
        1: [
          5, 6, 7
        ].map(i => (thePhantomMenaceChapterList[i])),
        2: [
          9, 11
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet orbited two scorching suns, resulting in the world lacking the necessary surface water to sustain large populations.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Tatooine',
      confirmed: true
    },
    {
      title: 'Coruscant',
      coordinates: [1964, 1798],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/6/66/Coruscant_landscape_RotS.png',
      appearances: {
        1: [
          8, 9
        ].map(i => (thePhantomMenaceChapterList[i])),
        2: [
          0, 1, 2, 4, 16, 17
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Coruscant, also known as Imperial Center during the rule of the Galactic Empire, was an ecumenopolis—a city-covered planet, collectively known as Imperial City— in the Coruscant system of the Core Worlds. Though debated by historians, it was generally believed that Coruscant was the original homeworld of humanity. `,
      wikiLink: 'https://starwars.fandom.com/wiki/Coruscant',
      confirmed: true
    },
    {
      title: 'Kamino',
      coordinates: [1014, 3056],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/2c/TipocaCity-CC.png',
      appearances: {
        2: [
          6, 8
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Kamino was an aquatic extragalactic planet located in a remote star system in the Abrion sector beyond the Outer Rim just outside the boundaries of the galaxy and straggled south of the Rishi Maze irregular dwarf satellite galaxy. It was inhabited by the Kaminoans — a race of tall, elegant beings with long necks who were regarded as a mysterious species that tended to keep to themselves. They were also known for their cloning technology, which was used to create a clone army for the Galactic Republic.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Kamino',
      confirmed: true
    },
    {
      title: 'Geonosis',
      coordinates: [842.5, 2821.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/5/59/Geonosis.jpg',
      appearances: {
        2: [
          10, 12, 13, 14, 15
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Geonosis, referred to as Geonosia by some natives, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems' first capital and hosted its major battle droid foundries. It was the site of the First Battle of Geonosis, the opening conflict of the Clone Wars, as well as the subsequent invasion by the Galactic Republic. During and after the war, the Death Star was constructed above the planet.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Geonosis',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[5],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834],
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[5],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834],
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[0],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
  ]
};
