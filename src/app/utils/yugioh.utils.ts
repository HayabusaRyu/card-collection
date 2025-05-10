export enum CardType {
  MONSTER = 'monster',
  SPELL = 'spell',
  TRAP = 'trap'
}

export enum Attribute {
  DARK = 'dark',
  LIGHT = 'light',
  EARTH = 'earth',
  WATER = 'water',
  FIRE = 'fire',
  WIND = 'wind',
  DIVINE = 'divine'
}

export enum SpellTrapType {
  NORMAL = 'normal',
  CONTINUOUS = 'continuous',
  QUICK_PLAY = 'quick-play',
  EQUIP = 'equip',
  FIELD = 'field',
  COUNTER = 'counter'
}

export interface CardTypeProperty {
  color: string;
  spellType?: string;
  imageUrl?: string;
}

export interface AttributeProperty {
  imageUrl: string;
}

export interface SpellTrapProperty {
  imageUrl?: string;
}

export const CardTypeProperties: { [key in CardType]: CardTypeProperty } = {
  [CardType.MONSTER]: { color: '#c4aa54' },
  [CardType.SPELL]: { color: '#1D9BF0', spellType: 'SPELL CARD', imageUrl: '/images/yugioh/magic-trap/magic-type/SPELL.png' },
  [CardType.TRAP]: { color: '#FF69B4', spellType: 'TRAP CARD', imageUrl: '/images/yugioh/magic-trap/trap-type/TRAP.png' }
};

export const AttributeProperties: { [key in Attribute]: AttributeProperty } = {
  [Attribute.DARK]: { imageUrl: '/images/yugioh/monsters/attributes/dark-attribute.png' },
  [Attribute.LIGHT]: { imageUrl: '/images/yugioh/attributes/light.png'},
  [Attribute.EARTH]: { imageUrl: '/images/yugioh/attributes/earth.png'},
  [Attribute.WATER]: { imageUrl: '/images/yugioh/attributes/water.png'},
  [Attribute.FIRE]: { imageUrl: '/images/yugioh/attributes/fire.png' },
  [Attribute.WIND]: { imageUrl: '/images/yugioh/attributes/wind.png'},
  [Attribute.DIVINE]: { imageUrl: '/images/yugioh/attributes/divine.png'}
};

export const SpellTrapProperties: { [key in SpellTrapType]: SpellTrapProperty } = {
  [SpellTrapType.NORMAL]: {},
  [SpellTrapType.CONTINUOUS]: { imageUrl: '/images/yugioh/magic-trap/continuous.png' },
  [SpellTrapType.QUICK_PLAY]: { imageUrl: '/images/yugioh/magic-trap/quick-play.png' },
  [SpellTrapType.EQUIP]: { imageUrl: '/images/yugioh/magic-trap/equip.png' },
  [SpellTrapType.FIELD]: { imageUrl: '/images/yugioh/magic-trap/field.png' },
  [SpellTrapType.COUNTER]: { imageUrl: '/images/yugioh/magic-trap/counter.png' }
};
