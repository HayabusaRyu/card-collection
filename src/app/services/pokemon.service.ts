import {Injectable} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {PokemonType} from '../utils/pokemon.utils';
import {AttackType} from '../utils/pokemon-attack.utils';

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
        type: AttackType.ELECTRIC,
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
        type: AttackType.WATER,
        power: 40,
        description: 'Fait un jet d O'
      }
    ]
    this.pokemons.push(pokemon2);

    const pokemon3 = new Pokemon();
    pokemon3.id = this.currentIndex++;
    pokemon3.image = "/images/pokemon/monsters/bulb.jpg";
    pokemon3.type = PokemonType.GRASS
    pokemon3.name = "Bulb";
    pokemon3.hp  = 40;
    pokemon3.figureCaption = "N°001 Bulb";
    pokemon3.attacks = [
      {
        name: "Tranch'Herb",
        type: AttackType.GRASS,
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
        type: AttackType.FIRE,
        power: 40,
        description: 'Attak avec du feu'
      }
    ]
    this.pokemons.push(pokemon4);

    const pokemon5 = new Pokemon();
    pokemon5.id = this.currentIndex++;
    pokemon5.image = "/images/pokemon/monsters/cater.jpg";
    pokemon5.type = PokemonType.BUG
    pokemon5.name = "Chenipan";
    pokemon5.hp  = 40;
    pokemon5.figureCaption = "N°007 Chenipan";
    pokemon5.attacks = [
      {
        name: "charge",
        type: AttackType.NORMAL,
        power: 10,
        description: 'Charge'
      }
    ]
    this.pokemons.push(pokemon5);

    const pokemon6 = new Pokemon();
    pokemon6.id = this.currentIndex++;
    pokemon6.image = "/images/pokemon/monsters/machoc.jpg";
    pokemon6.type = PokemonType.FIGHTING
    pokemon6.name = "Machoc";
    pokemon6.hp  = 40;
    pokemon6.figureCaption = "N°007 Machoc";
    pokemon6.attacks = [
      {
        name: "karaté chop",
        type: AttackType.FIGHTING,
        power: 15,
        description: 'Karaté'
      }
    ]
    this.pokemons.push(pokemon6);

    const pokemon7 = new Pokemon();
    pokemon7.id = this.currentIndex++;
    pokemon7.image = "/images/pokemon/monsters/roucool.jpg";
    pokemon7.type = PokemonType.FLYING
    pokemon7.name = "Roucool";
    pokemon7.hp  = 40;
    pokemon7.figureCaption = "N°016 Roucool";
    pokemon7.attacks = [
      {
        name: "Cru'aile",
        type: AttackType.FLYING,
        power: 15,
        description: 'attack avec les 2 ailes'
      }
    ]
    this.pokemons.push(pokemon7);

    const pokemon8 = new Pokemon();
    pokemon8.id = this.currentIndex++;
    pokemon8.image = "/images/pokemon/monsters/artico.jpg";
    pokemon8.type = PokemonType.ICE
    pokemon8.name = "Articodin";
    pokemon8.hp  = 120;
    pokemon8.figureCaption = "N°144 Articodin";
    pokemon8.attacks = [
      {
        name: "Laser Glace",
        type: AttackType.ICE,
        power: 90,
        description: 'Rayon de givre'
      }
    ]
    this.pokemons.push(pokemon8);


    const pokemon9 = new Pokemon();
    pokemon9.id = this.currentIndex++;
    pokemon9.image = "/images/pokemon/monsters/dracolosse.jpg";
    pokemon9.type = PokemonType.DRAGON
    pokemon9.name = "Dracolosse";
    pokemon9.hp  = 120;
    pokemon9.figureCaption = "N°149 Dracolosse";
    pokemon9.attacks = [
      {
        name: "Ultra Laser",
        type: AttackType.NORMAL,
        power: 150,
        description: 'Rayon du dragon'
      },
      {
        name: "Draco-Rage",
        type: AttackType.DRAGON,
        power: 60,
        description: 'Rage du dragon'
      }
    ]
    this.pokemons.push(pokemon9);
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
