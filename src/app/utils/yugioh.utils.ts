export enum CardType {
  MONSTER = 'monster',
  SPELL = 'spell',
  TRAP = 'trap'
}

export enum YugiohAttribute {
  DARK = 'dark',
  LIGHT = 'light',
  EARTH = 'earth',
  WATER = 'water',
  FIRE = 'fire',
  WIND = 'wind',
  DIVINE = 'divine'
}

export enum YugiohRace {
  SPELLCASTER = 'Spellcaster',
  DRAGON = 'Dragon'
}

export enum SpellTrapType {
  NORMAL = 'normal',
  CONTINUOUS = 'continuous',
  QUICK_PLAY = 'quick-play',
  EQUIP = 'equip',
  FIELD = 'field',
}

export enum TrapType {
  NORMAL = 'normal',
  CONTINUOUS = 'continuous',
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

export interface TrapProperty {
  imageUrl?: string;
}

export const CardTypeProperties: { [key in CardType]: CardTypeProperty } = {
  [CardType.MONSTER]: { color: '#c4aa54' },
  [CardType.SPELL]: { color: '#1D9BF0', spellType: 'SPELL CARD', imageUrl: '/images/yugioh/magic-trap/magic-type/SPELL.png' },
  [CardType.TRAP]: { color: '#FF69B4', spellType: 'TRAP CARD', imageUrl: '/images/yugioh/magic-trap/trap-type/TRAP.png' }
};

export const AttributeProperties: { [key in YugiohAttribute]: AttributeProperty } = {
  [YugiohAttribute.DARK]: { imageUrl: '/images/yugioh/monsters/attributes/dark-attribute.png' },
  [YugiohAttribute.LIGHT]: { imageUrl: '/images/yugioh/monsters/attributes/light-attribute.png'},
  [YugiohAttribute.EARTH]: { imageUrl: '/images/yugioh/monsters/attributes/earth-attribute.png'},
  [YugiohAttribute.WATER]: { imageUrl: '/images/yugioh/monsters/attributes/water-attribute.png'},
  [YugiohAttribute.FIRE]: { imageUrl: '/images/yugioh/monsters/attributes/fire-attribute.png' },
  [YugiohAttribute.WIND]: { imageUrl: '/images/yugioh/monsters/attributes/wind-attribute.png'},
  [YugiohAttribute.DIVINE]: { imageUrl: '/images/yugioh/monsters/attributes/divine-attribute.png'}
};

export const SpellTrapProperties: { [key in SpellTrapType]: SpellTrapProperty } = {
  [SpellTrapType.NORMAL]: {},
  [SpellTrapType.CONTINUOUS]: { imageUrl: '/images/yugioh/magic-trap/spell-type/continuous.png' },
  [SpellTrapType.QUICK_PLAY]: { imageUrl: '/images/yugioh/magic-trap/magic-type/quick-play.png' },
  [SpellTrapType.EQUIP]: { imageUrl: '/images/yugioh/magic-trap/magic-type/equip.png' },
  [SpellTrapType.FIELD]: { imageUrl: '/images/yugioh/magic-trap/magic-type/field.png' },

};

export const TrapProperties: { [key in TrapType]: TrapProperty} = {
  [TrapType.NORMAL]: {},
  [TrapType.CONTINUOUS]: { imageUrl: '/images/yugioh/magic-trap/spell-type/continuous.png' },
  [TrapType.COUNTER]: { imageUrl: '/images/yugioh/magic-trap/trap-type/counter.png' }
}
