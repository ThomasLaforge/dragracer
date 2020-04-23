import { GearBox } from "./CarParts/GearBox";
import { Tyre } from "./CarParts/Tyre";
import { WeightLoss } from "./CarParts/WeightLoss";
import { Nos } from "./CarParts/Nos";
import { Engine } from "./CarParts/Engine";
import { AeroKit } from "./CarParts/AeroKit";
import { Suspension } from "./CarParts/Suspension";

export interface CarSpecs {
    maxSpeed: number,
    acceleration: number,
    grip: number,
    aero: number,
    weight: number
}

export interface CarParts {
    gearBox?: GearBox,
    tyres?: Tyre,
    weightLoss?: WeightLoss,
    nos?: Nos,
    engine?: Engine,
    aeroKit?: AeroKit,
    suspension?: Suspension
}

export enum Sexe {
    Man,
    Woman
}

export interface DriverCharacteristics {
    gearShiftingSpeed: number,
    gearShiftingvariation: number,
    reflex: number,
    reflexVariation: number
}

export enum CarFamily {
    Green,
    Red, 
    Blue
}