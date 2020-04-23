import React, { Component } from 'react'
import { Car } from '../model'
import CarCard from './CarCard'

interface CarListProps {
    cars: Car[],
    onSelectCar?: Function
}

export default class CarList extends Component<CarListProps> {
    render() {
        return (
            <div className='car-list'>
                {this.props.cars.map(c => {
                    return <CarCard
                        car={c}
                        onSelectCar={this.props.onSelectCar}
                    />
                })}
            </div>
        )
    }
}
