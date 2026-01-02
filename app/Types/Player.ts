export interface Player{
    name:string,
    class:string,
    gender:string,
    rareitem:string;
    stats:{level:number;attack:number;health:number;speed:number};
}

//constant objects of each single stat

export const ClassStats = {
  Knight: {
    level: 5,
    attack: 70,
    health: 120,
    speed: 4,
  },
  Sorcerer: {
    level: 5,
    attack: 40,
    health: 200,
    speed: 8,
  },
  Handed: {
    level: 5,
    attack: 30,
    health: 300,
    speed: 3,
  },
  Thief: {
    level: 5,
    attack: 50,
    health: 100,
    speed: 10,
  },
} as const;
