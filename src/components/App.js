import React from 'react';
import Navigation from './Navigation/navigation.js'
import FadeIn from './Transition/FadeInTransition';
//noinspection JSUnresolvedVariable
import MidtownGreenwayImage from '../img/midtown.png';
//noinspection JSUnresolvedVariable
import LetItDieImage from '../img/letitdie.png';
import Preload from './Preload/PreloadImages';
import fancyBoxCustom from '../js/fancyBoxCustom';

class App extends React.Component {

    updateVideoInfo(video) {
        this.setState({videoData: video});
    }

    componentWillMount() {
        fancyBoxCustom();
        this.setState({videoData: null});
    }

    render() {
        return <FadeIn>
            <div className="container">
                <div className="border">
                    {React.cloneElement(this.props.children, {updateVideoInfo: this.updateVideoInfo.bind(this)})}
                    <Navigation videoData={this.state.videoData}/>
                </div>
            </div>
            <Preload items={[MidtownGreenwayImage, LetItDieImage]}/>
        </FadeIn>

    }
}

export default App;
