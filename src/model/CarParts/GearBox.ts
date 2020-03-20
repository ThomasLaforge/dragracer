import { CarPart } from "./CarPart";

export class GearBox extends CarPart {

    constructor(
        label: string,
        price: number,
        weightDelta: number
    ){
        super(label, price, weightDelta)
    }

}