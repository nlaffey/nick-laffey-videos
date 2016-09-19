import React from 'react';
import Video from './Video';
import LetItDieImage from '../../img/letitdie.png';

class LetItDieVideo extends React.Component {

    componentWillMount() {
        this.videoData = {
            name: "Let It Die",
            image: LetItDieImage,
            location: "Shot in the Raring Building at the University of Minnesota",
            href: "https://www.youtube.com/watch?v=-0xqFsr1b0k",
            date: "April 2013",
            videoBy: "Meagan Nouis",
            musicBy: "Fiest"
        }
    }

    render() {
        return <Video videoData={this.videoData} updateVideoInfo={this.props.updateVideoInfo}/>
    }
}

export default LetItDieVideo;