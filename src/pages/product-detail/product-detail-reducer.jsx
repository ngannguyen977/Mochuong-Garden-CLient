import callApi from '../../util/apiCall';
import {API_URL} from '../../constants/config';


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
        type: Types.GET_PRODUCT_CATEGORY,
        dataOfProductDetail: data
    }
}

const ProductPageDetailReducer = () =>{
    switch(ProductActions.type){
        default: return [...state]
    }
}
export default ProductPageDetailReducer;