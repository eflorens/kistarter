import { OneHandWeaponCategory, Weapon } from "../../../types";

export const AXES: Weapon[] = [
  {
    id: 148,
    name: 'Hache',
    category: OneHandWeaponCategory.AXE,
    cost: 5,
    damage: 3,
    rank: 1,
    weight: 2,
    effects: [{ status: 'bleeding', value: 1 }],
    recipe: [{ material: 'iron', value: 2 }],
  },
  {
    id: 292,
    name: 'Hachoir',
    category: OneHandWeaponCategory.AXE,
    cost: 4,
    damage: 4,
    rank: 1,
    weight: 2,
    recipe: [{ material: 'iron', value: 2 }],
  },
  {
    id: 101,
    name: 'Tomahawk',
    category: OneHandWeaponCategory.AXE,
    cost: 5,
    damage: 5,
    rank: 2,
    weight: 2,
    effects: [{ status: 'bleeding', value: 1 }],
    recipe: [
      { material: 'wood', value: 1 },
      { material: 'rock', value: 1 },
    ],
  },
  {
    id: 103,
    name: 'Hache de guerre',
    category: OneHandWeaponCategory.AXE,
    cost: 5,
    damage: 5,
    rank: 3,
    weight: 2,
    effects: [{ status: 'bleeding', value: 2 }],
    recipe: [
      { material: 'iron', value: 4 },
      { material: 'blood', value: 2 },
    ],
  },
];
