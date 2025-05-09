export enum AttackType {
  PLANT = "plant",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water"
}


export interface IAttackProperties {
  imageUrl: string;
}

export const AttackTypeProperties: {[key: string] : IAttackProperties} = {
  [AttackType.PLANT]: {
    imageUrl: '/images/pokemon/energies/energy-plant.jpg'
  },
  [AttackType.ELECTRIC]: {
    imageUrl: '/images/pokemon/energies/energy-electric.jpg'
  },
  [AttackType.FIRE]: {
    imageUrl: '/images/pokemon/energies/energy-fire.jpg'
  },
  [AttackType.WATER]: {
    imageUrl: '/images/pokemon/energies/energy-water.jpg'
  }

}
