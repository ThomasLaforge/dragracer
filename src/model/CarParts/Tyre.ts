import { CarPart } from "./CarPart";

export class Tyre extends CarPart {

    constructor(
        label: string,
        price: number,
        weightDelta: number,
        public grip: number,
        public nbMeters: number,
        public lifeTime: number,
        public argus: Function
    ){
        super(label, price, weightDelta)
    }
    
}