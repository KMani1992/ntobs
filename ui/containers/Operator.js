import React,{Component} from 'react';
import Operator from '../components/operator/Operator';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as operatorActionCreator from '../actionCreators/Operator';

class OperatorContainer extends Component{
    render(){
        return (<Operator/>);
    }
}

const mapStateToProps=(state)=>({
operatorList:state.operatorList
})

const maDispatchToProps=(dispatch)=>({
    operatorAction:bindActionCreators(operatorActionCreator,dispatch)
})

export default connect(mapStateToProps,maDispatchToProps)(OperatorContainer);