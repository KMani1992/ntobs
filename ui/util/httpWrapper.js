import axios from 'axios';

const baseURL="";
const timeout=100000;
const instance=axios.create({
    baseURL,
    timeout
});

//instance.interceptors.response.use(handleSuccess,handleError);

const handleSuccess=(response)=> (response);
const handleError=(error)=> {
    console.error("service error occured",error);
    return Promise.reject(error.response);
};

export const doGet=(path)=>{
    const data=instance.get(path).then((res)=>{
        let response=null;
        if(res.data){
            response=res;
        }
        return response;
    }).catch((error)=>(error.response));;
    return data;
};

export const doPost=(path,body)=>{
    const data=instance.post(path,body).then((res)=>{
        console.log("res in wrap",res)
        let response=null;
        if(res.data){
            response=res;
        }
        return response;
    }).catch((error)=>{
        console.log("res err",error);
        return error.response;
    });
    return data;
}

export const doPut=(path,body)=>{
    const data=instance.put(path,body).then((res)=>{
        let response=null;
        if(res.data){
            response=res;
        }
        return response;
    }).catch((error)=>(error.response));
    return data;
}