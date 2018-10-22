import Navbar from "./navbar/Navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as commonActionCreators from "../../actionCreators/Common";

class Header extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps) {
    
    const { common, commonAction } = this.props;

    if (prevProps.common.done !== common.done && common.done) {
      M.toast({
        html: common.msg,
        completeCallback: () => commonAction.clear(),
        classes:'green'
      });
    }

    if (prevProps.common.fail !== common.fail && common.fail) {
      M.toast({
        html: `<span>${common.msg}!</span>&nbsp;<p>${common.error? `[${common.error}]`:'' }</p>`,
        completeCallback: () => commonAction.clear(),
        displayLength:7000,
        classes:'red'
      });
    }
  }


  render() {
    return (
      <header>
        <Navbar />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  common: state.common
});

const mapActionToProps = dispatch => ({
  commonAction: bindActionCreators(commonActionCreators, dispatch)
});

export default connect(mapStateToProps, mapActionToProps)(Header);
