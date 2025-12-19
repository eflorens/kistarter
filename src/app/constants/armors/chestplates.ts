import { Armor, ArmorCategory, ElementType } from "../../types";

export const CHESTPLATES: Armor[] = [
  {
    id: 55,
    name: 'Haillon',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 1 },
      { stat: 'armor', value: 1 }
    ],
    rank: 0,
    weight: 1
  },
  {
    id: 48,
    name: 'Armure en cuir',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'resistance', value: 2 }
    ],
    rank: 1,
    weight: 2,
  },
  {
    id: 78,
    name: 'Plastron',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 4 }
    ],
    rank: 1,
    weight: 3
  },
  {
    id: 18,
    name: 'Toge',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 4 }
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 124,
    name: 'Veston',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 1 },
      { stat: 'resistance', value: 1 },
      { stat: 'stealth', value: 10 }
    ],
    rank: 1,
    weight: 1
  },
  {
    id: 74,
    name: 'Brigandine',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'resistance', value: 3 },
    ],
    rank: 2,
    weight: 2
  },
  {
    id: 9,
    name: 'Cotte de mailles',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 6 }
    ],
    rank: 2,
    weight: 4
  },
  {
    id: 198,
    name: 'Fourrure',
    category: ArmorCategory.CHESTPLATE,
    elementalResistances: [
      { element: ElementType.FIRE, value: 10 },
      { element: ElementType.ICE, value: 10 },
      { element: ElementType.THUNDER, value: 10 },
    ],
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'resistance', value: 2 },
    ],
    rank: 2,
    weight: 3
  },
  {
    id: 184,
    name: 'Pèlerine',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'stealth', value: 10 },
      { stat: 'evasion', value: 10 },
      { stat: 'magicDefense', value: 10 },
    ],
    rank: 2,
    weight: 2
  },
  {
    id: 92,
    name: 'Toge en soie',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 6 },
    ],
    rank: 2,
    weight: 2
  },
  {
    id: 87,
    name: 'Armure astrale',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 6 },
      { stat: 'dexterity', value: 2 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 82,
    name: 'Armure de plates',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 8 },
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 191,
    name: 'Bliaut',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'damage', value: 2 },
      { stat: 'evasion', value: 10 },
      { stat: 'magicDefense', value: 10 },
      { stat: 'stealth', value: 10 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 111,
    name: 'Cape',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'evasion', value: 15 },
      { stat: 'charisma', value: 2 },
      { stat: 'magicDefense', value: 15 },
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 106,
    name: 'Ceinture de force',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 2 },
      { stat: 'resistance', value: 2 },
      { stat: 'strength', value: 2 },
      { stat: 'evasion', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 81,
    name: 'Cuirasse',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 6 },
      { stat: 'damage', value: 2 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 232,
    name: 'Dérobade en soie',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 6 },
      { stat: 'magicMastery', value: 10 }
    ],
    rank: 3,
    weight: 1
  },
  {
    id: 313,
    name: 'Harlequine',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'resistance', value: 3 },
      { stat: 'magicMastery', value: 10 },
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 161,
    name: 'Kimono',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 3 },
      { stat: 'resistance', value: 3 },
      { stat: 'evasion', value: 10 },
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 318,
    name: 'Manteau de rôdeur',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'dexterity', value: 2 },
      { stat: 'evasion', value: 15 },
      { stat: 'stealth', value: 15 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 334,
    name: 'Manteau du nomade',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'luck', value: 100 },
      { stat: 'magicDefense', value: 10 },
      { stat: 'evasion', value: 10 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 21,
    name: 'Pèlerine en soie',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'stealth', value: 10 },
      { stat: 'evasion', value: 15 },
      { stat: 'magicDefense', value: 15 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 192,
    name: 'Plastron miroir',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 5 },
      { stat: 'magicDefense', value: 15 },
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 354,
    name: 'Armure de la fournaise',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 7 },
    ],
    elementalResistances: [
      { element: ElementType.FIRE, value: 20 },
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 236,
    name: 'Cotte de mailles en mithril',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 7 },
    ],
    additionalGem: true,
    rank: 3,
    weight: 3
  },
  {
    id: 193,
    name: 'Plastron dragon',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'magicMastery', value: 10 },
      { stat: 'armor', value: 6 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 31,
    name: 'Plastron noble',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 6 },
      { stat: 'intelligence', value: 2 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 197,
    name: 'Plastron terrifiant',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'armor', value: 6 },
      { stat: 'strength', value: 2 }
    ],
    rank: 3,
    weight: 3
  },
  {
    id: 129,
    name: 'Tenue améthyste',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 6 },
      { stat: 'magicDamage', value: 2 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 307,
    name: "Tunique de l'ombre",
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'precision', value: 10 },
      { stat: 'evasion', value: 15 },
      { stat: 'stealth', value: 15 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 58,
    name: 'Tunique en soie',
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'evasion', value: 15 },
      { stat: 'magicDefense', value: 15 },
      { stat: 'intelligence', value: 2 }
    ],
    rank: 3,
    weight: 2
  },
  {
    id: 360,
    name: "Robe des ténèbres",
    category: ArmorCategory.CHESTPLATE,
    bonuses: [
      { stat: 'resistance', value: 5 },
      { stat: 'stealth', value: 10 }
    ],
    elementalResistances: [
      { element: ElementType.DARK, value: 20 }
    ],
    rank: 3,
    weight: 3
  },
];
