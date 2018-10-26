import {combineReducers} from 'redux';
import companyReducer from './Company';
import commonReducer from './Common';
import operatorReducer from './Operator';
import pcontrolReducer from './PControl';
import productReducer from './Product';
import salesReducer from './Sales';
import salesReportReducer from './SalesReport';
import SalesCancelReducer from './SalesCancel';
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
    salesCancel: SalesCancelReducer,
    form:formReducer 
})