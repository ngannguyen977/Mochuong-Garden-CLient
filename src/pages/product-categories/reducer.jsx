
var initialState = [
    {
        sku: "thaomoc",
        name: "cây huong thảo",
        image:'https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg',
    },
    {
        sku: "senda",
        name: "sen đá móng rồng",
        imageUrl:"https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg"
    },
    {
        sku: "hoahong",
        name: "hoa hồng cổ Huế",
        imageUrl:"https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg"
    }
]
const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
    }
}
export default productCategoriesReducer;