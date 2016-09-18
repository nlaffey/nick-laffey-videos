import React from 'react';
import Video from './Video';

class LetItDie extends React.Component{
    render(){
        return <Video name="Midtown Greenway"
                      image="midtown.png"
                      location="Shot in the Midtown Greenway area of Minneapolis, MN"
                      href="https://www.youtube.com/watch?v=QeDUvUtbPHE"
                      date="July 2012"
                      videoBy="Carl G Martin"
                      musicBy="Holy Fuck"/>
    }
}

export default LetItDie;