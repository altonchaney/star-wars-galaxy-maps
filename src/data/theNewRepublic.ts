
import { Map, Chapter, Character, Installment, Series, MediaType, DataBundle } from 'character-journey-map/models';
import map from '../assets/galaxymap-full.png';

const mapData: Map = {
  image: map,
  dimensions: [3371, 3753 ],
  source: 'https://www.reddit.com/r/StarWarsEU/comments/p3qd7o/here_comes_my_canonlegends_map_v22_i_keep_adding/'
};

// <> denotes an appearance, not destination
// * denotes unconfirmed path destination
const theMandalorianChapterList: Chapter[] = [
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
    name: 'Mandalorian',
    image: 'https://static.wikia.nocookie.net/starwars/images/0/0c/The-Bad-Batch-in-the-snow.png',
    color: 'rgb(110,55,75)',
    wikiLink: 'https://starwars.fandom.com/wiki/Clone_Force_99'
  },
];

enum CharacterIndex {
  'mandalorian' = 0,
}

enum InstallmentIndex {
  'theMandalorian' = 0,
}

export const installments: Installment[] = [
  {
    title: 'The Mandalorian (Season 1)',
    type: MediaType.Television,
    image: 'https://static.wikia.nocookie.net/starwars/images/d/d4/BadBatchPoster.jpg',
    chapters: theMandalorianChapterList
  },
];

export const seriesData: Series = {
  title: 'The New Republic',
  stub: 'theNewRepublic',
  image: 'https://static.wikia.nocookie.net/starwars/images/c/c8/SW_franchise_mural_OT.jpg',
  timeframe: '19 BBY - 9 BBY',
  description: `The Galactic Civil War, also referred to as the revolution or the rebellion, was a galactic power struggle in which the Alliance to Restore the Republic waged a rebellion against the ruling Galactic Empire in an attempt to restore democratic rule to the galaxy.`,
  color: 'rgb(139,53,29)',
  backgroundColor: 'rgb(41,41,43)',
  installments: installments,
  characters: characters
};

export const THE_NEW_REPUBLIC_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [],
  paths: []
};
