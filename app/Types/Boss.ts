export interface Player{
    name:string,
    class:string,
    gender:string,
    rareitem:string;
    stats:{level:number;attack:number;health:number;speed:number};
}

export const BOSSES: Player[] = [
  {
    name: "Gideon, the Hollow Lord",
    class: "Corrupted Paladin",
    gender: "Male",
    rareitem: "Soul of the Abyss",
    stats: { level: 2, attack: 15, health: 80, speed: 45 }
  },
  {
    name: "Lady Elara, Void Sorceress",
    class: "Void Sorceress",
    gender: "Female",
    rareitem: "Moonlight Sigil",
    stats: { level: 4, attack: 25, health: 60, speed: 65 }
  },
  {
    name: "Ironjaw the Unbroken",
    class: "Colossus Golem",
    gender: "None",
    rareitem: "Adamantium Core",
    stats: { level: 6, attack: 35, health: 120, speed: 25 }
  },
  {
    name: "Sanguis, Lord of Blood",
    class: "Vampiric Noble",
    gender: "Male",
    rareitem: "Crimson Chalice",
    stats: { level: 8, attack: 45, health: 90, speed: 75 }
  },
  {
    name: "Aethelred, The Soul Devourer",
    class: "Eldritch God-King",
    gender: "Male",
    rareitem: "Heart of Creation",
    stats: { level: 10, attack: 60, health: 150, speed: 90 }
  }
];
export const Bossurls:string[]=[]