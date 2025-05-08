import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../../../services/pokemon.service';
import {Pokemon} from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.component.html',
  standalone: true,
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {


  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  pokemons = this.pokemonService.pokemons;

  viewDetails(pokemon: Pokemon) {
    this.router.navigate([`/pokemon/monster/${pokemon.id}`]);
  }
}
