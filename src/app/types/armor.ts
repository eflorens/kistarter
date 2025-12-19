import { ElementalResistance } from "./element";
import { CraftingRequirement } from "./material";
import { StatBonus } from "./stat";

export enum ArmorCategory {
  HELMET = 'Casque (tête)',
  CHESTPLATE = 'Armure (buste)',
  BOOTS = 'Bottes (pieds)',
  JEWELRY = 'Fétiche',
}

export type ArmorSlot = 'helmet' | 'chestplate' | 'boots' | 'jewelry';

export type Armor = {
  id: number;
  name: string;
  category: ArmorCategory;
  bonuses?: StatBonus[];
  recipe?: CraftingRequirement[];
  additionalGem?: boolean;
  elementalResistances?: ElementalResistance[];
  rank: number;
  weight: number;
};
