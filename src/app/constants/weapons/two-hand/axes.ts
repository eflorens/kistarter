import { TwoHandWeaponCategory, Weapon } from "../../../types";

export const TWO_HAND_AXES: Weapon[] = [
  {
    id: 244,
    name: 'Hache double',
    category: TwoHandWeaponCategory.AXE,
    cost: 5,
    damage: 8,
    rank: 3,
    weight: 5,
    effects: [{ status: 'bleeding', value: 2 }],
  },
];
