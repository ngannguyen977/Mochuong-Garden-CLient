import callApi from '../util/apiCall';
import * as Types from '../constants/actionTypes';
import {API_URL_PRODUCT_LIST} from '../constants/config';

// PRODUCT LIST 
//tao hàm
export const actGetProductPageListRequest =(categoryId, pageIndex)=>{
    return (dispatch) => {
        const pageSize = 3;
        // const pageIndex = 1;
        let url = `${API_URL_PRODUCT_LIST}`
        //nếu có lấy sp theo id thì sẽ show theo
        if(categoryId){
            url = url+`?categoryId=${categoryId}`
        }
        callApi(url,'GET', null).then(res => {
            const dataAfterPaging = res.data.slice(pageIndex*pageSize,((pageIndex+1)*pageSize))
            const totalPage = res.data.length/pageSize
            console.log("page index", pageIndex)
             console.log("dataAfterPaging",dataAfterPaging)
             console.log("totalPage ",totalPage)
            dispatch(actGetProductPageList(dataAfterPaging,totalPage))
        })
    }
}
export const actGetProductPageList=(dataAfterPaging,totalPage)=>{
    return {
        type: Types.GET_PRODUCT_PAGE_LIST,
        dataAfterPaging:dataAfterPaging,
        totalPage:totalPage
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
                console.log('in ra con TO',state,action)
                return {...state, dataproducts: action.dataAfterPaging,totalPage: action.totalPage}
            case Types.GET_PRODUCT_DETAIL:
                return {...state, dataDetail: action.dataOfProductDetail}
            default: 
                return state
        }
    }
    return state
}

export default productPageReducer;