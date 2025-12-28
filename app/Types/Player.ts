export interface Player{
    name:string,
    class:string,
    gender:string,
    level:number,
    health:number,
    attack:number,
    speed:number,
    rareitem:string;
}
export interface Stats{
    class:"Knight"|"Sorcerer"|"Handed"|"Thief";
    gender:"Male"|"Female";
    Level:number;
    health:number;
    attack:number;
    speed:number;
    rareitem:"Wepon"|"Book"|"Key"|"Attack Power"|"Health"|"Speed Attack";
}
