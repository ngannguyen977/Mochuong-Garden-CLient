
var initialState = [
    {
        id: 1,
        name: 'cây bạc hà',
        price: 500,
        status: true
    },
    {
        id: 2,
        name: 'cây hương thảo',
        price: 700,
        status: false
    },
    {
        id: 3,
        name: 'Cây sương sáo',
        price: 2000,
        status: true
    }
]
const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
    }
}
export default productCategoriesReducer;