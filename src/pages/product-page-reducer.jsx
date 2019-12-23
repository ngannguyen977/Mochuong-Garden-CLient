import callApi from '../util/apiCall';
import * as Types from '../constants/actionTypes';
import {API_URL_PRODUCT_LIST} from '../constants/config';

// PRODUCT LIST 
//tao hàm
export const actGetProductPageListRequest =(categoryId, pageIndex=0,pageSize=3)=>{
    return (dispatch) => {
        let dataAfterPaging =[];
        let url = `${API_URL_PRODUCT_LIST}`
        //nếu có lấy sp theo id thì sẽ show theo
        if(categoryId){
            url = url+`?categoryId=${categoryId}`
        }
        callApi(url,'GET', null).then(res => {
            const dataAfterPaging = res.data.slice((pageIndex -1)*pageSize, pageIndex*pageSize)
            let totalPage = res.data.length/pageSize
            dispatch(actGetProductPageList(res.data))
        })
    }
}
export const actGetProductPageList=(data, totalPage)=>{
    return {
        type: Types.GET_PRODUCT_PAGE_LIST,
        dataOfProductPageList: data,
        totalPage : totalPage
    }
}

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

var initialState = []
const productPageReducer = (state=initialState, action) =>{
    if(action!==undefined){
        switch(action.type){
            case Types.GET_PRODUCT_PAGE_LIST:
                return {...state, dataproducts: action.dataOfProductPageList,totalPage: action.totalPage}
            case Types.GET_PRODUCT_DETAIL:
                return {...state, dataDetail: action.dataOfProductDetail}
            default: 
                return state
        }
    }
    return state
}

export default productPageReducer;