import React, { Component } from 'react'
import { Car } from '../model'

interface CarCardProps {
    car: Car,
    onSelectCar?: Function
}

export default class CarCard extends Component<CarCardProps> {
    render() {
        const {name, currentPrice, initialSpecs} = this.props.car
        return (
            <div className='car-card'
                onClick={() => this.props.onSelectCar}
            >
                <div className="car-name">{name}</div>
                <div className="car-price">{currentPrice}</div>
                <div className="car-specs">
                    <div className="hp">{200}HP</div>
                </div>
            </div>
        )
    }
}
