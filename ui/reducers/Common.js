import * as COMMON from "../actionTypes/Common";
import Common from "../reducers/CommonState";

export default (state = Common, action) => {
  const nextState = { ...state };
  const { type, data } = action;
  switch (type) {
    case COMMON.CLEAR:
      return {
        ...nextState,
        ...Common
      };
    case COMMON.ERROR:
      return {
        ...nextState,
        ...Common,
        fail: true,
        error:
          data.data.error && data.data.error.name
            ? data.data.error.name
            : (data.data &&
                data.data.error &&
                data.data.error.error &&
                data.data.error.error.name) != undefined
              ? data.data.error.error.name
              : null,
        msg: data.data.msg
      };
    case COMMON.SUCCESS:
      console.log("inside common reducer");
      return {
        ...nextState,
        ...Common,
        done: true,
        msg: data.data ? data.data.msg : null
      };
    case COMMON.LOADING:
      return {
        ...nextState,
        ...Common,
        loading: data
      };
    default:
      return nextState;
  }
};
