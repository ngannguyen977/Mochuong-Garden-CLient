import * as Types from '../../constants/actionTypes';
import * as Message from '../../constants/message';

export const actAddMessage =(message)=>{
    // this.Message.MSG_ADD_SUCCESS)
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
} 

var initialState = "";
const MessageReducer = (state=initialState, action)=> {
 switch(action.type){
    case Types.CHANGE_MESSAGE:
        console.log("meassage", action)
        //trong action có
        return  action.message
    default: return state;
 }

}

export default MessageReducer;
