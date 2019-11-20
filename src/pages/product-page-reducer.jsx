import callApi from '../util/apiCall';
import * as Types from '../constants/actionTypes';

// PRODUCT LIST 
export const actGetProductPageListRequest =()=>{
    return (dispatch) => {
        callApi('products','GET', null).then(res => {
            dispatch(actGetProductPageList(res.data))
        })
    }
}
export const actGetProductPageList=(data)=>{
    return {
        type: Types.GET_PRODUCT_PAGE_LIST,
        dataOfProductPageList: data
    }
}

// PRODUCT DETAIL
export const actGetProductByIdRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'GET', null).then(res => {
        console.log("res",res)
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


var initialState = []
const productPageReducer = (state=initialState, action) =>{
    if(action!==undefined){
        switch(action.type){
            case Types.GET_PRODUCT_PAGE_LIST:
                return {...state, dataproducts: action.dataOfProductPageList}
            case Types.GET_PRODUCT_DETAIL:
                return {...state, dataDetail: action.dataOfProductDetail}
            default: 
                return state
        }
    }
    return state
}

export default productPageReducer;