import {Component, computed, input} from '@angular/core';
import {CardType, YugiohCard} from '../../../../models/yugioh.model';
import {AttributeProperties, CardTypeProperties, SpellTrapProperties} from '../../../../utils/yugioh.utils';
import {TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-playing-yugioh-card',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './playing-yugioh-card.component.html',
  standalone: true,
  styleUrl: './playing-yugioh-card.component.scss'
})
export class PlayingYugiohCardComponent {

  card = input.required<YugiohCard>();

  isMonster = computed(() => this.card().cardType === CardType.MONSTER);
  isSpell = computed(() => this.card().cardType === CardType.SPELL);
  isTrap = computed(() => this.card().cardType === CardType.TRAP);

  cardColor = computed(() => {
    return CardTypeProperties[this.card().cardType].color;
  });

  cardTypeIcon = computed(() => {
    if (this.isMonster()) {
      return AttributeProperties[this.card().attribute!].imageUrl;
    }
    return SpellTrapProperties[this.card().spellTrapType!].imageUrl;
  });

  getLevelStars(): number[] {
    return Array(this.card().level || 0).fill(0);
  }

  protected readonly CardType = CardType;
}
