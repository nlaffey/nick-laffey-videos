import React from 'react';
import CenterImage from './CenterImage';
import image from '../../img/mondo.jpg';

class InitialImage extends React.Component{
    render(){
        return <div>
            <CenterImage image={image}/>
                <div className="info"><b/>
                    Select a video on the right
                </div>
            </div>
    }
}

export default InitialImage;