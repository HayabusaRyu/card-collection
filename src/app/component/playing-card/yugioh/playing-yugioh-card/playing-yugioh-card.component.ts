import {Component, computed, input} from '@angular/core';
import {
  AttributeProperties,
  CardType,
  CardTypeProperties,
  SpellTrapProperties,
  SpellTrapType,
  TrapProperties, TrapType, YugiohAttribute
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
  isNormalTrap = computed(() => this.card().trapType === TrapType.NORMAL)

  cardColor = computed(() => {
    return CardTypeProperties[this.card().cardType].color;
  });

  cardTypeIcon = computed(() => {
    // Handle Monster cards first
    if (this.isMonster()) {
      const attribute = this.card().attribute ?? YugiohAttribute.DARK;
      return AttributeProperties[attribute]?.imageUrl ?? '';
    }

    const cardTypeImage = CardTypeProperties[this.card().cardType]?.imageUrl;
    if (cardTypeImage) return cardTypeImage;

    if (this.isSpell()) {
      return SpellTrapProperties[this.card().spellTrapType]?.imageUrl ?? '';
    }
    if (this.isTrap()) {
      return TrapProperties[this.card().trapType]?.imageUrl ?? '';
    }

    return '';
  });

  spellTypeIcon = computed(() => {
    return SpellTrapProperties[this.card().spellTrapType]?.imageUrl ?? '';
  });

  trapTypeIcon = computed(() => {
    return TrapProperties[this.card().trapType]?.imageUrl ?? '';
  });

  cardTypeName = computed(() => {
    return CardTypeProperties[this.card().cardType]?.spellType ?? '';
  });

  getLevelStars(): number[] {
    return Array(this.card().level || 0).fill(0);
  }

}
