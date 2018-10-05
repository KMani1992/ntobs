import React from 'react';
import { Provider } from 'react-redux';
import PageRouter from '../routes';
import {PropTypes} from 'prop-types';
const rootContainer = ({ store, history }) => (
    <Provider store={store} >
        <PageRouter history={history} />
    </Provider>
);


rootContainer.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default rootContainer;

