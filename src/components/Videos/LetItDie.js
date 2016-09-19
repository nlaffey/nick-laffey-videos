import React from 'react';
import Video from './Video';
import image from '../../img/letitdie.png';

class LetItDie extends React.Component{
    render(){
        return <Video name="Let it die"
                      image={image}
                      location="Shot in the Raring Building at the University of Minnesota"
                      href="https://www.youtube.com/watch?v=-0xqFsr1b0k"
                      date="April 2013"
                      videoBy="Meagan Nouis"
                      musicBy="Feist"/>
    }
}

export default LetItDie;