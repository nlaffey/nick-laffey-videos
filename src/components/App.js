import React from 'react';
import Navigation from './Navigation/navigation.js'
import FadeIn from './Transition/FadeInTransition';

class App extends React.Component {
    render() {
        return <FadeIn>
            <div className="container">
                <div className="border">
                    {this.props.children}
                    <Navigation/>
                </div>
            </div>
        </FadeIn>
    }
}

export default App;
