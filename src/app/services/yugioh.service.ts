import {Injectable} from '@angular/core';
import {Attribute, CardType, SpellTrapType, YugiohCard} from '../models/yugioh.model';

@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  private cards: YugiohCard[] = [];
  private currentId = 1;

  constructor() {
    this.initializeSampleCards();
  }

  private initializeSampleCards() {
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
    darkMagician.imageUrl = '/images/yugioh/monsters/dark-magician.jpg';
    darkMagician.description = 'The ultimate wizard in terms of attack and defense.';

    // Sample Spell Card
    const darkHole = new YugiohCard();
    darkHole.id = this.currentId++;
    darkHole.name = 'Dark Hole';
    darkHole.cardType = CardType.SPELL;
    darkHole.spellTrapType = SpellTrapType.NORMAL;
    darkHole.effectText = 'Destroy all monsters on the field.';
    darkHole.imageUrl = '/images/yugioh/magic-trap/dark-hole.jpg';
    darkHole.description = 'A powerful destructive spell.';

    this.cards = [darkMagician, darkHole];
  }

  getAllCards(): YugiohCard[] {
    return this.cards.map(c => c.copy());
  }

}
