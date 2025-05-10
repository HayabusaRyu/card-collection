import {SpellTrapType, YugiohAttribute, YugiohRace} from '../utils/yugioh.utils';

export interface IBaseCard {
  id: number;
  name: string;
  description: string;
  image: string;
  figureCaption: string;
}

export interface IMonsterCard extends IBaseCard {
  cardType: 'monster';
  attribute: YugiohAttribute;
  level: number;
  race: YugiohRace;
  atk: number;
  def: number;
}

export interface ISpellCard extends IBaseCard {
  cardType: 'spell';
  spellType: SpellTrapType;
}

export interface ITrapCard extends IBaseCard {
  cardType: 'trap';
  trapType: SpellTrapType;
}

export type IYugiohCard = IMonsterCard | ISpellCard | ITrapCard;
