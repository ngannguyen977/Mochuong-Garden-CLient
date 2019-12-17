import React from 'react';
import { connect } from 'react-redux';
import ProductCategories from './product-categories';
import ProductCategoriesItem from './product-categories-item';
import { actGetProductCategoriesRequest } from './reducer';
import { actGetProductPageListRequest } from '../product-page-reducer';


class ProductCategoriesContainer extends React.Component {

    componentDidMount() {
        this.props.getProductCategoriesFromStore()
        setTimeout(() => {
            //console.log('get category gium TO voi',this.props)
        }, 1000);
    }
    render() {
        var { productCategories } = this.props;
        console.log('product category container', this.props)
        return (
            <div>
                <ProductCategories>
                    {this.showProductCategories(productCategories)}
                </ProductCategories>
            </div>
        );
    }

    showProductCategories(productCategories = []) {
        var result = null;
        var { getProductPageListFromStore } = this.props
        if (productCategories.length > 0) {
            result = productCategories.map((category, index) => {
                return (
                    <ProductCategoriesItem
                        key={index}
                        category={category}
                        getProductPageListFromStore={getProductPageListFromStore}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        productCategories: state.productCategoriesReducer.dataCategories
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getProductCategoriesFromStore: () => {
            dispatch(actGetProductCategoriesRequest()
            )
        },
        //tham so dua vào act trong reducer
        //chuyền prop này lên trên và vào ProductCategoriesItem nhận lại 
        // tại phương thức onSelectedCategoryId ()
        getProductPageListFromStore: (categoryId) => {
            dispatch(actGetProductPageListRequest(categoryId))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoriesContainer);
