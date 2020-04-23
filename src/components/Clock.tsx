import React, { Component } from 'react'
import '../styles/clock.scss'

interface ClockProps {
    hours: number,
    minutes: number,
    speed: number,
    changeSpeed: Function,
    resetSpeed: Function,
}

export default class Clock extends Component<ClockProps> {
    render() {
        const hours = this.props.hours.toString().padStart(2, '0')
        const minutes = this.props.minutes.toString().padStart(2, '0')
        return (
            <div className='clock'>
                <div className="clock-time">
                    {hours} : {minutes}
                </div>
                <div className="clock-speed">
                    <div className="clock-slower"
                        onClick={() => this.props.changeSpeed(false)}
                    >{'<<'}</div>
                    <div className="clock-speed-value"
                        onClick={() => this.props.resetSpeed()}
                    >{this.props.speed}</div>
                    <div className="clock-faster"
                        onClick={() => this.props.changeSpeed(true)}
                    >{'>>'}</div>
                </div>
            </div>
        )
    }
}
