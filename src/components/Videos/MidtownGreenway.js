import React from 'react';
import Video from './Video';
import MidtownGreenwayImage from '../../img/midtown.png';

class MidtownGreenwayVideo extends React.Component {

    componentWillMount() {
        this.videoData = {
            name: "Midtown Greenway",
            image: MidtownGreenwayImage,
            location: "Shot in the Midtown Greenway area of Minneapolis, MN",
            href: "https://www.youtube.com/watch?v=QeDUvUtbPHE",
            date: "July 2012",
            videoBy: "Carl G Martin",
            musicBy: "Holy Fuck"
        }
    }

    render() {
        return <Video videoData={this.videoData} updateVideoInfo={this.props.updateVideoInfo}/>
    }
}

export default MidtownGreenwayVideo;