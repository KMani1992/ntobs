import React, { Component } from "react";
import PControlInit from "../components/pcontrol/PControl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pcontrolActionCreator from "../actionCreators/PControl";
import * as util from "../util/util";

class PControlContainer extends Component {
  constructor(props) {
    super(props);
  }

  editPControl = (e, value) => {
    e && e.preventDefault();
    console.log("p cont contain", e, value);
    let data = {
      name: "",
      type: "text",
      value: "",
      status: "active",
      domain: "",
      mode: "create",
      id: ""
    };

    if (value) {
      const element = document.getElementsByName(".tabs");
      let instance = M.Tabs.getInstance(element);
      //instance.select("tab1")
      data = {
        name: value.name,
        type: value.type,
        value: value.value,
        status: value.status,
        domain: value.domain,
        mode: "edit",
        id: value._id
      };
    }

    console.log("updated data", data);
    this.props.pcontrolAction.editPControlPopulate(data);
  };

  componentDidMount() {
    const element = document.querySelectorAll(".tabs");
    let instance = M.Tabs.init(element);
    this.props.pcontrolAction.readPControl();
  }

  submit = values => {
    console.log("pcontrol", values);
    let pcontrol = {};

    if (values) {
      pcontrol = {
        name: values.name,
        type: values.type,
        value: values.value,
        status: values.status,
        domain: util.getDomain(),
        updatedBy: util.getOperatorId()
      };
    }

    if (values.mode === "create") {
      this.props.pcontrolAction.createPControl(pcontrol);
    } else if (values.mode === "edit") {
      pcontrol.id = this.props.pcontrol.id;
      this.props.pcontrolAction.editPControl(pcontrol);
    }
  };

  render() {
    return (
      <PControlInit
        onSubmit={this.submit}
        pcontrolList={this.props.pcontrolList}
        editPControl={this.editPControl}
      />
    );
  }
}

const mapStateToProps = state => ({
  pcontrolList: state.pcontrol.pcontrolList,
  pcontrol: state.pcontrol.default
});

const maDispatchToProps = dispatch => ({
  pcontrolAction: bindActionCreators(pcontrolActionCreator, dispatch)
});

export default connect(mapStateToProps, maDispatchToProps)(PControlContainer);
