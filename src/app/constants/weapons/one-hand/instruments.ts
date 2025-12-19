import { OneHandWeaponCategory, Weapon } from "../../../types";

export const INSTRUMENTS: Weapon[] = [
  {
    id: 443,
    name: 'Mandoline',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 3 },
    ],
    rank: 2,
    weight: 2,
  },
  {
    id: 269,
    name: 'Castagnettes',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 2 },
      { stat: 'luck', value: 50 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 200,
    name: 'Cloche',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 2 },
      { stat: 'magicDefense', value: 10 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 85,
    name: 'Conque de chasse',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 2 },
      { stat: 'precision', value: 10 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 199,
    name: 'Flûte',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 2 },
      { stat: 'evasion', value: 10 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 102,
    name: 'Harpe elfique',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [
      { stat: 'charisma', value: 2 },
      { stat: 'magicMastery', value: 10 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 437,
    name: 'Luth',
    category: OneHandWeaponCategory.INSTRUMENT,
    bonuses: [{ stat: 'charisma', value: 2 }],
    rank: 2,
    weight: 2,
  }
];
