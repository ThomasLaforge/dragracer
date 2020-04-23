import React, { Component } from 'react'
import { RouteComponentProps } from '@reach/router'

interface GarageProps extends RouteComponentProps {}

interface GarageState {
    hearts: {x: number, y: number}[]
}

export default class Garage extends Component<GarageProps, GarageState> {

    constructor(props: GarageProps){
        super(props)
        this.state = {
            hearts: []
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }

    pushNewHeart(){
        this.setState({
            hearts: [...this.state.hearts, {x: Math.floor(Math.random() * 1000), y: Math.floor(Math.random() * 800)}]
        })
    }
}
