import * as Types from '../../constants/actionTypes';

var data = JSON.parse(localStorage.getItem('CART'));
//lấy data nếu data tồn tại, ngược lại là rỗng
var initialState = data ? data : [];
///ADD
export const actAddToCart =(product, quantity)=>{
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
///DELETE
export const actDeleteInCart = (product) =>{
    
   return{
    type: Types.DELETE_PRODUCT_CART,
    product
   }
}
export const actUpdateQuantity =(product, quantity)=>{
    return {
        type:Types.UPDATE_PRODUCT_QUANTITY,
        product,
        quantity
    }
}
// var initialState=[];
const CartReducer = (state=initialState, action) =>{
    //action nhận được sẽ  bao gồm action.product và action.quantity
    var { product, quantity } = action;
    // console.log("ssdsaasasdasd",action)
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

        case Types.DELETE_PRODUCT_CART:
            index = findProductInCart(state, product);
            if(index !==-1){
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
        return [...state]
        case Types.UPDATE_PRODUCT_QUANTITY:
            index= findProductInCart(state, product);
            if(index !==-1){
                // = quantity moi (phải) được chuyền vào từ action
                state[index].quantity = quantity
            }
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
