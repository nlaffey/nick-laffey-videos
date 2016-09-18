import React from 'react';
import Navigation from './components/Navigation/navigation.js'

class App extends React.Component {
    render() {
        return <div className="container">
            <div className="border">
                {this.props.children}
                <Navigation/>
            </div>
        </div>
    }
}

export default App;
