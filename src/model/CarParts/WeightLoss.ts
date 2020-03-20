import { CarPart } from "./CarPart";

export class WeightLoss extends CarPart {

    constructor(
        label: string,
        cost: number,
        weightDelta: number
    ){
        super(label, cost, weightDelta)
    }

}