import React from 'react';
import {Link} from 'react-router';
import VideoInfo from '../Videos/VideoInfo';
class Navigation extends React.Component {
    render() {
        return <div className='nav'>
            <div className='nav-left'>
                <div className="nav-header"><Link to="home">NICK LAFFEY</Link></div>
                <a className='hover-bold' href="mailto:nicklaffey@gmail.com">NICKLAFFEY@GMAIL.COM</a></div>
            <div className="nav-center">
                <VideoInfo videoData={this.props.videoData}/>
            </div>
            <div className='nav-right'>
                <div className="nav-header">VIDEOS</div>
                <ul>
                    <li className='hover-bold'><Link to="midtowngreenway">MIDTOWN
                        GREENWAY</Link></li>
                    <li className='hover-bold'><Link to="letitdie">LET IT DIE</Link></li>
                </ul>
            </div>

        </div>
    }
}

export default Navigation;