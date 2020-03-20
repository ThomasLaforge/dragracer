import { CarPart } from "./CarPart";

export class AeroKit extends CarPart {

    constructor(
        label: string,
        cost: number,
        weightDelta: number
    ){
        super(label, cost, weightDelta)
    }

}