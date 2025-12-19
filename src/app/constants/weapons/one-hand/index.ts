import { Weapon } from "../../../types";
import { AXES } from "./axes";
import { DAGGERS } from "./daggers";
import { GENERICS } from "./generics";
import { GLOVES } from "./gloves";
import { GUNS } from "./guns";
import { INSTRUMENTS } from "./instruments";
import { MACES } from "./maces";
import { SHIELDS } from "./shields";
import { SPEARS } from "./spears";
import { SPELL_FOCUSES } from "./spell-focuses";
import { SPELL_RECEPTACLES } from "./spell-receptacles";
import { SWORDS } from "./swords";
import { SYMBOLS } from "./symbols";
import { WHIPS } from "./whips";

export * from './axes';
export * from './daggers';
export * from './generics';
export * from './gloves';
export * from './guns';
export * from './instruments';
export * from './maces';
export * from './shields';
export * from './spears';
export * from './spell-focuses';
export * from './spell-receptacles';
export * from './swords';
export * from './symbols';
export * from './whips';

export const ONE_HAND_WEAPONS: Weapon[] = [
  ...AXES,
  ...DAGGERS,
  ...GENERICS,
  ...GLOVES,
  ...GUNS,
  ...INSTRUMENTS,
  ...MACES,
  ...SHIELDS,
  ...SPEARS,
  ...SPELL_FOCUSES,
  ...SPELL_RECEPTACLES,
  ...SWORDS,
  ...SYMBOLS,
  ...WHIPS,
];
