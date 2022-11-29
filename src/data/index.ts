import { DataBundle } from "character-journey-map/models";
import { THE_CLONE_WARS_DATA } from "./theCloneWars";

export enum AvailableSeries {
  theCloneWars = 'theCloneWars'
}

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  theCloneWars: THE_CLONE_WARS_DATA
}