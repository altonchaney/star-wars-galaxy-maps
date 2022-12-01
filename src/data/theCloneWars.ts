
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

const cloneWarsFilmChapterList: Chapter[] = [
  { altName: 'Battle on Christophsis', chapter: 0 },
  { altName: `Anakin's New Apprentice`, chapter: 1 },
  { altName: `The Rescue Plan`, chapter: 2 },
  { altName: `Obi-Wan's Assurances`, chapter: 3 },
  { altName: `An Elaborate Trap`, chapter: 4 },
  { altName: 'Obi-Wan Arrives', chapter: 5 },
  { altName: `Padme's Revelations`, chapter: 6 },
  { altName: `Across Tatooine`, chapter: 7 },
  { altName: `Crisis Averted`, chapter: 8 },
];

const cloneWarsS1EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
  { altName: ``, chapter: 14 },
  { altName: ``, chapter: 15 },
  { altName: ``, chapter: 16 },
  { altName: ``, chapter: 17 },
  { altName: ``, chapter: 18 },
  { altName: ``, chapter: 19 },
  { altName: ``, chapter: 20 },
  { altName: ``, chapter: 21 },
  { altName: ``, chapter: 22 },
];

const cloneWarsS2EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
  { altName: ``, chapter: 14 },
  { altName: ``, chapter: 15 },
  { altName: ``, chapter: 16 },
  { altName: ``, chapter: 17 },
  { altName: ``, chapter: 18 },
  { altName: ``, chapter: 19 },
  { altName: ``, chapter: 20 },
  { altName: ``, chapter: 21 },
  { altName: ``, chapter: 22 },
];

const cloneWarsS3EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
  { altName: ``, chapter: 14 },
  { altName: ``, chapter: 15 },
  { altName: ``, chapter: 16 },
  { altName: ``, chapter: 17 },
  { altName: ``, chapter: 18 },
  { altName: ``, chapter: 19 },
  { altName: ``, chapter: 20 },
  { altName: ``, chapter: 21 },
  { altName: ``, chapter: 22 },
];

const cloneWarsS4EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
  { altName: ``, chapter: 14 },
  { altName: ``, chapter: 15 },
  { altName: ``, chapter: 16 },
  { altName: ``, chapter: 17 },
  { altName: ``, chapter: 18 },
  { altName: ``, chapter: 19 },
  { altName: ``, chapter: 20 },
  { altName: ``, chapter: 21 },
  { altName: ``, chapter: 22 },
];

const cloneWarsS5EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
  { altName: ``, chapter: 14 },
  { altName: ``, chapter: 15 },
  { altName: ``, chapter: 16 },
  { altName: ``, chapter: 17 },
  { altName: ``, chapter: 18 },
  { altName: ``, chapter: 19 },
  { altName: ``, chapter: 20 },
];

const cloneWarsS6EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 },
  { altName: ``, chapter: 13 },
];

