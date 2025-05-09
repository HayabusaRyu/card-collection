import {Component, computed, Input, input} from '@angular/core';
import {Pokemon} from '../../../../models/pokemon.model';
import {PokemonTypeProperties} from '../../../../utils/pokemon.utils';

@Component({
  selector: 'app-playing-pokemon-card',
  imports: [],
  templateUrl: './playing-pokemon-card.component.html',
  standalone: true,
  styleUrl: './playing-pokemon-card.component.scss'
})
export class PlayingPokemonCardComponent {

  pokemon = input(new Pokemon());
  pokemonTypeIcon = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].imageUrl
  })
  backgroundColor = computed(() => {
    return PokemonTypeProperties[this.pokemon().type].color
  })

}
