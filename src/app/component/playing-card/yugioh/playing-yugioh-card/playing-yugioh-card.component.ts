import {Component, computed, input} from '@angular/core';
import {
  AttributeProperties,
  CardType,
  CardTypeProperties,
  SpellTrapProperties,
  SpellTrapType
} from '../../../../utils/yugioh.utils';
import {YugiohCard} from '../../../../models/yugioh.model';

@Component({
  selector: 'app-playing-yugioh-card',
  imports: [

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
  isNormalSpell = computed(() => this.card().spellTrapType === SpellTrapType.NORMAL)

  cardColor = computed(() => {
    return CardTypeProperties[this.card().cardType].color;
  });

  cardTypeIcon = computed(() => {
    if (this.isMonster()) {
      return AttributeProperties[this.card().attribute]?.imageUrl ?? '';
    }
    return CardTypeProperties[this.card().cardType]?.imageUrl ?? '';
  });

  spellType = computed(() => {
    return SpellTrapProperties[this.card().spellTrapType]?.imageUrl ?? '';
  });

  cardTypeName = computed(() => {
    return CardTypeProperties[this.card().cardType]?.spellType ?? '';
  });

  getLevelStars(): number[] {
    return Array(this.card().level || 0).fill(0);
  }

}
