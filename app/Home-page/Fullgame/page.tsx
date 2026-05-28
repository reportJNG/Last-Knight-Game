import Main from "../../Components/Game/Mainhandler";
export default function Page() {
  interface Mainhandlerprops {
    //indicator
    level: number;
    //pause
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    sound: boolean;
    setSound: React.Dispatch<React.SetStateAction<boolean>>;
    leave: () => void;
    //fight stats boss and player
    P: Player;
    //controll the xp leveling up each level u increase the level max is 10 same value will goes for the stats
    xp: number;
    //indicator of fight is ended with 0 or 1  0===win || 1===lose
    setCombatStat: React.Dispatch<React.SetStateAction<number>>; // we will always push here 2 for indicator of the fight isnt started aleardy
    stepshandler: () => void;
  }
  return <Main level={}/>;
}
