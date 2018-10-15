import {combineReducers} from 'redux';
import companyReducer from './Company';
import commonReducer from './Common';
import {reducer as formReducer} from 'redux-form';

// create the component as a class so that an reset the form 
//when after successfull form submission

export default combineReducers({
    company:companyReducer,
    common:commonReducer,
    form:formReducer 
})