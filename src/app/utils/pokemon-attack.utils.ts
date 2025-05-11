import {PokemonType} from './pokemon.utils';

export enum AttackType {
  GRASS = "grass",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
  BUG = 'bug',
  FIGHTING = 'fighting',
  FLYING = 'flying',
  NORMAL = 'normal',
  POISON = 'poison',
  ROCK = 'rock',
  GROUND = 'ground',
  PSY = 'psy',
  GHOST = 'ghost',
  DARK = 'dark',
  ICE = 'ice',
  STEEL = 'steel',
  FAIRY = 'fairy',
  DRAGON = 'dragon'
}


export interface IAttackProperties {
  imageUrl: string;
}

export const AttackTypeProperties: {[key: string] : IAttackProperties} = {
  [PokemonType.GRASS]: {
    imageUrl: '/images/pokemon/energies/energy-grass.png'
  },
  [PokemonType.ELECTRIC]: {
    imageUrl: '/images/pokemon/energies/energy-electric.png'
  },
  [PokemonType.FIRE]: {
    imageUrl: '/images/pokemon/energies/energy-fire.png'
  },
  [PokemonType.WATER]: {
    imageUrl: '/images/pokemon/energies/energy-water.png'
  },
  [PokemonType.BUG]: {
    imageUrl: '/images/pokemon/energies/energy-bug.png'
  },
  [PokemonType.FIGHTING]: {
    imageUrl: '/images/pokemon/energies/energy-fighting.png'
  },
  [PokemonType.FLYING]: {
    imageUrl: '/images/pokemon/energies/energy-flying.png'
  },
  [PokemonType.NORMAL]: {
    imageUrl: '/images/pokemon/energies/energy-normal.png'
  },
  [PokemonType.POISON]: {
    imageUrl: '/images/pokemon/energies/energy-poison.png'
  },
  [PokemonType.ROCK]: {
    imageUrl: '/images/pokemon/energies/energy-rock.png'
  },
  [PokemonType.GROUND]: {
    imageUrl: '/images/pokemon/energies/energy-ground.png'
  },
  [PokemonType.PSY]: {
    imageUrl: '/images/pokemon/energies/energy-psy.png'
  },
  [PokemonType.GHOST]: {
    imageUrl: '/images/pokemon/energies/energy-ghost.png'
  },
  [PokemonType.DARK]: {
    imageUrl: '/images/pokemon/energies/energy-dark.png'
  },
  [PokemonType.ICE]: {
    imageUrl: '/images/pokemon/energies/energy-ice.png'
  },
  [PokemonType.STEEL]: {
    imageUrl: '/images/pokemon/energies/energy-steel.png'
  },
  [PokemonType.FAIRY]: {
    imageUrl: '/images/pokemon/energies/energy-fairy.png'
  },
  [PokemonType.DRAGON]: {
    imageUrl: '/images/pokemon/energies/energy-dragon.png'
  }

}
