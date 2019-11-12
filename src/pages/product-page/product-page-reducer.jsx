// import * as Types from '././../constants/actionTypes';

var initialState = [
    {
        id: 1,
        name: 'cây hương thảo',
        image:"https://miro.medium.com/max/4096/1*JOFboJ84dGOxgkKWvmVGKg.jpeg",
        price: 500,
        status: true,
        feature:'ưa nắng',
        des:"Là giống bạc hà ưu việt nhất vì lớn nhanh, ít sâu bệnh so với những dòng bạc hà khác. Được sử dụng để chiết xuất tinh dầu, pha trà, làm sữa rửa mặt, xay sinh tố, làm gia vị trong các món ăn và thảo dược chữa bệnh."
    },
    {
        id: 2,
        name: 'cây hương nhu',
        image:"https://congdungcuacay.com/wp-content/uploads/2019/05/tinh-dau-huong-thao.jpg",
        price: 700,
        status: false,
        feature:'ưa nắng',
        des:"Là giống bạc hà ưu việt nhất vì lớn nhanh, ít sâu bệnh so với những dòng bạc hà khác. Được sử dụng để chiết xuất tinh dầu, pha trà, làm sữa rửa mặt, xay sinh tố, làm gia vị trong các món ăn và thảo dược chữa bệnh."
    },
    {
        id: 3,
        name: 'Bạc hà mint',
        image:"https://miro.medium.com/max/648/0*p9DL5gpH_TPAz_Gs.jpg",
        price: 2000,
        status: true,
        feature:'ưa nắng',
        des:"Là giống bạc hà ưu việt nhất vì lớn nhanh, ít sâu bệnh so với những dòng bạc hà khác. Được sử dụng để chiết xuất tinh dầu, pha trà, làm sữa rửa mặt, xay sinh tố, làm gia vị trong các món ăn và thảo dược chữa bệnh."
    }
]
const productPageListReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
      
    }
}

export default productPageListReducer;