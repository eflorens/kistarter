import { Armor, ArmorCategory, ElementType } from "../../types";

export const HELMETS: Armor[] = [
  {
    id: 59,
    name: 'Bandana',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'evasion', value: 10 }
    ],
    rank: 1,
    weight: 1,
  },
  {
    id: 7,
    name: 'Cabasset en cuivre',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 2 }
    ],
    rank: 1,
    weight: 1,
  },
  {
    id: 285,
    name: 'Casque en bois',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 2 },
    ],
    rank: 1,
    weight: 1,
  },
  {
    id: 361,
    name: "Masque des ténèbres",
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'resistance', value: 2 },
      { stat: 'magicDamage', value: 1 },
    ],
    elementalResistances: [
      { element: ElementType.DARK, value: 20 },
    ],
    rank: 1,
    weight: 2,
  },
  {
    id: 166,
    name: 'Capuchon',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'resistance', value: 2 },
    ],
    rank: 1,
    weight: 1,
  },
  {
    id: 19,
    name: 'Toque',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 1 },
      { stat: 'resistance', value: 1 },
    ],
    rank: 1,
    weight: 1,
  },
  {
    id: 32,
    name: 'Casque',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 }
    ],
    rank: 2,
    weight: 2,
  },
  {
    id: 439,
    name: 'Capuche de voleur',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'stealth', value: 15 }
    ],
    rank: 2,
    weight: 1
  },
  {
    id: 440,
    name: "Lunettes d'explorateur",
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'observation', value: 15 }
    ],
    rank: 2,
    weight: 1
  },
  {
    id: 146,
    name: 'Bandana en soie',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'evasion', value: 10 },
      { stat: 'magicDefense', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 286,
    name: 'Barrette en or',
    category: ArmorCategory.HELMET,
    additionalGem: true,
    bonuses: [
      { stat: 'magicDefense', value: 15 },
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 233,
    name: 'Bassinet plume',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'precision', value: 5 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 121,
    name: 'Bonnet émeraude',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'intelligence', value: 1 },
      { stat: 'resistance', value: 3 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 155,
    name: 'Cabasset à cornes',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'damage', value: 1 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 162,
    name: "Cagoule de l'ombre",
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'precision', value: 10 },
      { stat: 'stealth', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 317,
    name: 'Capuche de rôdeur',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'dexterity', value: 1 },
      { stat: 'stealth', value: 15 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 271,
    name: 'Capuchon en soie',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'resistance', value: 4 },
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 291,
    name: 'Capuche féline',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'evasion', value: 15 },
      { stat: 'intelligence', value: 1 },
    ],
    rank: 3,
    weight: 1,
  },
  {
    id: 86,
    name: 'Casque astral',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'dexterity', value: 1 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 137,
    name: 'Casque noble',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'intelligence', value: 1 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 194,
    name: 'Casque terrifiant',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'strength', value: 1 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 83,
    name: 'Chapeau du nomade',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'luck', value: 50 },
      { stat: 'evasion', value: 5 },
      { stat: 'magicDefense', value: 5 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 25,
    name: 'Coiffe en soie',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'magicDamage', value: 1 },
      { stat: 'resistance', value: 3 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 319,
    name: 'Crâne rituel',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'spirit', value: 2 },
      { stat: 'magicDefense', value: 10 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 177,
    name: 'Diadème',
    category: ArmorCategory.HELMET,
    additionalGem: true,
    bonuses: [
      { stat: 'intelligence', value: 1 },
      { stat: 'spirit', value: 1 },
      { stat: 'charisma', value: 1 },
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 11,
    name: 'Heaume',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 4 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 329,
    name: 'Masque fantôme',
    category: ArmorCategory.HELMET,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'stealth', value: 10 }
    ],
    rank: 3,
    weight: 2
  },
];
