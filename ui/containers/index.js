import React from 'react';
import {Provider} from 'react-redux';
import Routes from '../routes';

const rootContainer=({store,history}) => {
    <Provider store={store} >
        <Routes history={history} />
    </Provider>
}

export default rootContainer;