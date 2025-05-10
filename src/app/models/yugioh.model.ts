import {Attribute, CardType, SpellTrapType} from '../utils/yugioh.utils';


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
