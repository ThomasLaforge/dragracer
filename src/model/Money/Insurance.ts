export class Insurance {
    constructor(
        public carMarginInPercent: number,
        public partMarginInPercent: number
    ){}

    ensureCar(initialCost: number, currentCost: number, fiability: number){
        const priceToEnsure = initialCost - currentCost * fiability
        return priceToEnsure * (100 + this.carMarginInPercent) / 100
    }

    ensurePart(initialCost: number, currentCost: number, fiability: number){
        const priceToEnsure = initialCost - currentCost * fiability
        return priceToEnsure * (100 + this.partMarginInPercent) / 100
    }
}