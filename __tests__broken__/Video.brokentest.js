/*

This test is broken until React fixes for the following error:
Invariant Violation: ReactCompositeComponent: injectEnvironment() can only be called once.

It looks like they're working on it. TODO: Check on https://github.com/facebook/jest/issues/1353

 */

// import renderer from 'react-test-renderer';
// import React from 'react';
// import Video from '../src/components/Videos/Video';
// import LetItDieImage from '../src/img/letitdie.png';
//
// it('renders correctly', ()=> {
//     const videoData = {
//         name: "Let It Die",
//         image: LetItDieImage,
//         location: "Shot in the Raring Building at the University of Minnesota",
//         href: "https://www.youtube.com/watch?v=-0xqFsr1b0k",
//         date: "April 2013",
//         videoBy: "Meagan Nouis",
//         musicBy: "Fiest"
//     }
//
//     const video = renderer.create(
//         <Video videoData={videoData}/>
//     ).toJSON();
//     expect(video).toMatchSnapshot();
// });