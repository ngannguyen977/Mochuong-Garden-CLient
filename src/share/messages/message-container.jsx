import {connect} from 'react-redux';
import Message from './message';
import "./message.css";

const mapStateToProps = state =>{
    console.log("message from store", massage)
    return {
        message: state.MessageReducer.messageFromStore
    }
}

export default connect(mapStateToProps, null)(Message);
