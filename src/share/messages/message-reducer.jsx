import * as Types from '../../constants/actionTypes';
import * as Message from '../../constants/message';

export const actAddMessage =(message)=>{
    return {
        type: Message.MSG_ADD_SUCCESS,
        message: message
    }
} 

var initialState = "";
const MessageReducer = (state=initialState, action)=> {
 switch(action.type){
    case Message.MSG_ADD_SUCCESS:
        console.log("message from store", state)
        return {...state, messageFromStore: action.message}
    default: return state;
 }

}

export default MessageReducer;
