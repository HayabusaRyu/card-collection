import {CardType, SpellTrapType, TrapType, YugiohAttribute, YugiohRace} from '../utils/yugioh.utils';


export class YugiohCard {
  id: number = -1;
  name: string = '';
  cardType: CardType = CardType.MONSTER;
  imageUrl: string = '';
  description: string = '';

  // Monster-specific
  attribute: YugiohAttribute = YugiohAttribute.DARK;
  monsterType: YugiohRace = YugiohRace.SPELLCASTER;
  level: number  = 1;
  atk: number = 0;
  def: number = 0;

  // Spell/Trap-specific
  spellTrapType: SpellTrapType = SpellTrapType.NORMAL;
  trapType: TrapType= TrapType.NORMAL;
  effectText: string = '';

  copy(): YugiohCard {
    return Object.assign(new YugiohCard(), this);
  }
}
