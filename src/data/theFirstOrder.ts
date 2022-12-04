
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
  { altName: `Sith Machinations`, chapter: 24 },
  { altName: `The Force Dyad`, chapter: 25 },
  { altName: `Citizens' Fleet`, chapter: 26 },
  { altName: `Victory & Sacrifice`, chapter: 27 },
  { altName: `Triumph of the Resistance`, chapter: 28 },
  { altName: `Heir to the Skywalkers`, chapter: 29 }
];

export const characters: Character[] =[
  {
    name: 'Rey',
    image: 'https://static.wikia.nocookie.net/starwars/images/e/e5/Rey_and_Finn_learn_its_all_true.png',
    color: 'rgb(240,220,50)',
    wikiLink: 'https://starwars.fandom.com/wiki/Rey_Skywalker'
  },
  {
    name: 'Finn',
    image: 'https://static.wikia.nocookie.net/starwars/images/2/29/Finn_crait.jpg',
    color: 'rgb(25,50,150)',
    wikiLink: 'https://starwars.fandom.com/wiki/Finn'
  },
  {
    name: 'Poe',
    image: 'https://static.wikia.nocookie.net/starwars/images/1/12/Natural_Talent_SWDestiny.png',
    color: 'rgb(160,90,40)',
    wikiLink: 'https://starwars.fandom.com/wiki/Poe_Dameron'
  },
  {
    name: 'Kylo',
    image: 'https://static.wikia.nocookie.net/starwars/images/b/bc/KyloRenVFcover-TROS.png',
    color: 'rgb(220,40,50)',
    wikiLink: 'https://starwars.fandom.com/wiki/Ben_Solo'
  },
  {
    name: 'BB-8',
    image: 'https://static.wikia.nocookie.net/starwars/images/6/63/BB-8thumbsup.png',
    color: 'rgb(240,140,50)',
    wikiLink: 'https://starwars.fandom.com/wiki/BB-8'
  }
];

enum CharacterIndex {
  'Rey' = 0,
  'Finn' = 1,
  'Poe' = 2,
  'Kylo' = 3,
  'BB8' = 4
}

enum InstallmentIndex {
  'theForceAwakens' = 0,
  'theLastJedi' = 1,
  'theRiseOfSkywalker' = 2,
}

export const installments: Installment[] = [
  {
    title: 'Episode VII: The Force Awakens',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/f/fd/Star_Wars_Episode_VII_The_Force_Awakens.jpg',
    chapters: theForceAwakensChapterList
  },
  {
    title: 'Episode VIII: The Last Jedi',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/1/12/TheLastJediTheatricalPoster.jpg',
    chapters: theLastJediChapterList
  },
  {
    title: 'Episode IX: The Rise of Skywalker',
    type: MediaType.Book,
    image: 'https://static.wikia.nocookie.net/starwars/images/4/4c/TROSOneSheet.jpg',
    chapters: theRiseOfSkywalkerChapterList
  },
];

