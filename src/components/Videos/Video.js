import React from 'react';
import CenterImage from '../CenterImage/CenterImage';
import fancyBoxCustom from '../../js/fancyBoxCustom';
import FadeInTransition from '../Transition/FadeInTransition';
import playImg from '../../img/play.gif';

class Video extends React.Component {
    componentDidMount() {
        fancyBoxCustom();
    }

    render() {
        return <div>
            <FadeInTransition>
                <div className="vidtitle-wrapper">
                    <a className="vidtitle fancybox-media" href={this.props.href}>{this.props.name.toUpperCase()}
                        <br/><img className="play" src={playImg}/> </a>
                </div>
            </FadeInTransition>
            <CenterImage image={this.props.image} name={this.props.name}/>
            <div className="info"><b>{this.props.name.toUpperCase()}</b>
                <br/>
                {this.props.date}<br/>
                {this.props.location}<br/>
                Video by {this.props.videoBy}<br/>
                Music by {this.props.musicBy}<br/>
            </div>
        </div>
    }
}

export default Video;

