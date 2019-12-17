import callApi from '../util/apiCall';
import * as Types from '../constants/actionTypes';
import {API_URL_PRODUCT_LIST} from '../constants/config';

// PRODUCT LIST 
export const actGetProductPageListRequest =(pageIndex=0, pageSize=3)=>{
    return (dispatch) => {
        callApi(`${API_URL_PRODUCT_LIST}?pageIndex=${pageIndex}&pageSize=${pageSize}`,'GET', null).then(res => {
            dispatch(actGetProductPageList(res.data, res.total))
        })
    }
}
export const actGetProductPageList=(data, totalPage)=>{
    return {
        type: Types.GET_PRODUCT_PAGE_LIST,
        dataOfProductPageList: data,
        totalPage: totalPage
        
    }
}
// console.log("totalPage",totalPage)
// PRODUCT DETAIL
export const actGetProductByIdRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductById(res.data))
        })
    }
}

export const actGetProductById = (data) => {
    return {
        type: Types.GET_PRODUCT_DETAIL,
        dataOfProductDetail: data
    }
}
// export const actChangeLabel=(product, quantity)=>{
//     return{
//         type: Types.CHANGE_LABEL,
//         product,
//         quantity
//     }
// }
var initialState = []
const productPageReducer = (state=initialState, action) =>{
    if(action!==undefined){
        switch(action.type){
            case Types.GET_PRODUCT_PAGE_LIST:
                return {...state, dataproducts: action.dataOfProductPageList, totalPage: action.totalPage}
            case Types.GET_PRODUCT_DETAIL:
                return {...state, dataDetail: action.dataOfProductDetail}
            // case Types.CHANGE_LABEL:
            // return {...state, productInStore: action.product}
            default: 
                return state
        }
    }
    return state
}

export default productPageReducer;