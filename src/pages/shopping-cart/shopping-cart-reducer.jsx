import * as Types from '../../constants/actionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
//lấy data nếu data tồn tại, ngược lại là rỗng
var initialState = data ? data : [];
export const actAddToCart =(product, quantity)=>{
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
// var initialState=[];
const CartReducer = (state=initialState, action) =>{
    var { product, quantity } = action;
    var index= -1;

    switch(action.type){
        case Types.ADD_TO_CART:
            // state: là ds các sp trong giỏ hàng
            // product: là sp đang mua thêm
            index = findProductInCart(state, product)
            //nếu tìm thấy sp thì cộng dồn vào
            //ngược lại thêm dòng mới
            if(index !== -1){
                state[index].quantity +=quantity;
            }else{
                // console.log("shopping cart reducer ",action)
                //product và quantity lấy trong action
                state.push({
                    product, 
                    quantity
                })
            }
            // set vào localStorage
            localStorage.setItem('CART', JSON.stringify(state))
        return [...state];
        default : return [...state]
      
    }
}
//
var findProductInCart = (cart, product) =>{
    // index = -1 là ko tìm thấy
    var index= -1;
    if(cart.length> 0){
        //lấy id của từng sp trong cart ra xem có trùng id với sp mua thêm ko
        for(var i=0; i<cart.length; i++){
            if(cart[i].product.id === product.id){
                index=i;
                break;
            }
        }
    }
    return index; 
}



export default CartReducer;
