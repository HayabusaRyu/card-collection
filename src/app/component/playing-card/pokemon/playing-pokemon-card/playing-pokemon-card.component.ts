import {Component, computed, Input, input} from '@angular/core';
import {Pokemon} from '../../../../models/pokemon.model';
import {PokemonTypeProperties} from '../../../../utils/pokemon.utils';
import {AttackTypeProperties} from '../../../../utils/pokemon-attack.utils';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-playing-pokemon-card',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './playing-pokemon-card.component.html',
  standalone: true,
  styleUrl: './playing-pokemon-card.component.scss'
})
export class PlayingPokemonCardComponent {

  pokemon = input(new Pokemon());
  pokemonTypeIcon = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].imageUrl
  })

  getAttackTypeIcon(attackType: string): string {
    return AttackTypeProperties[attackType]?.imageUrl;
  }

  backgroundColor = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].color
  })

}
