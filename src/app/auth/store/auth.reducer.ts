import * as authenticationAction from './auth.action';

export interface State{
    token:string;
    authentication:boolean;
}

const initialStates:State={
    token:null,
    authentication:false
}

export function authReducers(state=initialStates,action:authenticationAction.AuthAction){

    switch(action.type){
        case authenticationAction.SIGNIN:
        case authenticationAction.SIGNUP:
            return{
                ...state,
                authentication:true
            };
        case authenticationAction.LOGOUT:
            return{
                ...state,
                token:null,
                authentication:false
            };
        case authenticationAction.GETTOKEN:
            return{
                ...state,
                token:action.payload
            }
        default:
            return state;
    }

}