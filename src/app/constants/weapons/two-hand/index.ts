import { Weapon } from "../../../types";
import { TWO_HAND_AXES } from "./axes";
import { TWO_HAND_BOWS } from "./bows";
import { TWO_HAND_GUNS } from "./guns";
import { TWO_HAND_MACES } from "./maces";
import { TWO_HAND_SPELL_FOCUSES } from "./spell_focuses";
import { TWO_HAND_SWORDS } from "./swords";

export const TWO_HAND_WEAPONS: Weapon[] = [
  ...TWO_HAND_BOWS,
  ...TWO_HAND_GUNS,
  ...TWO_HAND_SWORDS,
  ...TWO_HAND_AXES,
  ...TWO_HAND_MACES,
  ...TWO_HAND_SPELL_FOCUSES,
];