export const seriesData: Series = {
  title: 'The First Order',
  stub: 'thefirstorder',
  image: 'https://static.wikia.nocookie.net/starwars/images/e/e4/Rise_of_Skywalker_promo.jpg',
  timeframe: '34 ABY - 35 ABY',
  description: `The First Order-Resistance War was a one-year-long galactic war between the First Order and the Resistance; a pro-democracy paramilitary faction created by senator Leia Skywalker Organa Solo, that erupted following the First Order's annihilation of the New Republic Senate and Defense Fleet.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_FIRST_ORDER_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Jakku',
      coordinates: [1400, 1338],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/8/8a/Niima_Outpost.jpg',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          0, 1, 2, 3, 4
        ].map(i => (theForceAwakensChapterList[i])),
      },
      description: `Jakku was a remote desert planet located in the Jakku system, within the Western Reaches of the galaxy's Inner Rim. Though considered by many within the galaxy to be distant and relatively worthless, Jakku was the site of important events that would shape galactic history.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Jakku',
      confirmed: true
    },
    {
      title: 'Takodana',
      coordinates: [928, 1500],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/d/d8/Takodana_surface_2.png',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          9, 11, 12, 13
        ].map(i => (theForceAwakensChapterList[i])),
      },
      description: `Takodana was a remote, neutral planet located in the Mid Rim, though it fell in the southwestern region of the galaxy known as the Western Reaches.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Takodana',
      confirmed: true
    },
    {
      title: 'Hosnian Prime',
      coordinates: [1490, 2026],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/8/86/Republic_City_Hosnian_Prime.png',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          12
        ].map(i => (theForceAwakensChapterList[i])),
      },
      description: `Hosnian Prime was a planet in the Hosnian system of the Core Worlds, located along the Corellian Trade Spine. Thirty years after the Battle of Endor, it served as the headquarters of the Galactic Senate and was the galactic capital of the New Republic during the conflict between the Resistance and the First Order.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Hosnian_Prime',
      confirmed: true
    },
    {
      title: `D'Qar`,
      coordinates: [728, 2332],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/2/21/Resistance_group_shot_R2-KT.jpg',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          14, 19
        ].map(i => (theForceAwakensChapterList[i])),
        [InstallmentIndex.theLastJedi + 1]: [
          0, 1
        ].map(i => (theLastJediChapterList[i])),
      },
      description: `D'Qar was a verdant planet located in the Ileenium system of the Outer Rim Territories. By the thirtieth year after the formation of the New Republic, the planet was the location of the headquarters of the Resistance, a small military force formed by Senator Leia Organa to combat the growing threat of the First Order, a successor state to the Galactic Empire.`,
      wikiLink: `https://starwars.fandom.com/wiki/D'Qar`,
      confirmed: true
    },
    {
      title: `Starkiller Base`,
      coordinates: [2362, 1126],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/8/8d/StarkillerBaseCrop-FH.png',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          7, 10, 12, 15, 16, 17, 18
        ].map(i => (theForceAwakensChapterList[i])),
      },
      description: `Starkiller Base was a First Order military base located on the ice planet of Ilum in the Unknown Regions. Commanded by an unofficial triumvirate of General Armitage Hux, Kylo Ren, and Captain Phasma, it was armed with a superweapon capable of destroying entire star systems halfway across the galaxy.`,
      wikiLink: `https://starwars.fandom.com/wiki/Starkiller_Base`,
      confirmed: true
    },
    {
      title: `Ahch-To`,
      coordinates: [1320, 882],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/5/50/Ahch-To_surface.png',
      appearances: {
        [InstallmentIndex.theForceAwakens + 1]: [
          20
        ].map(i => (theForceAwakensChapterList[i])),
        [InstallmentIndex.theLastJedi + 1]: [
          2, 4, 6, 8, 10, 12, 13, 14, 22
        ].map(i => (theLastJediChapterList[i])),
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          22
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Ahch-To, known by many names in ancient legends, was a planet mostly covered in water, with numerous rocky islands blanketed with green trees located in the Unknown Regions. It was the birthplace of the Jedi Order and held the ancient Jedi texts.`,
      wikiLink: `https://starwars.fandom.com/wiki/Ahch-To`,
      confirmed: true
    },
    {
      title: `Cantonica`,
      coordinates: [2918, 2916],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/f/f4/Canto_Bight_TLJ.png',
      appearances: {
        [InstallmentIndex.theLastJedi + 1]: [
          9, 11, 23
        ].map(i => (theLastJediChapterList[i])),
      },
      description: `Cantonica was a desert planet in the Cantonica system within the Corporate Sector of the galaxy's Outer Rim Territories. The planet was home to the casino city Canto Bight, which was a destination for wealthy tourists, gamblers, and war profiteers.`,
      wikiLink: `https://starwars.fandom.com/wiki/Cantonica`,
      confirmed: true
    },
    {
      title: `Crait`,
      coordinates: [750, 2292],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/1/15/Battle_of_Crait.jpg',
      appearances: {
        [InstallmentIndex.theLastJedi + 1]: [
          20, 21, 22, 23
        ].map(i => (theLastJediChapterList[i])),
      },
      description: `Crait was a small salty mineral planet located in a remote sector of the galaxy's Outer Rim Territories, in grid square N-17 on the Standard Galactic Grid. Covered with a layer of white salt over its red soil, the planet once hosted a Rebel Alliance outpost during their early rebellion against the Galactic Empire.`,
      wikiLink: `https://starwars.fandom.com/wiki/Crait`,
      confirmed: true
    },

    {
      title: 'Mustafar',
      coordinates: [353, 1827],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/a/a1/Corvax-Fen-TROS-VD.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          0
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Mustafar was a small volcanic planet located in the Mustafar system, within the Atravis sector of the galaxy's Outer Rim Territories. Following the destruction of the Aeon Engine during the Imperial Era, life began to slowly creep back once again. By 35 ABY, barren irontrees could be found within the few places where fertile soil existed, including the fen.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Mustafar',
      confirmed: true
    },
    {
      title: `Red Honeycomb Zone`,
      coordinates: [108, 1130],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/b/b6/ExegolSystem-TROS.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          1, 24, 26
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `The Red Honeycomb Zone, often also known as the Red Nebula, Blood Net or Ship Eater, was a safe passage through the Galactic Barrier, a chaotic web of anomalies that prevented travel into the galaxy's Unknown Regions.`,
      wikiLink: `https://starwars.fandom.com/wiki/Red_Honeycomb_Zone`,
      confirmed: true
    },
    {
      title: `Exegol`,
      coordinates: [2318, 948],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/0/05/NewCitadel.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          1, 5, 24, 25, 26, 27
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Exegol (also spelled Ixigul in ancient texts) was a dark desert planet located within the Unknown Regions that, according to legend, was the hidden redoubt world of the Sith. It was occupied by the Sith Lord Darth Sidious and the Sith Eternal by 35 ABY. It was also the birthplace of Supreme Leader Snoke, whom Sidious created to rule the First Order while concealing himself in the shadows.`,
      wikiLink: `https://starwars.fandom.com/wiki/Exegol`,
      confirmed: true
    },
    {
      title: `Sinta Glacier`,
      coordinates: [1412, 2620],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/4/4a/Sinta_Glacier_Colony.jpg',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          2
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Sinta Glacier was a massive chunk of ice, billions of years old, which had once been the core of a mega-comet, and was eventually caught in the orbit of the star Sinta. The Sinta Glacier Colony was a settlement on the glacier which extracted ice cores that contained traces of malsarr.`,
      wikiLink: `https://starwars.fandom.com/wiki/Sinta_Glacier`,
      confirmed: true
    },
    {
      title: `Typhonic Nebula`,
      coordinates: [1772, 2686],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/0/0e/Megafauna_Chasm.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          2
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `The Typhonic Nebula was a nebula in the Mid Rim Territories that was said to be the birthplace of Hylemane Lightbringer, a regent of the Galactic Republic who claimed that by being born from the nebula's dust, he could not be killed by mortal weapons.`,
      wikiLink: `https://starwars.fandom.com/wiki/Typhonic_Nebula`,
      confirmed: true
    },
    {
      title: `Ivexia`,
      coordinates: [1702, 2662],
      type: 'city',
      image: 'https://static.wikia.nocookie.net/starwars/images/b/ba/Mirror-Spires.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          2
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Ivexia was a famous city in the Mid Rim Territories that contained the Mirror-Spires, a number of kilometer-high mirrored buildings.`,
      wikiLink: `https://starwars.fandom.com/wiki/Ivexia`,
      confirmed: true
    },
    {
      title: `Cardovyte`,
      coordinates: [2264, 2246],
      type: 'point of interest',
      image: 'https://static.wikia.nocookie.net/starwars/images/6/64/Crystal_Chaos.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          2
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Cardovyte was a location in the Outer Rim Territories. While hyperspace skipping the Millennium Falcon away from the Sinta Glacier, Poe Dameron piloted it through the Crystal Chaos of Cardovyte.`,
      wikiLink: `https://starwars.fandom.com/wiki/Cardovyte`,
      confirmed: true
    },
    {
      title: `Ajan Kloss`,
      coordinates: [2604, 1844],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/e/e0/AjanKlossLandscape-TROS.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          2, 3, 4, 18, 19, 20, 21, 23, 28
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Ajan Kloss was a jungle moon located in the Cademimu sector of the Outer Rim Territories, orbiting the gas giant Ajara. It was notably used by Luke Skywalker to train Leia Organa in the way of the Jedi Order as his first student of a new generation of Jedi and later the Resistance during the war against the First Order, who established a base there.`,
      wikiLink: `https://starwars.fandom.com/wiki/Ajan_Kloss`,
      confirmed: true
    },
    // Pasaana
    {
      title: `Pasaana`,
      coordinates: [1346, 2372],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/8/8f/Pasaana_Zoom_background.jpg',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          6, 7, 8, 9
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Pasaana was a desert planet located in the Expansion Region's Ombakond sector that was the homeworld of the Aki-Aki species. Although the world was home to a great many dangers, the planet was famous for its joyous Festival of the Ancestors that attracted visitors from surrounding sectors.`,
      wikiLink: `https://starwars.fandom.com/wiki/Pasaana`,
      confirmed: true
    },
    {
      title: `Kijimi`,
      coordinates: [2264, 2948],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/b/b6/KijimiCity-DB.jpg',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          12, 13, 14, 15, 20
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Kijimi was a frigid mountainous planet located in the Bryx sector of the galaxy's Mid Rim, in grid square R-8 on the Standard Galactic Grid. Once famed for its marked spirituality, the planet became known as a haven for criminals following the fall of the Galactic Empire.`,
      wikiLink: `https://starwars.fandom.com/wiki/Kijimi`,
      confirmed: true
    },
    {
      title: `Kef Bir`,
      coordinates: [851, 1251],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/9e/KefBir-SWcom.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          16, 17, 18
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Kef Bir, designated IX3244-C and known as the Ocean Moon of Endor, was an ocean moon orbiting the gas giant Endor in the Endor system. Jannah, a human female freedom fighter who, by the time of the First Order-Resistance War, led a tribe of brave and noble warriors, lived on the moon after the tribe mutinied at the Battle of Ansett Island. Some of the wreckage of the second Death Star was located on Kef Bir.`,
      wikiLink: `https://starwars.fandom.com/wiki/Kef_Bir`,
      confirmed: true
    },
    {
      title: 'Bespin',
      coordinates: [576, 1639],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/f/f1/Cloud_City.png',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          28
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Bespin was a gas giant in the star system of the same name. Forming a part of the Anoat sector, its riches manifested in the form of rare tibanna gas. Attracting mining interests and remaining unaffiliated in galactic affairs, Ugnaughts were employed to extract tibanna from repulsorlifted facilities whilst Bespin's mostly human population resided in the open upper levels, exposed to a thin layer of breathable atmosphere in an area known as a "Life Zone."`,
      wikiLink: 'https://starwars.fandom.com/wiki/Bespin',
      confirmed: true
    },
    {
      title: 'Endor',
      coordinates: [848, 1236.5],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/9c/Endor_matte.jpg',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          28
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Endor, designated IX3244-A, also known as the Forest Moon of Endor or the Sanctuary Moon, was a small forested moon that was the ninth moon that orbited the Outer Rim planet of the same name. It was the homeworld of the sentient Dulok, Ewok, and Yuzzum species, as well as the Wistie and semi-sentient Gorax races.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Endor',
      confirmed: true
    },
    {
      title: 'Tatooine',
      coordinates: [858, 2834],
      type: 'planet',
      image: 'https://static.wikia.nocookie.net/starwars/images/9/91/Jawa_moisture_farm_ANH.jpg',
      appearances: {
        [InstallmentIndex.theRiseOfSkywalker + 1]: [
          29
        ].map(i => (theRiseOfSkywalkerChapterList[i])),
      },
      description: `Tatooine was a sparsely inhabited circumbinary desert planet located in the galaxy's Outer Rim Territories. Part of a binary star system, the planet orbited two scorching suns, resulting in the world lacking the necessary surface water to sustain large populations.`,
      wikiLink: 'https://starwars.fandom.com/wiki/Tatooine',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[5],
      confirmed: true,
      coordinates: [
        [1400, 1338],
        [1372, 1390]
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[5],
      confirmed: true,
      coordinates: [
        [1400, 1338],
        [1372, 1390]
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[5],
      confirmed: true,
      coordinates: [
        [1400, 1338],
        [1372, 1390]
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[8],
      confirmed: true,
      coordinates: [
        [1372, 1390],
        [928, 1500]
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[8],
      confirmed: true,
      coordinates: [
        [1372, 1390],
        [928, 1500]
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[8],
      confirmed: true,
      coordinates: [
        [1372, 1390],
        [928, 1500]
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[7],
      confirmed: true,
      coordinates: [
        [1400, 1338],
        [2362, 1126]
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[13],
      confirmed: true,
      coordinates: [
        [2362, 1126],
        [928, 1500]
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[13],
      confirmed: false,
      coordinates: [
        [1400, 1338],
        [728, 2332],
        [928, 1500]
      ],
    },

    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[14],
      confirmed: true,
      coordinates: [
        [928, 1500],
        [728, 2332]
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[14],
      confirmed: true,
      coordinates: [
        [928, 1500],
        [728, 2332]
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[14],
      confirmed: true,
      coordinates: [
        [928, 1500],
        [728, 2332]
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[15],
      confirmed: true,
      coordinates: [
        [928, 1500],
        [2362, 1126],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[15],
      confirmed: true,
      coordinates: [
        [928, 1500],
        [2362, 1126],
      ],
    },

    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[16],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [2362, 1126],
      ],
    },

    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[17],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [2362, 1126],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[17],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [2362, 1126],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[19],
      confirmed: true,
      coordinates: [
        [2362, 1126],
        [728, 2332],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[19],
      confirmed: true,
      coordinates: [
        [2362, 1126],
        [728, 2332],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[19],
      confirmed: true,
      coordinates: [
        [2362, 1126],
        [728, 2332],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[19],
      confirmed: true,
      coordinates: [
        [2362, 1126],
        [728, 2332],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theForceAwakens],
      chapter: theForceAwakensChapterList[20],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [1320, 882]
      ],
    },

    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[5],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [731, 2326.5],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[13],
      confirmed: true,
      coordinates: [
        [731, 2326.5],
        [734, 2321],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[15],
      confirmed: true,
      coordinates: [
        [734, 2321],
        [737, 2315.5],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[16],
      confirmed: true,
      coordinates: [
        [737, 2315.5],
        [740, 2310],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[17],
      confirmed: true,
      coordinates: [
        [740, 2310],
        [743, 2304.5],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[18],
      confirmed: true,
      coordinates: [
        [743, 2304.5],
        [746, 2299],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[19],
      confirmed: true,
      coordinates: [
        [746, 2299],
        [748, 2295.5],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[20],
      confirmed: true,
      coordinates: [
        [748, 2295.5],
        [750, 2292]
      ],
    },

    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[5],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [731, 2326.5],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[13],
      confirmed: true,
      coordinates: [
        [731, 2326.5],
        [734, 2321],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[15],
      confirmed: true,
      coordinates: [
        [734, 2321],
        [737, 2315.5],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[16],
      confirmed: true,
      coordinates: [
        [737, 2315.5],
        [740, 2310],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[17],
      confirmed: true,
      coordinates: [
        [740, 2310],
        [743, 2304.5],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[18],
      confirmed: true,
      coordinates: [
        [743, 2304.5],
        [746, 2299],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[19],
      confirmed: true,
      coordinates: [
        [746, 2299],
        [748, 2295.5],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[21],
      confirmed: true,
      coordinates: [
        [748, 2295.5],
        [750, 2292]
      ],
    },

    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[5],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [731, 2326.5],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[9],
      confirmed: true,
      coordinates: [
        [731, 2326.5],
        [2918, 2916]
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[15],
      confirmed: true,
      coordinates: [
        [2918, 2916],
        [737, 2315.5],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[16],
      confirmed: true,
      coordinates: [
        [737, 2315.5],
        [740, 2310],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[17],
      confirmed: true,
      coordinates: [
        [740, 2310],
        [743, 2304.5],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[18],
      confirmed: true,
      coordinates: [
        [743, 2304.5],
        [746, 2299],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[19],
      confirmed: true,
      coordinates: [
        [746, 2299],
        [748, 2295.5],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[20],
      confirmed: true,
      coordinates: [
        [748, 2295.5],
        [750, 2292]
      ],
    },

    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[5],
      confirmed: true,
      coordinates: [
        [728, 2332],
        [731, 2326.5],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[9],
      confirmed: true,
      coordinates: [
        [731, 2326.5],
        [2918, 2916]
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[15],
      confirmed: true,
      coordinates: [
        [2918, 2916],
        [737, 2315.5],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[16],
      confirmed: true,
      coordinates: [
        [737, 2315.5],
        [740, 2310],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[17],
      confirmed: true,
      coordinates: [
        [740, 2310],
        [743, 2304.5],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[18],
      confirmed: true,
      coordinates: [
        [743, 2304.5],
        [746, 2299],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[19],
      confirmed: true,
      coordinates: [
        [746, 2299],
        [748, 2295.5],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[20],
      confirmed: true,
      coordinates: [
        [748, 2295.5],
        [750, 2292]
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[17],
      confirmed: true,
      coordinates: [
        [1320, 882],
        [743, 2304.5],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[18],
      confirmed: true,
      coordinates: [
        [743, 2304.5],
        [746, 2299],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[19],
      confirmed: true,
      coordinates: [
        [746, 2299],
        [748, 2295.5],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theLastJedi],
      chapter: theLastJediChapterList[21],
      confirmed: true,
      coordinates: [
        [748, 2295.5],
        [750, 2292]
      ],
    },

    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[1],
      confirmed: true,
      coordinates: [
        [353, 1827],
        [108, 1130],
        [2318, 948],
      ],
    },

    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[2],
      confirmed: true,
      coordinates: [
        [1412, 2620],
        [1772, 2686],
        [1702, 2662],
        [2264, 2246],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[2],
      confirmed: true,
      coordinates: [
        [1412, 2620],
        [1772, 2686],
        [1702, 2662],
        [2264, 2246],
        [2604, 1844],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[6],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [1346, 2372],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[6],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [1346, 2372],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[6],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [1346, 2372],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[6],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [1346, 2372],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[9],
      confirmed: false,
      coordinates: [
        [2318, 948],
        [108, 1130],
        [1346, 2372],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[11],
      confirmed: true,
      coordinates: [
        [1346, 2372],
        [1805, 2660],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[11],
      confirmed: true,
      coordinates: [
        [1346, 2372],
        [1805, 2660],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[11],
      confirmed: true,
      coordinates: [
        [1346, 2372],
        [1805, 2660],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[11],
      confirmed: true,
      coordinates: [
        [1346, 2372],
        [1805, 2660],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[12],
      confirmed: true,
      coordinates: [
        [1805, 2660],
        [2264, 2948],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[12],
      confirmed: true,
      coordinates: [
        [1805, 2660],
        [2264, 2948],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[12],
      confirmed: true,
      coordinates: [
        [1805, 2660],
        [2264, 2948],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[12],
      confirmed: true,
      coordinates: [
        [1805, 2660],
        [2264, 2948],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[13],
      confirmed: false,
      coordinates: [
        [1805, 2660],
        [2264, 2948],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[16],
      confirmed: true,
      coordinates: [
        [2264, 2948],
        [851, 1251],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[16],
      confirmed: true,
      coordinates: [
        [2264, 2948],
        [851, 1251],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[16],
      confirmed: true,
      coordinates: [
        [2264, 2948],
        [851, 1251],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[16],
      confirmed: true,
      coordinates: [
        [2264, 2948],
        [851, 1251],
      ],
    },

    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[17],
      confirmed: true,
      coordinates: [
        [2264, 2948],
        [851, 1251],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[19],
      confirmed: true,
      coordinates: [
        [851, 1251],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[19],
      confirmed: true,
      coordinates: [
        [851, 1251],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[19],
      confirmed: true,
      coordinates: [
        [851, 1251],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[19],
      confirmed: true,
      coordinates: [
        [851, 1251],
        [2604, 1844],
      ],
    },

    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[24],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [108, 1130],
        [2318, 948],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[24],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [108, 1130],
        [2318, 948],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[24],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [108, 1130],
        [2318, 948],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[22],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [1320, 882],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[24],
      confirmed: true,
      coordinates: [
        [1320, 882],
        [108, 1130],
        [2318, 948],
      ],
    },
    {
      character: characters[CharacterIndex.Kylo],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[25],
      confirmed: true,
      coordinates: [
        [851, 1251],
        [108, 1130],
        [2318, 948],
      ],
    },

    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[28],
      confirmed: true,
      coordinates: [
        [2318, 948],
        [108, 1130],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Poe],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[28],
      confirmed: true,
      coordinates: [
        [2318, 948],
        [108, 1130],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Finn],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[28],
      confirmed: true,
      coordinates: [
        [2318, 948],
        [108, 1130],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.BB8],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[28],
      confirmed: true,
      coordinates: [
        [2318, 948],
        [108, 1130],
        [2604, 1844],
      ],
    },
    {
      character: characters[CharacterIndex.Rey],
      installment: installments[InstallmentIndex.theRiseOfSkywalker],
      chapter: theRiseOfSkywalkerChapterList[29],
      confirmed: true,
      coordinates: [
        [2604, 1844],
        [858, 2834],
      ],
    },
  ]
};

