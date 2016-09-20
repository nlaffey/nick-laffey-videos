import React from 'react';

class centerImage extends React.Component {

    componentWillMount() {
        if (typeof this.props.image !== "string") {
            throw Error('The image requires a URL string');
        }
    }

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