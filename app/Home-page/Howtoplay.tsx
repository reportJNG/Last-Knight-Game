import styles from './Howtoplay.module.css';
import { FiX } from 'react-icons/fi';

interface Howtoplayprops {
  close: () => void;
}

export default function Howtoplay({ close }: Howtoplayprops) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.closeupright} onClick={close} aria-label="Close">
          <FiX />
        </button>
        
        <div className={styles.textholder}>
          <div className={styles.scrollHint} />
          <p>
            THE LAST KEEPER — A KINGDOM CHOSEN BY STEEL<br/><br/>
            
            Beneath a sky the color of old iron, the kingdom of Edrasil holds its breath.<br/><br/>
            
            This is a realm both brutal and beautiful: a latticework of wind-swept moors, black-pine forests that smell of sap and smoke, salt-polished harbors where rigging sings in the wind, and stony cities crowned by a single palace whose white towers are visible from three counties. In Edrasil, a Queen sits upon that palace and rules — not by myth or divine fiat, but because the people have given her the crown. She governs with the hard currency of law, mercy, and the kind of quiet temper that quiets storms. When she speaks, the realm leans forward; when she grieves, the hearthfires dim.<br/><br/>
            
            And now she has declared a singular, terrible thing: of all the knights in Edrasil — of every sword-arm, every oath-bound baron and lowborn blade — only one may stand beside her. Not as a symbol, not by lineage, but by proving themselves in combat, in counsel, and in the terrible arithmetic of survival. The chosen knight will share not only public honors and the Queens name, but a life entangled with the crowns dangers and compromises. This is a contest for hearts of iron, and for the single place at her side.<br/><br/>
            
            THE WEIGHT OF HER DECISION<br/><br/>
            
            The Queens choice is not merely marital. It is political architecture. To accept a consort is to integrate that persons loyalties, enemies, and ambitions into the highest seat of power. A queen who marries takes a partner into state councils; a knight who marries assumes responsibility for the realm and its enemies. The Court whispers about clans and claims; provinces reweigh allegiances; foreign envoys count the cost in their ledgers.<br/><br/>
            
            But the gravest burden is emotional. The Queen must balance the private against the public. Her selection will be read as an assertion of identity: favoring mercy or ruthlessness, tradition or change, the common folk or the noble houses. She risks her own reputation — the possibility of love that compromises judgment, or the coldness of a recorded refusal. To choose is to expose the self. To delay is to invite conspiracy.<br/><br/>
            
            Every festival, every law, every corpse of an enemy found beyond the north wall will be read afterward as having been influenced by that choice. It is a solitude layered on sovereignty: to pick a single human companion and thereby bind the story of a people to their private heart.<br/><br/>
            
            TRADITIONS OF EDRASIL: COMBAT, HONOR, SUCCESSION<br/><br/>
            
            Edrasils rites are old and exacting, forged in seasons of famine and fire. They are not a tournament of spectacle but a forensic measure of worth.<br/><br/>
            
            The Binding Oath: Each aspirant swears upon three things — the Queens safety, the lands law, and the truth of their own blade. The oath is taken before fire and council; its breach is talismanic and ruinous. To abjure it is to become an outlaw beyond mercy.<br/><br/>
            
            The Edge of Council: Combat is never the only test. A knight must sit within the Queens council and argue on behalf of a village, a border, or an accused traitor. Deeds of war, the reading of law, and bedside vigils for the dying are equally weighed.<br/><br/>
            
            The Trial by Night: Once finalists are chosen, there is a night spent alone in the Field of Lanterns — a hollow lined with stones and votive glass. The field tests the soul: hunger, temptation, and the weight of conscience. Some do not survive the Trial; others arrive with their hands clean and their minds altered.<br/><br/>
            
            The Solemant: Where other realms pass thrones by blood or claim, Edrasils Solemant binds a single companion to the Queen — a living symbol of the realms living will. The Solemant is not automatic succession. If the Queen dies, her throne passes according to law, not marriage — but the Solemant becomes the steward of a legacy that kings once used for their own.<br/><br/>
            
            The Lore of Remembrance: Ballads will sing and blacksmiths will forge, but only the last knights name will be carved into the Great Stone at the palace steps. The tradition is deliberate — a measure meant to condense history into a single unfinished monument. It forces the people to anchor their memory on one figure who stands as proof that one life can tilt an empire.<br/><br/>
            
            Honor in Edrasil is a living covenant: not a costume but a daily, mortal practice. It demands truth to oath, accountability for violence, and a willingness to die for something beyond ones own name.<br/><br/>
            
            THE KNIGHT — INTERNAL STRIFE OF THE PROTAGONIST<br/><br/>
            
            You are not born chosen. You arrive at the palace a person made of choices and wounds.<br/><br/>
            
            There is steel in your hands, but an ache in your chest that the sharpest blade cannot cut. You doubt yourself often — whether your victories are stolen by luck, whether your mercy will be perceived as weakness, whether the cause you serve is a banner for another mans ambition. The Queens face is not a prize to be won but a mirror that returns your own questions: if you take her hand, will you become what the Court fears, or will you become her anchor? You love her not as the realm loves a symbol, but in private moments — the sound of her laugh by moonlight, the tremble in her correspondence — and that love complicates strategy.<br/><br/>
            
            Hope lodges like a shard, bright and stubborn. Fear sits by your shoulder, cold and practical. Determination is the slow force that converts all of this into movement. You stand. You ride. You fight. You choose.<br/><br/>
            
            THE FINAL KNIGHT<br/><br/>
            
            Edrasils law is blunt: only one name will be remembered. The rest fade into silence. To survive is to inherit the weight of memory itself. The last knight does not merely win — they become the meaning others will argue over long after the blade is sheathed.<br/><br/>
            
            LEGAL NOTICE, LICENSE, AND DISCLAIMER<br/><br/>
            
            PLEASE READ THIS LICENSE AGREEMENT CAREFULLY. BY ACCESSING OR PLAYING THIS GAME, YOU AGREE TO BE BOUND BY ITS TERMS. THE GAME IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND. ALL CHARACTERS, EVENTS, AND LOCATIONS ARE FICTIONAL. ANY RESEMBLANCE TO REAL PERSONS OR EVENTS IS PURELY COINCIDENTAL. THE PUBLISHER ASSUMES NO LIABILITY FOR DATA LOSS, SERVICE INTERRUPTION, OR DAMAGES ARISING FROM USE OF THE GAME. CONTENT MAY INCLUDE VIOLENCE AND MATURE THEMES. PLAYER DISCRETION IS ADVISED. ALL RIGHTS RESERVED. © [STUDIO NAME].<br/><br/>
            
            Scroll if you wish. The kingdom will still be waiting.
          </p>
        </div>
        
        <button className={styles.closebtnmiddown} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}