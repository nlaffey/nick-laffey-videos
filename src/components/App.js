import React from 'react';
import Navigation from './Navigation/navigation.js'
import FadeIn from './Transition/FadeInTransition';
//noinspection JSUnresolvedVariable
import MidtownGreenwayImage from '../img/midtown.png';
//noinspection JSUnresolvedVariable
import LetItDieImage from '../img/letitdie.png';
import PreloadImages from './Preload/PreloadImages';
import loadFancyBox from '../js/loadFancyBox';

class App extends React.Component {

    updateVideoInfo(video) {
        this.setState({videoData: video});
    }

    componentDidMount() {
        // Pre-loading fancybox here. Ran into issues with Jest tests when it's loaded in the Video components.
        // TODO: Review loading of fancyBox and Jest tests.
        loadFancyBox();
    }

    componentWillMount() {
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
            <PreloadImages items={[MidtownGreenwayImage, LetItDieImage]}/>
        </FadeIn>

    }
}

export default App;
