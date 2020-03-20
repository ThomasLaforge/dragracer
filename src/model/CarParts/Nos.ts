import { CarPart } from "./CarPart";

export class Nos extends CarPart {

    constructor(
        label: string,
        price: number,
        weightDelta: number,
        public quantity: number,
        public used: number,
        public bonusAcceleration: number,
    ){
        super(label, price, weightDelta)
    }
}