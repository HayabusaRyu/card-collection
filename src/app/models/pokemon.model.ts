import {IPokemon} from '../interfaces/pokemon.interface';
import {PokemonType} from '../utils/pokemon.utils';

export class Pokemon implements IPokemon{


  id: number = -1;
  name: string = '';
  type: PokemonType = PokemonType.ELECTRIC;
  image: string = '';
  figureCaption: string = '';
  hp: number = 0;
  attacks: Attack[] = [];

  copy(): Pokemon {
    return Object.assign(new Pokemon(), this);
  }
}

interface Attack {
  name: string;
  type: string;
  power: number;
  description: string;
}


