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
    imageUrl: '/images/energy-plant.jpg',
    color: 'rgba(135,255,124)'
  },
  [PokemonType.ELECTRIC]: {
    imageUrl: '/images/energy-electric.jpg',
    color: 'rgba(255,255,5)'
  },
  [PokemonType.FIRE]: {
    imageUrl: '/images/energy-fire.jpg',
    color: 'rgba(255,104,104)'
  },
  [PokemonType.WATER]: {
    imageUrl: '/images/energy-water.jpg',
    color: 'rgba(47,137,205)'
  }

}
