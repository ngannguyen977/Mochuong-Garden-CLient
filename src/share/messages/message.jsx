import React, {Component} from 'react';
class MessageComponent extends Component {
   
    render(){
        var {message} = this.props
        console.log("da nhan duoc message chua", this.props)
        return (
            <div className="message-wrapper">
                <i className="fas fa-check"></i>
                <h3>{message}</h3>
            </div>
        )
    }
}
export default MessageComponent;