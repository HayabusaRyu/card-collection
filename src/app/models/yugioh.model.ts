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

export class YugiohCard {
  id: number = -1;
  name: string = '';
  cardType: CardType = CardType.MONSTER;
  imageUrl: string = '';
  description: string = '';

  // Monster-specific
  attribute?: Attribute;
  monsterType?: string;
  level?: number;
  atk?: number;
  def?: number;

  // Spell/Trap-specific
  spellTrapType?: SpellTrapType;
  effectText?: string;

  copy(): YugiohCard {
    return Object.assign(new YugiohCard(), this);
  }
}
