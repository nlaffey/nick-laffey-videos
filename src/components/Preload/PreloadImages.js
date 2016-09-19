import React from 'react';


/*
 * A helper class to preload images into the page.
 */
class PreloadImages extends React.Component {

    elements(items) {
        var elms = [];
        if (this.props.items.length > 0) {
            items.forEach(function (url, index) {
                elms.push(<span style={{background: 'url(' + url + ')'}} key={'preload' + index}/>);
            });
        }
        return elms;
    }

    render() {
        return (<div>{this.elements(this.props.items)}</div>);
    }
}

export default PreloadImages;