// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor(props){
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}></button>
                <button className="resolution" onClick={this.handleResClick}></button>
            </div>
        )
    }

    handleBitrateClick = () => {
        this.setState( {
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResClick = () => {
        this.setState( {
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
            
        })
    }
}

export default YouTubeDebugger
