import { CarStore } from "./CarStore";
import { Race } from "./Race";
import { RepairStore } from "./RepairStore";

export abstract class City {

    constructor(
        public name: string,
        public stores: CarStore[] = [],
        public races: Race[] = [],
        public repairStores: RepairStore[] = []
    ){}

}