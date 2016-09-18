import fancyBoxCustom from './src/js/fancyBoxCustom';
import css from '!css!resolve-url!sass?sourceMap!./src/scss/style.scss';
import $ from './node_modules/jquery/dist/jquery.js';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './src/App.js';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LetItDie from './src/components/Videos/letitdie'
import MidtownGreenway from './src/components/Videos/midtowngreenway'
import InitialImage from './src/components/InitialImage';


ReactDOM.render((<Router history={hashHistory} >
    <Route path="/" component={App}>
        <IndexRoute component={InitialImage}/>
        <Route path="initialimage" component={InitialImage}/>
        <Route path="letitdie" component={LetItDie}/>
        <Route path="midtowngreenway" component={MidtownGreenway}/>
    </Route>
</Router>), document.getElementById('app'));


$('head').append('<style type="text/css">' + css + '</style>');
fancyBoxCustom();