import { CarFamily } from "../definitions";

export class Bank {

    constructor(
        public maxCreditAmount: number
    ){}

    askCredit(amount: number, nbCredit: number, family: CarFamily, asDoubleCreditOption: boolean){
        return amount < this.maxCreditAmount && ( nbCredit === 0 || (nbCredit === 1 && asDoubleCreditOption)) 
    }
}