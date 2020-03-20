import { CarPart } from "./CarParts/CarPart";

export class CarPartsRetailer {

    constructor(
        public name: string,
        public parts: CarPart[]
    ){}
}