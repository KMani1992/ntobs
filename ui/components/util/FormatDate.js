import React from "react";
import Moment from "react-moment";

const FormatDate = props => {
  return <Moment format="YYYY/MM/DD">{props.date}</Moment>;
};

export default FormatDate;
