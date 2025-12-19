export type Status = {
  id: number;
  name: string;
  description: string;
};

export type StatusKey =
  'accuracy_penalty' |
  'armor_bonus' |
  'armor_penalty' |
  'bewitchment' |
  'bleeding' |
  'burn' |
  'damage_bonus' |
  'defense' |
  'evasion_bonus' |
  'evasion_penalty' |
  'exaltation' |
  'exposed' |
  'fast_poison' |
  'flaming_arrow' |
  'frost' |
  'immunity' |
  'impact' |
  'inspiration' |
  'magic_defense_bonus' |
  'magic_defense_penalty' |
  'mystic_subterfuge' |
  'necrosis' |
  'overcharge' |
  'poison' |
  'precision_bonus' |
  'regeneration' |
  'resistance_bonus' |
  'stealth';
