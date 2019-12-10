import callApi from '../../util/apiCall';
import * as Types from '../../constants/actionTypes';
import { API_URL_CATEGORY,API_URL_PRODUCT_CATEGORIES } from '../../constants/config';
import axios from 'axios';

var initialState = [
    // {
    //     sku: "thaomoc",
    //     name: "cây thảo mộc",
    //     categoryId: "TD01",
    //     quantity:10,
    //     image:'https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg',
    // },
    // {
    //     sku: "senda",
    //     name: "cây cảnh",
    //     categoryId: "C01",
    //     quantity:15,
    //     image:"https://product.hstatic.net/1000187613/product/img_1095_9d7d478269bb4666a7d9995f87b603f2_master.jpg"
    // },
    // {
    //     sku: "hoahong",
    //     name: "cây hoa hồng",
    //     categoryId: "H01",
    //     quantity:20,
    //     image:"https://live.staticflickr.com/65535/48634116677_dbdfcddcbb_c.jpg"
    // },
    // {
    //     sku: "rau cải",
    //     name: "cây rau cải",
    //     categoryId: "RA01",
    //     quantity:20,
    //     image:"https://lamtho.vn/wp-content/uploads/2018/06/Cach-trong-cay-bo-cong-anh-03.jpg"
    // }
]
export const actGetProductCategoriesRequest=()=>{
    console.log('enter actGetProductCategoriesRequest ')
    return (dispatch) => {
        // callApi(API_URL_CATEGORY,'GET', null).then(res => {
        //     console.log("api categories", res)
        //     dispatch(actGetProductCategories(res.data))
        // })
        axios.get('http://localhost:4000/categories')
        .then(res=>{
            console.log("api categories", res)
            dispatch(actGetProductCategories(res.data))
        })
        .catch (e => {
            console.log(`Axios request failed: ${e}`)
        });
    }
}
export const actGetProductCategories=(data)=>{
    return {
        type: Types.GET_PRODUCT_CATEGORIES,
        dataOfProductCategories: data,
        
    }
}
const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        case Types.GET_PRODUCT_CATEGORIES:
                return {...state, dataCategories: action.dataOfProductCategories}
        default : return state
    }
}
export default productCategoriesReducer;