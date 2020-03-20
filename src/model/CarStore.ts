import { Car } from "./Car";

export class CarStore {

    constructor(
        public name: string,
        public cars: Car[]
    ){}

}