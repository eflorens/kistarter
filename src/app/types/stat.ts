export type PrimaryStats = {
  charisma: number;
  constitution: number;
  dexterity: number;
  evasion: number;
  intelligence: number;
  magicDefense: number;
  magicMastery: number;
  observation: number;
  precision: number;
  spirit: number;
  stealth: number;
  strength: number;
}

export type SecondaryStats = {
  armor: number;
  damage: number;
  empathy: number;
  healthPoints: number;
  healthRegen: number;
  luck: number;
  magicDamage: number;
  magicPoints: number;
  magicRegen: number;
  memory: number;
  resistance: number;
}

export type PrimaryStatKey = keyof PrimaryStats;
export type SecondaryStatKey = keyof SecondaryStats;

export type Stats = PrimaryStats & SecondaryStats;
export type StatKey = keyof Stats;

export type StatUpgrades = {
  [K in PrimaryStatKey]: number;
}

export function createEmptyStatUpgrades(): StatUpgrades {
  return {
    charisma: 0,
    constitution: 0,
    dexterity: 0,
    evasion: 0,
    intelligence: 0,
    magicDefense: 0,
    magicMastery: 0,
    observation: 0,
    precision: 0,
    spirit: 0,
    stealth: 0,
    strength: 0,
  };
}

export type StatDisplayInfo = {
  [K in StatKey]: {
    fullName: string;
    shortName?: string;
    percentageBased?: boolean;
  }
};

export type StatBonus = {
  stat: StatKey;
  value: number;
};
