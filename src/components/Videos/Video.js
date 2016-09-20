import React from 'react';
import CenterImage from '../CenterImage/CenterImage';
import FadeInTransition from '../Transition/FadeInTransition';
import playImg from '../../img/play.gif';

class Video extends React.Component {

    componentDidMount() {
        this.props.updateVideoInfo(this.props.videoData);
    }

    render() {
        var data = this.props.videoData;
        return <div>
            <FadeInTransition>
                <div className="title-wrapper">
                    <a className="vidtitle fancybox-media" href={data.href}>{data.name.toUpperCase()}
                        <br/><img className="play" src={playImg}/> </a>
                </div>
            </FadeInTransition>
            <CenterImage image={data.image} name={data.name}/>
        </div>
    }
}

export default Video;

