import {combineReducers} from 'redux';
import companyReducer from './companyReducer';

export default combineReducers({
    company:companyReducer,
})