import callApi from '../../util/apiCall';
import * as Types from '../../constants/actionTypes'


export const actGetProductByIdRequest = (id) => {
    return (dispatch) => {
        callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProductById(res.data))
        })
    }
}
////
export const actGetProductById = (data) => {
    return {
        type: Types.GET_PRODUCT_DETAIL,
        dataOfProductDetail: data
    }
}

const initialState =[];
export default function ProductPageDetailReducer(state=initialState,action ){
    switch(action.type){
        default: return [...state]
    }
}