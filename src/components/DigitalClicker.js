// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
    constructor(props){
        super(props)
        this.state = {
            timesClicked: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }

    handleClick = () =>{
        this.setState(prev => {
           return {timesClicked: prev.timesClicked + 1}
        })
    }
}

export default DigitalClicker
