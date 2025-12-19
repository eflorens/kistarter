import { OneHandWeaponCategory, Weapon, ElementType } from "../../../types";

export const SHIELDS: Weapon[] = [
  {
    id: 355,
    name: 'Bouclier de la fournaise',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'armor', value: 3 }],
  },
  {
    id: 91,
    name: 'Targe',
    category: OneHandWeaponCategory.SHIELD,
    rank: 1,
    weight: 1,
    recipe: [{ material: 'iron', value: 2 }],
  },
  {
    id: 2,
    name: 'Rondache',
    category: OneHandWeaponCategory.SHIELD,
    rank: 1,
    weight: 1,
    recipe: [{ material: 'wood', value: 2 }],
  },
  {
    id: 451,
    name: 'Bouclier ancien',
    category: OneHandWeaponCategory.SHIELD,
    rank: 2,
    weight: 2,
  },
  {
    id: 243,
    name: 'Bouclier ailé',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'evasion', value: 10 },
    ],
    recipe: [
      { material: 'iron', value: 1 },
      { material: 'sewing_thread', value: 1 },
      { material: 'fairy_wing', value: 2 },
    ],
  },
  {
    id: 29,
    name: 'Bouclier à pointes',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'damage', value: 1 },
    ],
  },
  {
    id: 270,
    name: 'Bouclier dragon',
    category: OneHandWeaponCategory.MAGIC_SHIELD,
    scrolls: 1,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'armor', value: 3 }],
    recipe: [
      { material: 'copper', value: 4 },
      { material: 'scales', value: 2 },
    ],
  },
  {
    id: 126,
    name: 'Bouclier sacré',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'intelligence', value: 1 },
    ],
    recipe: [
      { material: 'iron', value: 3 },
      { material: 'golden_dust', value: 1 },
    ],
  },
  {
    id: 28,
    name: 'Ecu en cuivre',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [{ stat: 'armor', value: 4 }],
    recipe: [{ material: 'copper', value: 5 }],
  },
  {
    id: 203,
    name: 'Pavois phénix',
    category: OneHandWeaponCategory.SHIELD,
    rank: 3,
    weight: 2,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'healthRegen', value: 2 },
    ],
    recipe: [
      { material: 'copper', value: 3 },
      { material: 'feather', value: 1 },
    ],
  },
];
