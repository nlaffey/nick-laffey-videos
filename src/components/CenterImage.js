import React from 'react';

class centerImage extends React.Component {
    render() {
        return <div className="wrapper">
            <img className="pic" src={"src/img/" + this.props.image} alt={this.props.name + ' Juggling Video'}
                 width="960"
                 height="562"/>
        </div>
    }
}

export default centerImage;