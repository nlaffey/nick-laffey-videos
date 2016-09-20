import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


/*
 Importing HTML only so it gets processed by Webpack and placed in the build folder.
 */
//noinspection ES6UnusedImports,JSUnresolvedVariable
import Html from './html/index.html';
//noinspection ES6UnusedImports,JSUnresolvedVariable
import CSS from './scss/style.scss';

import App from './components/App.js';
import LetItDie from './components/Videos/letitdie'
import MidtownGreenway from './components/Videos/midtowngreenway'
import Home from './components/CenterImage/HomeImage';

ReactDOM.render((<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="letitdie" component={LetItDie}/>
        <Route path="midtowngreenway" component={MidtownGreenway}/>
    </Route>
</Router>), document.getElementById('app'));