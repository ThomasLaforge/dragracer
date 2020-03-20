import { CarSpecs, CarParts } from "./definitions";

export class Car {

    constructor(
        public name: string,
        public initialPrice: number,
        public nbRaces = 0,
        public initialSpecs: CarSpecs,
        public parts: CarParts,
        public id: number
    ){}

    get currentPrice(){
        const percentLossPerRace = 0.1
        let price = this.initialPrice

        for (let i = 0; i < this.nbRaces; i++) {
            price = price * (1 - percentLossPerRace)    
        }

        return price
    }
}