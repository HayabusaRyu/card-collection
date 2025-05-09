import {Injectable} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {PokemonType} from '../utils/pokemon.utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];
  currentIndex : number = 1;

  constructor() {
    this.load();
  }

  private save(){
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons))
  }

  private load(){
    const pokemonData = localStorage.getItem('pokemons');

    if(pokemonData){
      this.pokemons = JSON.parse(pokemonData).map((monsterJSON: any) => Object.assign(new Pokemon(), monsterJSON));
      this.currentIndex = Math.max(...this.pokemons.map(pokemon => pokemon.id))
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    this.pokemons = [];

    const pokemon1 = new Pokemon();
    pokemon1.id = this.currentIndex++;
    pokemon1.image = "/images/pokemon/monsters/pika.jpg";
    pokemon1.name = "Pik";
    pokemon1.hp  = 12;
    pokemon1.figureCaption = "N°015 Pik";
    pokemon1.attacks = [
      {
        name: "Eclair",
        type: 'electric',
        power: 40,
        description: 'Fait une attack éclair'
      }
    ]
    this.pokemons.push(pokemon1);

    const pokemon2 = new Pokemon();
    pokemon2.id = this.currentIndex++;
    pokemon2.image = "/images/pokemon/monsters/cara.jpg";
    pokemon2.type = PokemonType.WATER
    pokemon2.name = "Car";
    pokemon2.hp  = 60;
    pokemon2.figureCaption = "N°004 Car";
    pokemon2.attacks = [
      {
        name: "Pistolet à O",
        type: 'eau',
        power: 40,
        description: 'Fait un jet d O'
      }
    ]
    this.pokemons.push(pokemon2);

    const pokemon3 = new Pokemon();
    pokemon3.id = this.currentIndex++;
    pokemon3.image = "/images/pokemon/monsters/bulb.jpg";
    pokemon3.type = PokemonType.PLANT
    pokemon3.name = "Bulb";
    pokemon3.hp  = 40;
    pokemon3.figureCaption = "N°001 Bulb";
    pokemon3.attacks = [
      {
        name: "Tranch'Herb",
        type: 'plante',
        power: 40,
        description: 'Attak avec des feuilles'
      }
    ]
    this.pokemons.push(pokemon3);

    const pokemon4 = new Pokemon();
    pokemon4.id = this.currentIndex++;
    pokemon4.image = "/images/pokemon/monsters/sala.jpg";
    pokemon4.type = PokemonType.FIRE
    pokemon4.name = "Sala";
    pokemon4.hp  = 40;
    pokemon4.figureCaption = "N°007 Sala";
    pokemon4.attacks = [
      {
        name: "flameche",
        type: 'feu',
        power: 40,
        description: 'Attak avec du feu'
      }
    ]
    this.pokemons.push(pokemon4);
  }

  getAll() : Pokemon[] {
    return this.pokemons.map(pokemon => pokemon.copy())
  }

  get(id : number): Pokemon | undefined {
    const pokemon = this.pokemons.find(monster => monster.id === id);
    return pokemon ? pokemon.copy() : undefined;
  }

  add(pokemon : Pokemon): Pokemon {
    const pokemonCopy = pokemon.copy();
    this.currentIndex++;
    pokemonCopy.id = this.currentIndex;
    this.pokemons.push(pokemonCopy.copy());

    this.save();

    return pokemonCopy;
  }

  update(pokemon: Pokemon): Pokemon {
    const pokemonCopy = pokemon.copy();
    const pokemonIndex = this.pokemons.findIndex(originalPokemon => originalPokemon.id === pokemon.id);
    if(pokemonIndex != -1){
      this.pokemons[pokemonIndex] = pokemonCopy.copy();
      this.save();
    }

    return pokemonCopy;
  }


  delete(id :number){
    const pokemonIndex = this.pokemons.findIndex(originalPokemon => originalPokemon.id === id);
    if(pokemonIndex != -1){
      this.pokemons.splice(pokemonIndex, 1);
      this.save();
    }
  }
}
