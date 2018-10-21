import React,{Component} from 'react';
import PControl from '../components/pcontrol/PControl';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pcontrolActionCreator from '../actionCreators/PControl';

class PControlContainer extends Component{

    submit = values => {
    if (values.mode === "create") {
      this.props.operatorAction.createPControl(values);
    } else if (values.mode === "edit") {
      this.props.operatorAction.editPControl(values);
    }
  };

    render(){
        return (<PControl handleSubmit={this.submit} pcontrolList={this.props.pcontrolList}/>);
    }
}

const mapStateToProps=(state)=>({
pcontrolList:state.pcontrol.pcontrolList
})

const maDispatchToProps=(dispatch)=>({
    pcontrolAction:bindActionCreators(pcontrolActionCreator,dispatch)
})

export default connect(mapStateToProps,maDispatchToProps)(PControlContainer);