import {Injectable} from '@angular/core';
import {YugiohCard} from '../models/yugioh.model';
import {Attribute, CardType, SpellTrapType} from '../utils/yugioh.utils';


@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  private cards: YugiohCard[] = [];
  private currentId : number = 1;

  constructor() {
    this.load();
  }

  private save(){
    localStorage.setItem('cards', JSON.stringify(this.cards))
  }

  private load(){
    const yugiohData = localStorage.getItem('cards');

    if(yugiohData){
      this.cards = JSON.parse(yugiohData).map((cardJSON: any) => Object.assign(new YugiohCard(), cardJSON));
      this.currentId = Math.max(...this.cards.map(card => card.id));
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    // Sample Monster Card
    const darkMagician = new YugiohCard();
    darkMagician.id = this.currentId++;
    darkMagician.name = 'Dark Magician';
    darkMagician.cardType = CardType.MONSTER;
    darkMagician.attribute = Attribute.DARK;
    darkMagician.monsterType = 'Spellcaster';
    darkMagician.level = 7;
    darkMagician.atk = 2500;
    darkMagician.def = 2100;
    darkMagician.imageUrl = '/images/yugioh/monsters/spellcasters/dark-magician.jpg';
    darkMagician.description = 'The ultimate wizard in terms of attack and defense.';

    // Sample Spell Card
    const darkHole = new YugiohCard();
    darkHole.id = this.currentId++;
    darkHole.name = 'Dark Hole';
    darkHole.cardType = CardType.SPELL;
    darkHole.spellTrapType = SpellTrapType.NORMAL;
    darkHole.effectText = 'Destroy all monsters on the field.';
    darkHole.imageUrl = '/images/yugioh/magic-trap/dark-hole.jpg';

    const mirrorForce = new YugiohCard();
    mirrorForce.id = this.currentId++;
    mirrorForce.name = 'Mirror Force';
    mirrorForce.cardType = CardType.TRAP;
    mirrorForce.spellTrapType = SpellTrapType.NORMAL;
    mirrorForce.effectText = 'When an opponent s monster declares an attack: Destroy all your opponent s Attack position monsters.';
    mirrorForce.imageUrl = '/images/yugioh/magic-trap/mirror-force.png';

    this.cards.push(darkMagician, darkHole, mirrorForce);
  }

  getAllCards(): YugiohCard[] {
    return this.cards.map(c => c.copy());
  }

  get(id : number): YugiohCard | undefined{
    const card = this.cards.find(card => card.id === id);
    return card ? card.copy() : undefined;
  }

  add(card : YugiohCard){
    const cardCopy = card.copy();
    this.currentId++;
    cardCopy.id = this.currentId;
    this.cards.push(cardCopy.copy());

    this.save();

    return cardCopy;
  }

  update(card : YugiohCard): YugiohCard{
    const cardCopy = card.copy();
    const cardIndex = this.cards.findIndex(originalCard => originalCard.id === card.id);
    if(cardIndex != -1){
      this.cards[cardIndex] = cardCopy.copy();
      this.save();
    }

    return cardCopy;
  }

  delete(id : number){
    const cardIndex = this.cards.findIndex(originalCard => originalCard.id === id);
    if(cardIndex != -1){
      this.cards.splice(cardIndex, 1);
      this.save();
    }
  }

}
