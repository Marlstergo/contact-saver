import UserActionTypes from './user.types'
import { removeContact, editContact } from './user.utils'
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
        case UserActionTypes.EDIT_CONTACT:
            return{
                ...state,
                contact: editContact(state.contact, action.payload)
            }
        case UserActionTypes.DELETE_CONTACT:
            return{
                ...state,
                contact: removeContact(state.contact, action.payload)
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
export const currentUser = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {        
                ...state,
                currentUser: action.payload,
                error: null
            }
        
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_USER_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            
        default:
            return state;
        }
        
    }
export default userReducer;