import axios from "axios";
import * as util from "./util";
const baseURL = "";
const timeout = 100000;
const instance = axios.create({
  baseURL,
  timeout
});

//instance.interceptors.response.use(handleSuccess,handleError);

const handleSuccess = response => response;
const handleError = error => {
  console.error("service error occured", error);
  return Promise.reject(error.response);
};

export const doGet = (
  path,
  config = {
    headers: {
      domain: util.getDomain()
    }
  }
) => {
  const data = instance
    .get(path, config)
    .then(res => {
      let response = null;
      if (res.data) {
        response = res;
      }
      return response;
    })
    .catch(error => error.response);
  return data;
};

export const doPost = (path, body,
  config = {
    headers: {
      domain: util.getDomain()
    }
  }) => {
  const data = instance
    .post(path, body,config)
    .then(res => {
      console.log("res in wrap", res);
      let response = null;
      if (res.data) {
        response = res;
      }
      return response;
    })
    .catch(error => {
      console.log("res err", error);
      return error.response;
    });
  return data;
};

export const doPut = (path, body, 
  config = {
    headers: {
      domain: util.getDomain()
    }
  }) => {
  const data = instance
    .put(path, body,config)
    .then(res => {
      let response = null;
      if (res.data) {
        response = res;
      }
      return response;
    })
    .catch(error => error.response);
  return data;
};
