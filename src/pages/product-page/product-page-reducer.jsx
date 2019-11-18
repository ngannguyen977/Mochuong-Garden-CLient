import callApi from '../../util/apiCall';
import * as Types from '../../constants/actionTypes';

export const actGetProductPageListRequest =()=>{
    return (dispatch) => {
        callApi('products','GET', null).then(res => {
            console.log("res", res)
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

var initialState = []
const productPageListReducer = (state=initialState, action) =>{
    if(action!==undefined){
        switch(action.type){
            case Types.GET_PRODUCT_PAGE_LIST:
            return {...state, dataproducts: action.dataOfProductPageList}
            default: 
                return state
        }
    }
    return state
}

export default productPageListReducer;