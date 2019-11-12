
var initialState = [
    {
        sku: "thaomoc",
        name: "cây huong thảo",
        quantity:10,
        image:'https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg',
    },
    {
        sku: "senda",
        name: "sen đá móng rồng",
        quantity:15,
        image:"https://vuondodero.com/wp-content/uploads/2019/04/1-sen-da-mong-rong.jpg"
    },
    {
        sku: "hoahong",
        name: "hoa hồng cổ Huế",
        quantity:20,
        image:"https://live.staticflickr.com/65535/48634116677_dbdfcddcbb_c.jpg"
    },
    {
        sku: "rau cải",
        name: "cây bồ công anh",
        quantity:20,
        image:"https://lamtho.vn/wp-content/uploads/2018/06/Cach-trong-cay-bo-cong-anh-03.jpg"
    }
]
const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
    }
}
export default productCategoriesReducer;