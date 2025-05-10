import {YugiohAttribute, CardType, SpellTrapType, YugiohRace} from '../utils/yugioh.utils';


export class YugiohCard {
  id: number = -1;
  name: string = '';
  cardType: CardType = CardType.MONSTER;
  imageUrl: string = '';
  description: string = '';

  // Monster-specific
  attribute: YugiohAttribute = YugiohAttribute.DARK;
  monsterType: YugiohRace | null = null;
  level: number = 1;
  atk: number = 0;
  def: number = 0;

  // Spell/Trap-specific
  spellTrapType: SpellTrapType = SpellTrapType.NORMAL;
  effectText: string = '';

  copy(): YugiohCard {
    return Object.assign(new YugiohCard(), this);
  }
}
