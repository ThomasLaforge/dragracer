import { Race } from "./Race";
import { Driver } from "./Driver";
import { Car } from "./Car";
import { Sexe, DriverCharacteristics } from "./definitions";

export class Player extends Driver {

    constructor(
        name = 'McPaulo',
        age: number,
        sexe: Sexe,
        currentCar: Car,
        driverCharacteristics: DriverCharacteristics,
        public id: number,
        public races: Race[] = [],
        public money = 0,
        public xp = 0,
        public friends: Player[],
    ){
        super(name, age, sexe, currentCar, driverCharacteristics)
    }

    getOpponents(){
        return this.races.map(r => r.opponent)
    }

    get nbVictories(){
        return this.races.filter(r => r.driverTime <= r.opponentTime)
    }

    get nbLoses(){
        return this.races.filter(r => r.driverTime > r.opponentTime)
    }

    addFriend(player: Player){
        if(!this.friends.find(p => p.id === player.id)){
            this.friends.push(player)
        }
    }

}