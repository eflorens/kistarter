import { TwoHandWeaponCategory, Weapon } from "../../../types";

export const TWO_HAND_MACES: Weapon[] = [
  {
    id: 445,
    name: 'Masse de siège',
    category: TwoHandWeaponCategory.MACE,
    cost: 5,
    damage: 7,
    rank: 2,
    weight: 4,
    effects: [{ status: 'evasion_penalty', value: 1 }],
  },
  {
    id: 108,
    name: 'Masse géante',
    category: TwoHandWeaponCategory.MACE,
    cost: 5,
    damage: 8,
    rank: 3,
    weight: 5,
    effects: [{ status: 'evasion_penalty', value: 2 }],
    recipe: [
      { material: 'wood', value: 3 },
      { material: 'rock', value: 3 },
    ],
  },
];
