import React from 'react';

class centerImage extends React.Component {

    getAlt() {
        if (this.props.name) {
            return this.props.name + ' Juggling Video'
        } else {
            return "Nick Laffey juggling";
        }
    }

    render() {

        return <div>
            <img className="center-image" src={this.props.image} alt={this.getAlt()}
                 width="960"
                 height="562"/>
        </div>
    }
}

export default centerImage;