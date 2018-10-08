import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as companyActionCreator from '../actionCreators/Company';
import {bindActionCreators} from 'redux'
import Company from '../components/company/Company';



class CompanyContainer extends Component{

    submit=(values)=>{                
        console.log(values);
    }

    render(){
        return(<Company onSubmit={this.submit}/>);
    }
    
}

const mapStateToProps=(state)=>{
    state
}

const mapActionToProps=(dispatch)=>{
    companyAction:bindActionCreators(companyActionCreator,dispatch)
}

export default connect(mapStateToProps,mapActionToProps)(CompanyContainer);