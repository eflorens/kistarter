import { OneHandWeaponCategory, Weapon } from "../../../types";

export const GENERICS: Weapon[] = [
  {
    id: 104,
    name: 'Lanterne',
    category: OneHandWeaponCategory.GENERIC,
    rank: 1,
    weight: 1,
    bonuses: [{ stat: 'observation', value: 15 }],
  },
  {
    id: 435,
    name: 'Torche',
    category: OneHandWeaponCategory.GENERIC,
    cost: 5,
    damage: 1,
    rank: 2,
    weight: 2,
    bonuses: [{ stat: 'observation', value: 10 }],
    effects: [{ status: 'burn', value: 1 }],
    recipe: [{ material: 'wood', value: 3 }, { material: 'black_powder', value: 1 }]
  },
  {
    id: 54,
    name: 'Bâton de voyage',
    category: OneHandWeaponCategory.GENERIC,
    cost: 4,
    damage: 2,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'luck', value: 100 }],
    recipe: [
      { material: 'ebony', value: 2 },
      { material: 'yew', value: 2 },
    ],
  },
];
