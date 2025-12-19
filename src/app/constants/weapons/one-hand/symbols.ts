import { OneHandWeaponCategory, Weapon } from "../../../types";

export const SYMBOLS: Weapon[] = [
  {
    id: 88,
    name: 'Calice',
    category: OneHandWeaponCategory.SYMBOL,
    bonuses: [
      { stat: 'resistance', value: 3 },
    ],
    rank: 2,
    weight: 2,
  },
  {
    id: 190,
    name: 'Bracelet miroir',
    category: OneHandWeaponCategory.SYMBOL,
    bonuses: [
      { stat: 'resistance', value: 2 },
      { stat: 'magicDefense', value: 10 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 312,
    name: 'Cercle coeur',
    category: OneHandWeaponCategory.SYMBOL,
    bonuses: [
      { stat: 'resistance', value: 3 },
      { stat: 'healthRegen', value: 2 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 336,
    name: 'Eventail',
    category: OneHandWeaponCategory.SYMBOL,
    bonuses: [
      { stat: 'evasion', value: 10 },
      { stat: 'spirit', value: 2 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 337,
    name: 'Eventail noble',
    category: OneHandWeaponCategory.SYMBOL,
    bonuses: [
      { stat: 'magicDefense', value: 10 },
      { stat: 'spirit', value: 2 },
    ],
    rank: 3,
    weight: 1,
  },
];
