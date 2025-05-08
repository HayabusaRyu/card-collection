import {PokemonType} from '../utils/pokemon.utils';

export interface IPokemon {
  id?: number;

  name: string;
  type: PokemonType;
  image: string;
  figureCaption: string;
  hp: number;
  attacks: Attack[];
}

interface Attack {
  name: string;
  type: string;
  power: number;
  description: string;
}
