import { TwoHandWeaponCategory, Weapon } from "../../../types";

export const TWO_HAND_SPELL_FOCUSES: Weapon[] = [
  {
    id: 454,
    name: 'Bâton de sorcier',
    category: TwoHandWeaponCategory.STAFF,
    weight: 2,
    cost: 4,
    damage: 0,
    scrolls: 1,
    bonuses: [{ stat: 'magicDamage', value: 7 }],
    rank: 3,
  },
  {
    id: 455,
    name: "Bâton d'hérétique",
    category: TwoHandWeaponCategory.STAFF,
    weight: 2,
    cost: 4,
    damage: 0,
    scrolls: 1,
    bonuses: [{ stat: 'magicDamage', value: 9 }],
    rank: 3,
  },
];
