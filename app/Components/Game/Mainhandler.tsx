import { BOSSES } from '@/app/Types/Boss';
import styles from './Mainhandler.module.css';
import Title from '../Title';
import Pause from '../Pause';
import {useState } from 'react';
import Playerstats from '../Playerstats';
import Actions from '../Actions';
import { Player } from '@/app/Types/Player';
import { Bossurls } from '@/app/Types/Boss';
import Backpack from '../Backpack';
import Console from '../Console';

interface  Mainhandlerprops{
//indicator
level:number;
//pause
volume: number;
setVolume: React.Dispatch<React.SetStateAction<number>>;
sound: boolean;
setSound: React.Dispatch<React.SetStateAction<boolean>>;
leave: () => void;
//fight stats boss and player
P:Player
//controll the xp leveling up each level u increase the level max is 10 same value will goes for the stats
xp:number
//indicator of fight is ended with 0 or 1  0===win || 1===lose
setCombatStat:React.Dispatch<React.SetStateAction<number>>; // we will always push here 2 for indicator of the fight isnt started aleardy
stepshandler:()=>void;
}



export default function Mainhandler({level,volume, setVolume, sound, setSound, leave,P,xp,setCombatStat,stepshandler }:Mainhandlerprops){
    // Put player and boss in changable value
    const updatedplayerxp = {...P,stats:{...P.stats,
    level:P.stats.level+xp,attack:P.stats.attack+xp,speed:P.stats.speed+xp}}
    const [Player,setPlayer]=useState<Player>(updatedplayerxp);
    const [Boss,setBoss]=useState<Player>(BOSSES[level]);



    //title variables
    const [fightindicator,setFightinficator]=useState<boolean>(false);
    const [testwinner,setTesetwinner]=useState<string>('');
    
    
    
    
    //actions logic + variables
    const combatText = {
    turn: {
    Player: "Your turn.",
    Boss: "The enemy moves."
    },
    player: {
    attack: "You strike.",
    dodge: "You evade the attack.",
    parry: "Perfect deflection.",
    dogefails:"You falter. The boss's strike lands.",
    parryfails:"Your timing fails. You are struck.",
            },
    enemy: {
    attack: "The enemy strikes.",
    dodge: "The enemy evades.",
    parry: "Your attack is deflected.",
    dogefails:"The boss falters. Your strike connects.",
    parryfails:"The boss fails to parry. Your attack hits."
            }
    };
    const updatedconsoletexting=(tester:boolean,action:1|2|3|4|5)=>{ //here is the updatedconsoletexting()
        let tt='';
        if(tester){
            consoleupdater(combatText.turn.Player);
            switch(action){
            case 1:tt=combatText.player.parry;
            break;
            case 2:tt=combatText.player.dodge;
            break;
            case 3:tt=combatText.player.parry;
            break;
            case 4:tt=combatText.player.dogefails;
            break;
            case 5:tt=combatText.player.parryfails;
            }
        }
        else{
            consoleupdater(combatText.turn.Boss);
            switch(action){
            case 1:tt=combatText.enemy.parry;
            break;
            case 2:tt=combatText.enemy.dodge;
            break;
            case 3:tt=combatText.enemy.parry;
            break;
            case 4:tt=combatText.player.dogefails;
            break;
            case 5:tt=combatText.player.parryfails;
            }
        }
        const time= setTimeout(() => {
        consoleupdater(tt);
        }, 1500);
        return ()=>clearTimeout(time);
    }
    
    const [turn,setTurn]=useState<boolean>(true); //always player hit first

    //evrey actions might prevent a win or lose 
    const gamestatehandler=(text:string,state:string,end:boolean)=>{
        setTesetwinner(state);
        setFightinficator(end);
        consoleupdater(text);
        const time=setTimeout(() => {
                if(end===true){
                    if(state==='win'){
                        setCombatStat(0);
                        stepshandler()
                    }
                    else{
                        setCombatStat(1);
                        stepshandler()
                    }
                }
                consoleupdater(''); 
        }, 8000);
        return ()=>clearTimeout(time); //here means fight is ended  so will only update the combat stat so we know that the fight is ended
    }

    const attack = ()=>{ //here i need handle health not go under 0 + if he test if he is 0 then boss died and same for player
    if(turn){
        
        setBoss(prev=>{
        const newHealth=Math.max(0,prev.stats.health-Player.stats.attack);

        if(newHealth===0){//here player might win
        gamestatehandler(`${P.name} Win`,'win',true);}
        else{
        updatedconsoletexting(turn,1);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    }
    else{
    setPlayer(prev=>{
        const newHealth=Math.max(0,prev.stats.health-Boss.stats.attack);

        if(newHealth===0){      //here boss might win
        gamestatehandler(`${P.name} Died`,'lose',true);}
        else{
        updatedconsoletexting(turn,1);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    }
    }



    const doge=()=>{ //doge logic is 60% ={if(yes){+30hp}if(no){-10 hp}} /// here we test health not go upper then max health and not below 0
    const chance = Math.random()<0.6;        
    if(turn){
    if(chance){ //success doge player
      updatedconsoletexting(turn,2);  
      setPlayer(prev=>{
        const newHealth=Math.min(P.stats.health,prev.stats.health+30);
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    }

    else{   //failed doge player
        
        setPlayer(prev=>{
        const newHealth=Math.max(0,prev.stats.health-10);

        if(newHealth===0){      //here boss might win
        gamestatehandler(`${P.name} Died`,'lose',true);}
        else{
        updatedconsoletexting(turn,4);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});

    }
    }
    else{
    if(chance){ //seccess doge boss
        updatedconsoletexting(turn,2);
        setBoss(prev=>{
        const newHealth=Math.min(BOSSES[level].stats.health,prev.stats.health+30);
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    }
    else{   //failed doge boss

           setBoss(prev=>{
        const newHealth=Math.max(0,prev.stats.health-10);

        if(newHealth===0){      //here player might win
        gamestatehandler(`${P.name} Win`,'win',true);}
        else{
        updatedconsoletexting(turn,4);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});

    }
    }
    }



    const parry=()=>{ //parry logic :{chance 50% always if (yes){attack+=20} else{health-=40}} //here only try to test if health doesnt go below 0
    const chance = Math.random()<0.5;
    if(turn){
        //here start the chance calc   
        if(chance){ //parry worked then here player hit strike+20
        setBoss(prev=>{
        const newHealth=Math.max(0,prev.stats.health-(Player.stats.attack+20));

        if(newHealth===0){          //here player might win
        gamestatehandler(`${P.name} Win`,'win',true);}
        updatedconsoletexting(turn,3);
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});}

        else{ //parry failed then boss hit player 40
        setPlayer(prev=>{
        const newHealth=Math.max(0,prev.stats.health-40);

        if(newHealth===0){      //here boss might win
        gamestatehandler(`${P.name} Died`,'lose',true);}
        else{
        updatedconsoletexting(turn,5);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    
        }
    }
    else{
    if(chance){ //boss was able to parry attack +20
    
          setPlayer(prev=>{
        const newHealth=Math.max(0,prev.stats.health-(Boss.stats.attack+20));

        if(newHealth===0){      //here boss might win
        gamestatehandler(`${P.name} Died`,'lose',true);}
        else{
        updatedconsoletexting(turn,3);
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});

    }
    else{//boss failed to parry -40 health

    setBoss(prev=>{
        const newHealth=Math.max(0,prev.stats.health-40);

        if(newHealth===0){          //here player might win
        gamestatehandler(`${P.name} Win`,'win',true);}
        else{
        updatedconsoletexting(turn,5);   
        }
        return {
            ...prev,stats:{
               ...prev.stats,health:newHealth 
            }
        }});
    }}};


    //backpacklogic + variables
    const[quant,setQuant]=useState<number>(2); //each fight will have 2 potion to heal each potion add 50 health bonus
    const heal=()=>{
        if(Player.stats.health===P.stats.health)return
        else{
            setPlayer(prev=>({
                ...prev,stats:{
                    ...prev.stats,
                    health:Math.min(P.stats.health,prev.stats.health+50)
                }
            }))
        }
    }
    //console text logic +vairables;
    const [consoletxt,setConsoletxt]=useState<string>('');
    const consoleupdater=(text:string)=>{
        const time = setTimeout(() => {
            setConsoletxt(text);
        }, 3000);
        return ()=>clearTimeout(time);
    }
    
    return(
        <div className={styles.container}>

            <div className={styles.header}>
                <div className={styles.midscreentop}><Title text={Boss.name} winornot={testwinner} endedfight={fightindicator}/></div>
                <div className={styles.righttopscrenn}><Pause volume={volume} setVolume={setVolume} sound={sound} setSound={setSound} leave={leave} /></div>
            </div>


            <div className={styles.body}>
                <div className={styles.leftsectionplayer}>
                <Playerstats Player={Player} picture='/avatar-player.jpg'/>
                </div>
                <div className={styles.btweensections}>
                <Actions turn={turn}  setTurn={setTurn} Attack={attack} Parry={parry} Dodge={doge} />
                </div>
                <div className={styles.rightsectionboss}>
                <Playerstats Player={Boss} picture={Bossurls[level]} />
                </div>
            </div>


            <div className={styles.about}>
                <div className={styles.leftdown}>
                <Backpack setQuant={setQuant} quant={quant} heal={heal}/>
                </div>
                 <div className={styles.rightdown}>
                <Console text={consoletxt}/>
                 </div>
            </div>
        </div>
    )

}