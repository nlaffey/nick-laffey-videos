import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {
    render() {
        return <div className='nav'>
            <div className='title link'>
                <div className="about"><Link to="InitialImage">NICK LAFFEY</Link></div>
                <br/>
                <a className='email' href="mailto:nicklaffey@gmail.com">NICKLAFFEY@GMAIL.COM</a></div>
            <div className='videos'> VIDEOS</div>
            <div className="vidlist">
                <ul>
                    <li className='midtown link'><Link to="midtowngreenway">MIDTOWN GREENWAY</Link></li>
                    <li className='letitdie link'><Link to="letitdie">LET IT DIE</Link></li>
                </ul>
            </div>
            <div className="footer">Web Design by Nick Laffey | Copyright © Nick Laffey 2013</div>
        </div>
    }
}

export default Navigation;