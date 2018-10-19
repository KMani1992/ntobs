import {combineReducers} from 'redux';
import companyReducer from './Company';
import commonReducer from './Common';
import operatorReducer from './Operator';
import pcontrolReducer from './PControl';
import productReducer from './Product';
import salesReducer from './Sales';
import salesReportReducer from './SalesReport';
import {reducer as formReducer} from 'redux-form';

// create the component as a class so that an reset the form 
//when after successfull form submission

export default combineReducers({
    company:companyReducer,
    common:commonReducer,
    operator:operatorReducer,
    pcontrol:pcontrolReducer,
    product:productReducer,
    sales:salesReducer,
    salesReport:salesReportReducer,
    form:formReducer 
})