import {Component, computed, inject, model, signal} from '@angular/core';
import {Router} from '@angular/router';
import {PokemonService} from '../../../services/pokemon.service';
import {Pokemon} from '../../../models/pokemon.model';
import {SearchBarComponent} from '../../../component/search-bar/search-bar.component';
import {
  PlayingPokemonCardComponent
} from '../../../component/playing-card/pokemon/playing-pokemon-card/playing-pokemon-card.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-pokemon-list',
  imports: [
    SearchBarComponent,
    PlayingPokemonCardComponent,
    MatButton
  ],
  templateUrl: './pokemon-list.component.html',
  standalone: true,
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  private router = inject(Router);
  private pokemonService = inject(PokemonService);

  pokemons = signal<Pokemon[]>([]);
  search = model('');

  filteredPokemons = computed(() => {
    return this.pokemons().filter(pokemon => pokemon.name.includes(this.search()));
  })

  constructor() {
    this.pokemons.set(this.pokemonService.getAll());
  }

  addPokemon(){
    this.router.navigate(['pokemon/monster']);
  }

  openPokemon(pokemon : Pokemon) {
    this.router.navigate(['pokemon/monster', pokemon.id]);
  }

}
