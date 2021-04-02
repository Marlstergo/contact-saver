import { useCallback } from 'react'
import UserActionTypes from './user.types'
const INITIAL_STATE = {
    currentUser: null,
    error: null,
    contact: []
}
const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
        
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        
        case UserActionTypes.CHECK_USER_SESSION:

            return {
                ...state,
                currentUser: action.payload,
                
            }
        case UserActionTypes.SIGN_OUT_USER_SUCCESS:
            return{
                ...state,
                currentUser: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_USER_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case UserActionTypes.ADD_CONTACT:
            return{
                ...state
            }
        case UserActionTypes.LOAD_CONTACTS_TO_STATE:
            return {
                ...state,
                contact: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;