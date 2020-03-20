import { Player } from "./Player";
import { Driver } from "./Driver";

export class Race {

    constructor(
        public player: Player,
        public opponent: Driver,
        public driverTime: number,
        public opponentTime: number,
        public prizeMoney: number,
        public entry = 0, // money to participate
    ){}

}