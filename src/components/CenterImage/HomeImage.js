import React from 'react';
import CenterImage from './CenterImage';
import image from '../../img/mondo.jpg';

class HomeImage extends React.Component {

    componentWillMount() {
        this.props.updateVideoInfo(null);
    }

    render() {
        return <div>
            <div className="title-wrapper">
                <span>Hi, select a video to the right.</span>
            </div>
            <CenterImage image={image}/>
        </div>


    }
}

export default HomeImage;