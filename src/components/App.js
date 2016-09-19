import React from 'react';
import Navigation from './Navigation/navigation.js'
import FadeIn from './Transition/FadeInTransition';

class App extends React.Component {

    updateVideoInfo(video) {
        this.setState({videoData: video});
    }

    componentWillMount(){
        this.setState({videoData:null});
    }

    render() {
        return <FadeIn>
            <div className="container">
                <div className="border">
                    <div>{React.cloneElement(this.props.children, {updateVideoInfo: this.updateVideoInfo.bind(this)})}</div>
                    <Navigation videoData={this.state.videoData}/>
                </div>
            </div>
        </FadeIn>
    }
}

export default App;
