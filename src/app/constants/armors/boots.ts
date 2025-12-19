import { Armor, ArmorCategory } from "../../types";

export const BOOTS: Armor[] = [
  {
    id: 8,
    name: 'Bottes',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 1 },
      { stat: 'resistance', value: 1 },
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 22,
    name: 'Chaussons',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'stealth', value: 10 }
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 30,
    name: 'Jambières',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 2 }
    ],
    rank: 1,
    weight: 2
  },
  {
    id: 57,
    name: 'Souliers',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'resistance', value: 2 },
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 156,
    name: 'Bottines',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 1 },
      { stat: 'evasion', value: 5 },
      { stat: 'resistance', value: 1 }
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 260,
    name: 'Jambières en cuivre',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 3 },
    ],
    rank: 2,
    weight: 2
  },
  {
    id: 335,
    name: 'Bottes du nomade',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'magicDefense', value: 5 },
      { stat: 'evasion', value: 5 },
      { stat: 'luck', value: 50 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 261,
    name: 'Bottes runiques',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'magicDefense', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 138,
    name: 'Bottillons ailés',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'evasion', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 149,
    name: 'Bottines sylvaines',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'stealth', value: 10 },
      { stat: 'evasion', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 64,
    name: 'Brodequins',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'resistance', value: 2 },
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 229,
    name: 'Chaussons en soie',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'evasion', value: 10 },
      { stat: 'magicDefense', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 239,
    name: 'Jambières en mithril',
    category: ArmorCategory.BOOTS,
    additionalGem: true,
    bonuses: [
      { stat: 'armor', value: 3 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 95,
    name: 'Mocassins',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'resistance', value: 3 },
      { stat: 'intelligence', value: 1 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 77,
    name: 'Souliers en soie',
    category: ArmorCategory.BOOTS,
    bonuses: [
      { stat: 'resistance', value: 3 },
      { stat: 'magicDamage', value: 1 }
    ],
    rank: 3,
    weight: 1
  }
];
