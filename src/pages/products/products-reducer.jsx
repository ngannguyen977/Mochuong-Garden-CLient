// import * as Types from '././../constants/actionTypes';

var initialState = [
    {
        id: 1,
        name: 'iphone x',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'iphone 8',
        price: 700,
        status: false
    },
    {
        id: 3,
        name: 'iphone 6',
        price: 2000,
        status: true
    }
]
const productReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
      
    }
}

export default productReducer;