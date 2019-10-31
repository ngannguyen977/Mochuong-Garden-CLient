import React ,{Component} from 'react';

class ProductActions extends Component{
    render(){
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form>
                    <div className = "form-group">
                        <label>Tên SP</label>
                        <input type="text" className ="form-control" />
                    </div>
                    <div className = "form-group">
                        <label>Giá</label>
                        <input type="text" className ="form-control" />
                    </div>
                    <div className = "form-group">
                        <label>Trạng thái</label>
                        <input type="text" className ="form-control" />
                    </div>
                    <div className = "checkbox">
                        <label>
                            <input type="checkbox"/>
                            Còn Hàng
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Lưu lại</button>
                    
                </form>
            </div>
            
        )
    }
}
export default ProductActions;