const cloneWarsS7EpisodeList: Chapter[] = [
  { altName: ``, chapter: 1 },
  { altName: ``, chapter: 2 },
  { altName: ``, chapter: 3 },
  { altName: ``, chapter: 4 },
  { altName: ``, chapter: 5 },
  { altName: ``, chapter: 6 },
  { altName: ``, chapter: 7 },
  { altName: ``, chapter: 8 },
  { altName: ``, chapter: 9 },
  { altName: ``, chapter: 10 },
  { altName: ``, chapter: 11 },
  { altName: ``, chapter: 12 }
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

enum InstallmentIndex {
  'thePhantomMenace' = 0,
  'attackOfTheClones' = 1,
  'cloneWarsFilm' = 2,
  'cloneWarsS1' = 3,
  'cloneWarsS2' = 4,
  'cloneWarsS3' = 5,
  'cloneWarsS4' = 6,
  'cloneWarsS5' = 7,
  'cloneWarsS6' = 8,
  'cloneWarsS7' = 9,
  'revengeOfTheSith' = 10,
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
    title: 'The Clone Wars (Film)',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/f/ff/The_Clone_Wars_film_poster.jpg',
    chapters: cloneWarsFilmChapterList
  },
  {
    title: 'The Clone Wars (Season 1)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/a/ad/Tatooine_pickup_TCW.png',
    chapters: cloneWarsS1EpisodeList
  },
  {
    title: 'The Clone Wars (Season 2)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/8/82/Epguide222.jpg',
    chapters: cloneWarsS2EpisodeList
  },
  {
    title: 'The Clone Wars (Season 3)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/2/2a/Epguide316.jpg',
    chapters: cloneWarsS3EpisodeList
  },
  {
    title: 'The Clone Wars (Season 4)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/7/72/Epguide407.jpg',
    chapters: cloneWarsS4EpisodeList
  },
  {
    title: 'The Clone Wars (Season 5)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/2/20/Epguide501.jpg',
    chapters: cloneWarsS5EpisodeList
  },
  {
    title: 'The Clone Wars (Season 6)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/3/34/EpGuide601.png',
    chapters: cloneWarsS6EpisodeList
  },
  {
    title: 'The Clone Wars (Season 7)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/de/Star_Wars_The_Clone_Wars_Season_7_poster_2.jpg',
    chapters: cloneWarsS7EpisodeList
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
  image: 'https://static.wikia.nocookie.net/starwars/images/1/13/SW_prequel_poster.jpg',
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
        [InstallmentIndex.thePhantomMenace + 1]: [
          0, 1, 2, 3, 4, 10, 11, 12
        ].map(i => (thePhantomMenaceChapterList[i])),
        [InstallmentIndex.attackOfTheClones + 1]: [
          5, 7, 18
        ].map(i => (attackOfTheClonesChapterList[i])),
        [InstallmentIndex.revengeOfTheSith + 1]: [
          18
        ].map(i => (revengeOfTheSithChapterList[i])),
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
        [InstallmentIndex.thePhantomMenace + 1]: [
          5, 6, 7
        ].map(i => (thePhantomMenaceChapterList[i])),
        [InstallmentIndex.attackOfTheClones + 1]: [
          9, 11
        ].map(i => (attackOfTheClonesChapterList[i])),
        [InstallmentIndex.revengeOfTheSith + 1]: [
          18
        ].map(i => (revengeOfTheSithChapterList[i])),
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
        [InstallmentIndex.thePhantomMenace + 1]: [
          8, 9
        ].map(i => (thePhantomMenaceChapterList[i])),
        [InstallmentIndex.attackOfTheClones + 1]: [
          0, 1, 2, 4, 16, 17
        ].map(i => (attackOfTheClonesChapterList[i])),
        [InstallmentIndex.revengeOfTheSith + 1]: [
          0, 1, 3, 4, 7, 9, 10, 11, 13, 14, 17
        ].map(i => (revengeOfTheSithChapterList[i])),
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
        [InstallmentIndex.attackOfTheClones + 1]: [
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
        [InstallmentIndex.attackOfTheClones + 1]: [
          10, 12, 13, 14, 15
        ].map(i => (attackOfTheClonesChapterList[i])),
      },
      description: `Geonosis, referred to as Geonosia by some natives, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems' first capital and hosted its major battle droid foundries. It was the site of the First Battle of Geonosis, the opening conflict of the Clone Wars, as well as the subsequent invasion by the Galactic Republic. During and after the war, the Death Star was constructed above the planet.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Geonosis',
      confirmed: true
    },
    {
      title: 'Utapau',
      coordinates: [353, 2134],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/26/Utapau_surface.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          2, 6, 8, 10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Utapau was a remote and rocky planet in the Outer Rim Territories' Utapau system that was covered with enormous sinkholes. Its native inhabitants were the Pau'ans and the Utai, though tribes of Amani also immigrated to the world.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Utapau',
      confirmed: true
    },
    {
      title: 'Mustafar',
      coordinates: [353, 1827],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/4/4b/Lava-fleas-walking.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          12, 15
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Mustafar was a small planet located in the Mustafar system, within the Atravis sector of the galaxy's Outer Rim Territories. Once a garden world nourished by the Bright Star artifact, its orbit was shifted when Lady Corvax unleashed the energies of the Bright Star in an attempt to return her husband to life. The resulting gravimetric duel between the gas giants Jestefad and Lefrani over Mustafar heated the planet's core, transforming the lush world into an imbalanced volcanic hellscape.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Mustafar',
      confirmed: true
    },
    {
      title: 'Alderaan',
      coordinates: [1950, 2015],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a0/Alderaan_mountains.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          18
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Alderaan, located in the Core Worlds, was a terrestrial planet covered with mountains. During the waning decades of the Galactic Republic, it was ruled by Queen Breha Organa and represented in the Galactic Senate by her husband, Senator Bail Prestor Organa. Alderaan was regarded for its natural beauty, its tranquility, and the sophistication of its arts and culture.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Alderaan',
      confirmed: true
    },
    {
      title: 'Cato Neimoidia',
      coordinates: [1745, 2150],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/98/CNCityBridges-SS.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Cato Neimoidia was a planet in the Cato Neimoidia system, within the Quellor sector of the galaxy's Colonies region. It was a wealthy colony world of the Neimoidians and the base of operations for the Trade Federation. Much of the world was covered in a persistent fog, while the bridge cities of Cato Neimoidia were suspended above the planet's acidic ocean surface on bridges anchored on massive giant rock arches, upon which thrived forests and grasslands.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Cato_Neimoidia',
      confirmed: true
    },
    {
      title: 'Kashyyyk',
      coordinates: [1981, 2573],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/e/e8/Can-cell_kashyyyk.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          5, 7, 10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Kashyyyk, also known as Planet Wookiee C to some humans in the Core Worlds, was a wroshyr tree-covered forest planet located in the southwestern quadrant of the galaxy and the homeworld of the Wookiee species.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Kashyyyk',
      confirmed: true
    },
    {
      title: 'Mygeeto',
      coordinates: [2765, 1713],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/7/7a/Mygeetobridgebattle.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Mygeeto was a frigid, crystalline planet located in the Albarrio sector's Mygeeto system of the Outer Rim Territories, and was the homeworld of the Lurmen species. The planet was initially discovered almost 7,000 years before the Battle of Yavin, and possession of the planet became heavily contested after its discovery.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Mygeeto',
      confirmed: true
    },
    {
      title: 'Polis Massa',
      coordinates: [218, 1750],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a6/Polis_massa.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          16
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Polis Massa was an asteroid field located in the Subterrel sector of the galaxy's Outer Rim Territories, far from any major hyperspace lanes. At some point, Polis Massa was a planet located within the system of the same name. The planet was home to a subterranean people called the Eellayin until it was destroyed by ancient superweapons.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Polis_Massa',
      confirmed: true
    },
    {
      title: 'Saleucami',
      coordinates: [2234, 2994],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a5/Saleiucami_landscape.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Saleucami, a name that translated into "oasis," was a planet located in the Saleucami system, within the Suolriep sector of the galaxy's Outer Rim Territories. During the Clone Wars, its inhabitants wished to stay out of the conflict, though war would eventually reach the backwater planet. Although Republic forces were able to drive the Separatists from Saleucami, it became the site of an invasion and one of the final battles of the war.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Saleucami',
      confirmed: true
    },
    {
      title: 'Felucia',
      coordinates: [2581, 2909],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/27/Felucia-wide.png',
      appearances: {
        [InstallmentIndex.revengeOfTheSith + 1]: [
          10
        ].map(i => (revengeOfTheSithChapterList[i])),
      },
      description: `Felucia, known as Galush prior to the formation of the Galactic Republic, was a colorful, humid jungle planet located in the Felucia system of the galaxy's Outer Rim Territories. The headquarters of the Commerce Guild, its primary agricultural export was the valuable crop nysillin, which was largely farmed by the native Felucian tribes. Its important strategic location along the Perlemian Trade Route made it a major battleground throughout the Clone Wars.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Felucia',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[0],
      confirmed: false,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[5],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[5],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[8],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.thePhantomMenace],
      chapter: thePhantomMenaceChapterList[10],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [807, 2346]
      ],
    },
    // attack of the clones
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[0],
      confirmed: false,
      coordinates: [
        [807, 2346],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[3],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [1385.5, 2065.5]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[3],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [1385.5, 2065.5]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[5],
      confirmed: true,
      coordinates: [
        [1385.5, 2065.5],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[5],
      confirmed: true,
      coordinates: [
        [1385.5, 2065.5],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[6],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [1014, 3056],
        // [842.5, 2821.5],
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[9],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[9],
      confirmed: true,
      coordinates: [
        [807, 2346],
        [858, 2834]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[10],
      confirmed: true,
      coordinates: [
        [1014, 3056],
        [842.5, 2821.5],
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[13],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [842.5, 2821.5]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[13],
      confirmed: true,
      coordinates: [
        [858, 2834],
        [842.5, 2821.5]
      ],
    },
    {
      character: characters[CharacterIndex.Yoda],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[14],
      confirmed: false,
      coordinates: [
        [1964, 1798],
        [1014, 3056],
        [842.5, 2821.5],
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[17],
      confirmed: true,
      coordinates: [
        [842.5, 2821.5],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.Yoda],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[17],
      confirmed: true,
      coordinates: [
        [842.5, 2821.5],
        [1964, 1798]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[18],
      confirmed: false,
      coordinates: [
        [842.5, 2821.5],
        [807, 2346]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.attackOfTheClones],
      chapter: attackOfTheClonesChapterList[18],
      confirmed: false,
      coordinates: [
        [842.5, 2821.5],
        [807, 2346]
      ],
    },
    // revenge of the sith
    {
      character: characters[CharacterIndex.Yoda],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[5],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [1981, 2573]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[6],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [353, 2134]
      ],
    },
    {
      character: characters[CharacterIndex.Yoda],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[11],
      confirmed: false,
      coordinates: [
        [1981, 2573],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[11],
      confirmed: false,
      coordinates: [
        [353, 2134],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[12],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [353, 1827]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[15],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [353, 1827]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[15],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [353, 1827]
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[16],
      confirmed: true,
      coordinates: [
        [353, 1827],
        [218, 1750]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[16],
      confirmed: true,
      coordinates: [
        [353, 1827],
        [218, 1750]
      ],
    },
    {
      character: characters[CharacterIndex.Yoda],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[16],
      confirmed: true,
      coordinates: [
        [1964, 1798],
        [218, 1750]
      ],
    },
    {
      character: characters[CharacterIndex.Anakin],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[17],
      confirmed: true,
      coordinates: [
        [353, 1827],
        [1964, 1798],
      ],
    },
    {
      character: characters[CharacterIndex.ObiWan],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[18],
      confirmed: true,
      coordinates: [
        [218, 1750],
        [858, 2834]
      ],
    },
    {
      character: characters[CharacterIndex.Padme],
      installment: installments[InstallmentIndex.revengeOfTheSith],
      chapter: revengeOfTheSithChapterList[18],
      confirmed: false,
      coordinates: [
        [218, 1750],
        [807, 2346]
      ],
    },
  ]
};
