import { OneHandWeaponCategory, Weapon } from "../../../types";

export const WHIPS: Weapon[] = [
  {
    id: 150,
    name: 'Fouet',
    category: OneHandWeaponCategory.WHIP,
    cost: 4,
    range: { min: 1, max: 2 },
    damage: 2,
    rank: 1,
    weight: 2,
    recipe: [
      { material: 'leather', value: 1 },
      { material: 'sinew', value: 1 },
    ],
  },
  {
    id: 356,
    name: 'Fouet enflammé',
    category: OneHandWeaponCategory.WHIP,
    cost: 5,
    range: { min: 1, max: 2 },
    damage: 3,
    rank: 3,
    weight: 2,
    effects: [{ status: 'burn', value: 1 }],
  },
  {
    id: 157,
    name: 'Fouet-lame',
    category: OneHandWeaponCategory.WHIP,
    cost: 5,
    range: { min: 1, max: 2 },
    damage: 6,
    rank: 3,
    weight: 2,
    recipe: [
      { material: 'iron', value: 3 },
      { material: 'sinew', value: 1 },
    ],
  },
  {
    id: 151,
    name: 'Magifouet',
    category: OneHandWeaponCategory.WHIP,
    cost: 5,
    range: { min: 1, max: 2 },
    damage: 4,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'magicDamage', value: 2 }],
    recipe: [
      { material: 'leather', value: 1 },
      { material: 'sinew', value: 1 },
      { material: 'ruby', value: 1 },
    ],
  },
];
