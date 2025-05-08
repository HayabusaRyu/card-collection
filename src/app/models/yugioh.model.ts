// src/app/models/yugioh.model.ts
import { IBaseCard, IMonsterCard, ISpellCard, ITrapCard, IYugiohCard } from '../interfaces/yugioh.interface';
import { YugiohAttribute, YugiohRace, SpellTrapType } from '../utils/yugioh.utils';

export class BaseCard implements IBaseCard {
  id: number | undefined = -1;
  name: string = '';
  description: string = '';
  image: string = '';
  figureCaption: string = '';
}

export class MonsterCard extends BaseCard implements IMonsterCard {
  cardType: 'monster' = 'monster';
  attribute: YugiohAttribute = YugiohAttribute.DARK;
  level: number = 1;
  race: YugiohRace = YugiohRace.WARRIOR;
  atk: number = 0;
  def: number = 0;
}

export class SpellCard extends BaseCard implements ISpellCard {
  cardType: 'spell' = 'spell';
  spellType: SpellTrapType = SpellTrapType.NORMAL;
}

export class TrapCard extends BaseCard implements ITrapCard {
  cardType: 'trap' = 'trap';
  trapType: SpellTrapType = SpellTrapType.NORMAL;
}

export type YugiohCard = MonsterCard | SpellCard | TrapCard;


export function createYugiohCard(cardData: IYugiohCard): YugiohCard {
  switch(cardData.cardType) {
    case 'monster':
      return Object.assign(new MonsterCard(), cardData);
    case 'spell':
      return Object.assign(new SpellCard(), cardData);
    case 'trap':
      return Object.assign(new TrapCard(), cardData);
    default:
      throw new Error('Invalid card type');
  }
}
