export class MotorPhysic {

    constructor(
        private maxRpm: number,
        private horsePower: number,
        private currentGear: number,
        private gearsMap: Function[],
        public rpm = 0
    ){}

    nextTick(){
    }

    get acceleration(){
        return this.gearsMap[this.currentGear](this.rpm)
    }
}