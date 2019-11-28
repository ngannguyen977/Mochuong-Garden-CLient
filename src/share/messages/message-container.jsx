import {connect} from 'react-redux';
import MessageComponent from './message';
import "./message.css";

const mapStateToProps = state =>{
    console.log("state conteiner", state)
    return {
        message: state.message
    }
}
export default connect(mapStateToProps, null)(MessageComponent);
