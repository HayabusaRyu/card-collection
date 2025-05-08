import {Injectable, signal} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons = signal<Pokemon[]>([]);

  getById(id: number) {
    return this.pokemons().find(p => p.id === id);
  }

  update(pokemon: Partial<Pokemon>) {
    // Update logic
  }

  delete(id: number) {
    this.pokemons.update(list => list.filter(p => p.id !== id));
  }
}
