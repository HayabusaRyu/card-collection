import {Attribute, CardType, SpellTrapType} from '../models/yugioh.model';


export interface CardTypeProperty {
  color: string;
}

export interface AttributeProperty {
  imageUrl: string;
  color: string;
}

export interface SpellTrapProperty {
  imageUrl: string;
}

export const CardTypeProperties: { [key in CardType]: CardTypeProperty } = {
  [CardType.MONSTER]: { color: '#ad9647' },
  [CardType.SPELL]: { color: '#1D9BF0' },
  [CardType.TRAP]: { color: '#FF69B4' }
};

export const AttributeProperties: { [key in Attribute]: AttributeProperty } = {
  [Attribute.DARK]: { imageUrl: '/images/yugioh/attributes/dark-attribute.png', color: '#2C2C2C' },
  [Attribute.LIGHT]: { imageUrl: '/images/yugioh/attributes/light.png', color: '#F5F5F5' },
  [Attribute.EARTH]: { imageUrl: '/images/yugioh/attributes/earth.png', color: '#8B4513' },
  [Attribute.WATER]: { imageUrl: '/images/yugioh/attributes/water.png', color: '#1E90FF' },
  [Attribute.FIRE]: { imageUrl: '/images/yugioh/attributes/fire.png', color: '#FF4500' },
  [Attribute.WIND]: { imageUrl: '/images/yugioh/attributes/wind.png', color: '#98FB98' },
  [Attribute.DIVINE]: { imageUrl: '/images/yugioh/attributes/divine.png', color: '#FFD700' }
};

export const SpellTrapProperties: { [key in SpellTrapType]: SpellTrapProperty } = {
  [SpellTrapType.NORMAL]: { imageUrl: '/images/yugioh/magic-trap/normal.png' },
  [SpellTrapType.CONTINUOUS]: { imageUrl: '/images/yugioh/magic-trap/continuous.png' },
  [SpellTrapType.QUICK_PLAY]: { imageUrl: '/images/yugioh/magic-trap/quick-play.png' },
  [SpellTrapType.EQUIP]: { imageUrl: '/images/yugioh/magic-trap/equip.png' },
  [SpellTrapType.FIELD]: { imageUrl: '/images/yugioh/magic-trap/field.png' },
  [SpellTrapType.COUNTER]: { imageUrl: '/images/yugioh/magic-trap/counter.png' }
};
