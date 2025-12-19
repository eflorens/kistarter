import { OneHandWeaponCategory, Weapon } from "../../../types";

export const SPEARS: Weapon[] = [
  {
    id: 62,
    name: 'Croc de fer',
    category: OneHandWeaponCategory.SPEAR,
    cost: 5,
    damage: 5,
    rank: 2,
    weight: 2,
    effects: [{ status: 'armor_penalty', value: 1 }],
    recipe: [
      { material: 'iron', value: 2 },
      { material: 'wood', value: 2 },
    ],
  },
  {
    id: 308,
    name: 'Lance',
    category: OneHandWeaponCategory.SPEAR,
    cost: 5,
    damage: 5,
    rank: 3,
    weight: 2,
    effects: [{ status: 'armor_penalty', value: 2 }],
    recipe: [
      { material: 'yew', value: 3 },
      { material: 'iron', value: 3 },
    ],
  },
  {
    id: 168,
    name: 'Trident',
    category: OneHandWeaponCategory.SPEAR,
    cost: 5,
    damage: 7,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'evasion', value: 10 }],
    recipe: [
      { material: 'ebony', value: 3 },
      { material: 'copper', value: 3 },
    ],
  },
];
