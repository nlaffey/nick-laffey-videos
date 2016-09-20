import renderer from 'react-test-renderer';
import React from 'react';
import CenterImage from '../src/components/CenterImage/CenterImage';
import image from '../src/img/letitdie.png';

it('renders correctly with image passed in', ()=> {
    const video = renderer.create(
        <CenterImage image={image}/>
    ).toJSON();
    expect(video).toMatchSnapshot();
});

it('throws an error when a non string URL is passed', ()=> {
    expect(()=> {
        renderer.create(
            <CenterImage image={123}/>)
    }).toThrow(new Error('The image requires a URL string'))
});

it('throws an error when no URL is passed', ()=> {
    expect(()=> {
        renderer.create(
            <CenterImage/>
        )
    }).toThrow(new Error('The image requires a URL string'))
});
