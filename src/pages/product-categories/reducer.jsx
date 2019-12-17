import * as Types from '../../constants/actionTypes';
import axios from 'axios';

var initialState = [
   
]
export const actGetProductCategoriesRequest=()=>{
    console.log('enter actGetProductCategoriesRequest ')
    return (dispatch) => {
        axios.get('http://localhost:4000/categories')
        .then(res=>{
            dispatch(actGetProductCategories(res.data))
        })
        .catch (e => {
        });
    }
}
export const actGetProductCategories=(data)=>{
    return {
        type: Types.GET_PRODUCT_CATEGORIES,
        dataOfProductCategories: data,
        
    }
}

export const actGetProductCategoriesByid=(data)=>{
    return {
        type: Types.FILTER_CATEGORIES,
        dataOfFilterCategories: data,
        
    }
}

const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        case Types.GET_PRODUCT_CATEGORIES:
                return {...state, dataCategories: action.dataOfProductCategories}
        case Types.FILTER_CATEGORIES:
            return {...state, dataFilterCategories: action.dataOfFilterCategories}
        default : return state
    }
}
export default productCategoriesReducer;