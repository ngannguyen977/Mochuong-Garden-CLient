import axios from 'axios';
import * as config from './../constants/config.jsx';

// chuyền vào 3 ts:
// endpoint, method, data (body)
export default function callApi(endpoint, method="GET", body){
     return  axios({
        //method,url,body ben phai la tham so chuyền vào
        method: method,
        url:`${config.API_URL}/${endpoint}`,
        data:body
        //body này có thể null
    }).catch (err =>{
        console.log(err);
    })
 }
 
 // -> su dung caLLApi() tại product-page-reducer