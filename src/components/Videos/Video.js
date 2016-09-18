import React from 'react';
import CenterImage from '../CenterImage';
import $ from 'jquery';
import fancyBoxCustom from '../../js/fancyBoxCustom';

class Video extends React.Component {
    componentDidMount() {
        fancyBoxCustom();
        $('.vidtitle').fadeIn(2000);
    }

    render() {
        return <div className="wrapper">

            <div className="vidtitle-wrapper">
                <a className="vidtitle fancybox-media" href={this.props.href}>{this.props.name.toUpperCase()}
                    {/*TODO: Update play image to build location */}
                    <br/><img className="play" src="src/img/play.gif"/> </a>
            </div>
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