import React from 'react';

class VideoInfo extends React.Component {
    render() {
        var data = this.props.videoData, list = <div>&nbsp;</div>;

        if (data) {
            list = <ul>
                <li><strong>{data.name.toUpperCase()}</strong></li>
                <li>{data.date}</li>
                <li>{data.location}</li>
                <li>Video by {data.videoBy}</li>
                <li>Music by {data.musicBy}</li>
            </ul>
        }

        return <div className="info">
            {list}
        </div>

    }
}
export default VideoInfo;