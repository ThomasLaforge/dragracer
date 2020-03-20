import { Sexe, DriverCharacteristics } from "./definitions";
import { Car } from "./Car";

// A driver is an IA opponent
export class Driver {

    constructor(
        public name: string,
        public age: number,
        public sexe: Sexe,
        public car: Car,
        public driverCharacteristics: DriverCharacteristics
    ){}

}