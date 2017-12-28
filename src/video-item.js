import React, { Component } from 'react';


class VideoItem extends Component {

    state = { expanded: 'true' };

    constructor(props) {
        super(props);
        console.log(this.refs);
    }

    render() {
        return (
            <div>
                <li>{this.props.videoId}</li>
                <li>{this.state.expanded}</li>
            </div>
        )
    }
}

export default VideoItem;