

import React from 'react';
import {Router, Route} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './reducers/configureStore';
const store = configureStore();


import AppContainer from './containers/AppContainer';  // With Redux


import NotFound from './components/NoFound';        // Without Redux (static)
import Vis from './components/Visualization';

const Routes = (props) =>(

    <Provider store={store}>
        <Router {...props}>
            <Route path="/" components={AppContainer}/>
            <Route path="/visualization" components={Vis}/>
            <Route path="/*" co mponents={NotFound}/>
        </Router>
    </Provider>
);


export default Routes;


