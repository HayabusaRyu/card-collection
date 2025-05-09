export enum PokemonType {
  PLANT = "plant",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water"
}


export interface IPokemonProperties {
  imageUrl: string;
  color: string;
}

export const PokemonTypeProperties: {[key: string] : IPokemonProperties} = {
  [PokemonType.PLANT]: {
    imageUrl: '/images/pokemon/energies/energy-plant.jpg',
    color: 'rgba(135,255,124)'
  },
  [PokemonType.ELECTRIC]: {
    imageUrl: '/images/pokemon/energies/energy-electric.jpg',
    color: 'rgba(255,255,5)'
  },
  [PokemonType.FIRE]: {
    imageUrl: '/images/pokemon/energies/energy-fire.jpg',
    color: 'rgba(255,104,104)'
  },
  [PokemonType.WATER]: {
    imageUrl: '/images/pokemon/energies/energy-water.jpg',
    color: 'rgba(47,137,205)'
  }

}
