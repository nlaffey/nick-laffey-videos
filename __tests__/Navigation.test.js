import renderer from 'react-test-renderer';
import React from 'react';
import Navigation from '../src/components/Navigation/Navigation';
import LetItDieImage from '../src/img/letitdie.png';


it('renders correctly 1', ()=> {
    const videoData = {
        name: "Let It Die",
        image: LetItDieImage,
        location: "Shot in the Raring Building at the University of Minnesota",
        href: "https://www.youtube.com/watch?v=-0xqFsr1b0k",
        date: "April 2013",
        videoBy: "Meagan Nouis",
        musicBy: "Fiest"
    }
    const video = renderer.create(
        <Navigation videoData={videoData}/>
    ).toJSON();
    expect(video).toMatchSnapshot();
});
