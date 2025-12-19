import { TwoHandWeaponCategory, Weapon } from "../../../types";

export const TWO_HAND_GUNS: Weapon[] = [
  {
    id: 327,
    name: 'Fusil',
    category: TwoHandWeaponCategory.GUN,
    cost: 5,
    range: { min: 2, max: 3 },
    damage: 7,
    rank: 2,
    weight: 3,
    recipe: [
      { material: 'iron', value: 2 },
      { material: 'black_powder', value: 1 },
    ],
  },
  {
    id: 98,
    name: 'Arquebuse en bois',
    category: TwoHandWeaponCategory.GUN,
    cost: 5,
    range: { min: 2, max: 3 },
    damage: 9,
    rank: 3,
    weight: 3,
  },
  {
    id: 326,
    name: 'Carabine harpie',
    category: TwoHandWeaponCategory.GUN,
    cost: 5,
    range: { min: 2, max: 4 },
    damage: 4,
    rank: 3,
    weight: 3,
    bonuses: [{ stat: 'precision', value: 10 }],
    recipe: [
      { material: 'iron', value: 3 },
      { material: 'mithril', value: 2 },
      { material: 'black_powder', value: 1 },
    ],
  },
];
