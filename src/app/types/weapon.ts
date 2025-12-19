import { ElementType } from "./element";
import { CraftingRequirement } from "./material";
import { StatBonus } from "./stat";
import { StatusKey } from "./status";

export enum OneHandWeaponCategory {
  AXE = 'Une main (Hache)',
  DAGGER = 'Une main (Dague)',
  FIRE_SWORD = 'Une main (Épée de feu)',
  GENERIC = 'Une main (Générique)',
  GLOVE = 'Une main (Gantelet)',
  GUN = 'Une main (Fusil)',
  INSTRUMENT = 'Une main (Instrument)',
  MACE = 'Une main (Masse)',
  MAGIC_SHIELD = 'Une main (Bouclier magique)',
  SHIELD = 'Une main (Bouclier)',
  SPEAR = 'Une main (Lance)',
  SPELL_FOCUS = 'Une main (Focalisateur de sorts)',
  SPELL_RECEPTACLE = 'Une main (Receptacle de sorts)',
  SWORD = 'Une main (Épée)',
  SYMBOL = 'Une main (Symbole)',
  WHIP = 'Une main (Fouet)',
}

export enum TwoHandWeaponCategory {
  AXE = 'Deux mains (Hache)',
  BOW = 'Deux mains (Arc)',
  GUN = 'Deux mains (Fusil)',
  MACE = 'Deux mains (Masse)',
  STAFF = 'Deux mains (Bâton)',
  SWORD = 'Deux mains (Épée)',
}

export type WeaponCategory = OneHandWeaponCategory | TwoHandWeaponCategory;

export type Weapon = {
  id: number;
  name: string;
  category: WeaponCategory;
  cost?: number;
  damage?: number;
  rank: number;
  weight: number;
  range?: { min: number; max: number };
  scrolls?: number;
  element?: ElementType;
  bonuses?: StatBonus[];
  effects?: WeaponStatusEffect[];
  recipe?: CraftingRequirement[];
};

export type WeaponStatusEffect = {
  status: StatusKey;
  value: number;
};
