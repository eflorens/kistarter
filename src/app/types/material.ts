export type Material = {
  id: number;
  name: string;
}

export type CraftingRequirement = {
  material: MaterialKey;
  value: number;
}

export type MaterialKey =
  'amber' |
  'amethyst' |
  'black_powder' |
  'blood' |
  'blue_fiber' |
  'copper' |
  'diamond' |
  'ebony' |
  'emerald' |
  'fairy_wing' |
  'feather' |
  'golden_dust' |
  'ink' |
  'iron' |
  'ivy' |
  'leaf' |
  'leather' |
  'mithril' |
  'purple_fiber' |
  'rock' |
  'ruby' |
  'sapphire' |
  'scales' |
  'sewing_thread' |
  'sinew' |
  'teeth' |
  'topaz' |
  'wood' |
  'yew';
