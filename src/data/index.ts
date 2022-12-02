import { DataBundle } from "character-journey-map/models";
import { THE_CLONE_WARS_DATA } from "./theCloneWars";
import { THE_REBELLION_DATA } from "./theRebellion";

export enum AvailableSeries {
  theCloneWars = 'theCloneWars',
  theRebellion = 'theRebellion'
}

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  theCloneWars: THE_CLONE_WARS_DATA,
  theRebellion: THE_REBELLION_DATA
}