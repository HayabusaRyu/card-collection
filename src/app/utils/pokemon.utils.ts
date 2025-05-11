export enum PokemonType {
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


export interface IPokemonProperties {
  imageUrl: string;
  color: string;
}

export const PokemonTypeProperties: {[key: string] : IPokemonProperties} = {
  [PokemonType.GRASS]: {
    imageUrl: '/images/pokemon/energies/energy-grass.png',
    color: 'rgba(15,95,10,255)'
  },
  [PokemonType.ELECTRIC]: {
    imageUrl: '/images/pokemon/energies/energy-electric.png',
    color: 'rgb(251,225,49)'
  },
  [PokemonType.FIRE]: {
    imageUrl: '/images/pokemon/energies/energy-fire.png',
    color: 'rgb(170,44,12)'
  },
  [PokemonType.WATER]: {
    imageUrl: '/images/pokemon/energies/energy-water.png',
    color: 'rgba(84,182,237,255)'
  },
  [PokemonType.BUG]: {
    imageUrl: '/images/pokemon/energies/energy-bug.png',
    color: 'rgba(171,207,93,255)'
  },
  [PokemonType.FIGHTING]: {
    imageUrl: '/images/pokemon/energies/energy-fighting.png',
    color: 'rgba(212,122,61,255)'
  },
  [PokemonType.FLYING]: {
    imageUrl: '/images/pokemon/energies/energy-flying.png',
    color: 'rgba(162,178,182,255)'
  },
  [PokemonType.NORMAL]: {
    imageUrl: '/images/pokemon/energies/energy-normal.png',
    color: 'rgba(238,223,228,255)'
  },
  [PokemonType.POISON]: {
    imageUrl: '/images/pokemon/energies/energy-poison.png',
    color: 'rgba(105,47,108,255)'
  },
  [PokemonType.ROCK]: {
    imageUrl: '/images/pokemon/energies/energy-rock.png',
    color: 'rgba(247,197,116,255)'
  },
  [PokemonType.GROUND]: {
    imageUrl: '/images/pokemon/energies/energy-ground.png',
    color: 'rgb(129,85,46)'
  },
  [PokemonType.PSY]: {
    imageUrl: '/images/pokemon/energies/energy-psy.png',
    color: 'rgba(139,92,164,255)'
  },
  [PokemonType.GHOST]: {
    imageUrl: '/images/pokemon/energies/energy-ghost.png',
    color: 'rgba(107,46,115,255)'
  },
  [PokemonType.DARK]: {
    imageUrl: '/images/pokemon/energies/energy-dark.png',
    color: 'rgba(49,67,72,255)'
  },
  [PokemonType.ICE]: {
    imageUrl: '/images/pokemon/energies/energy-ice.png',
    color: 'rgba(169,217,242,255)'
  },
  [PokemonType.STEEL]: {
    imageUrl: '/images/pokemon/energies/energy-steel.png',
    color: 'rgba(106,126,133,255)'
  },
  [PokemonType.FAIRY]: {
    imageUrl: '/images/pokemon/energies/energy-fairy.png',
    color: 'rgba(216,68,126,255)'
  },
  [PokemonType.DRAGON]: {
    imageUrl: '/images/pokemon/energies/energy-dragon.png',
    color: 'rgba(223,162,44,255)'
  }


}
