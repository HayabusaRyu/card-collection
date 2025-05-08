export enum YugiohAttribute {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
  FIRE = 'FIRE',
  WATER = 'WATER',
  EARTH = 'EARTH',
  WIND = 'WIND',
  DIVINE = 'DIVINE'
}

export enum YugiohRace {
  WARRIOR = 'Warrior',
  SPELLCASTER = 'Spellcaster',
  DRAGON = 'Dragon',
  ZOMBIE = 'Zombie',
  FIEND = 'Fiend',
  // Add other races as needed
}

export enum SpellTrapType {
  NORMAL = 'Normal',
  CONTINUOUS = 'Continuous',
  QUICK_PLAY = 'Quick-Play',
  FIELD = 'Field',
  EQUIP = 'Equip',
  COUNTER = 'Counter'
}

export interface IYugiohAttributeProperties {
  imageUrl: string;
}

export const YugiohAttributeProperties: {[key: string] : IYugiohAttributeProperties} = {
  [YugiohAttribute.DARK]: {
    imageUrl: '/images/energy-plant.jpg'
  },
  [YugiohAttribute.LIGHT]: {
    imageUrl: '/images/energy-electric.jpg'
  },
  [YugiohAttribute.FIRE]: {
    imageUrl: '/images/energy-fire.jpg'
  },
  [YugiohAttribute.WATER]: {
    imageUrl: '/images/energy-water.jpg'
  },
  [YugiohAttribute.EARTH]: {
    imageUrl: '/images/energy-water.jpg'
  },
  [YugiohAttribute.WIND]: {
    imageUrl: '/images/energy-water.jpg'
  },
  [YugiohAttribute.DIVINE]: {
    imageUrl: '/images/energy-water.jpg'
  }

}
