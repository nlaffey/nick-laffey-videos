import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {
    render() {
        return <div className='nav'>
            <div className='title'>
                <div className="about"><Link to="home">NICK LAFFEY</Link></div>
                <br/>
                <a className='email' href="mailto:nicklaffey@gmail.com">NICKLAFFEY@GMAIL.COM</a></div>
            <div className='videos'> VIDEOS</div>
            <div className="vidlist">
                <ul>
                    <li className='midtown link'><Link to="midtowngreenway">MIDTOWN GREENWAY</Link></li>
                    <li className='letitdie link'><Link to="letitdie">LET IT DIE</Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Navigation;