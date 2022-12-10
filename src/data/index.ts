import { DataBundle } from "character-journey-map/models";
import { THE_CLONE_WARS_DATA } from "./theCloneWars";
import { THE_REBELLION_DATA } from "./theRebellion";
import { THE_FIRST_ORDER_DATA } from "./theFirstOrder";
import { THE_IMPERIAL_ERA_DATA } from "./theImperialEra";

export enum AvailableSeries {
  theCloneWars = 'theCloneWars',
  theImperialEra = 'theImperialEra',
  theRebellion = 'theRebellion',
  theFirstOrder = 'theFirstOrder',
}

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  theCloneWars: THE_CLONE_WARS_DATA,
  theImperialEra: THE_IMPERIAL_ERA_DATA,
  theRebellion: THE_REBELLION_DATA,
  theFirstOrder: THE_FIRST_ORDER_DATA
}