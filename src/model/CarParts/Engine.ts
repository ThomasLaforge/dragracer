import { CarPart } from "./CarPart";

export class Engine extends CarPart {

    constructor(
        label: string,
        cost: number,
        weightDelta: number,
        public maxRpm: number,
        public torc: number,
        public maxSpeed: number,
        public acceleration: number
    ){
        super(label, cost, weightDelta)
    }

}