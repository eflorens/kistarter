import { OneHandWeaponCategory, Weapon } from "../../../types";

export const GUNS: Weapon[] = [
  {
    id: 444,
    name: 'Pistolet',
    category: OneHandWeaponCategory.GUN,
    cost: 5,
    range: { min: 2, max: 3 },
    damage: 5,
    rank: 2,
    weight: 2,
  },
];
