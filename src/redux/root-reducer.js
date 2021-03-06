import {combineReducers} from 'redux'
import userReducer, { currentUser } from './user/user.reducer'
// import cartReducer from './cart/cart.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import directoryReducer from './directory/directory.reducer'
// import shopReducer from './shop/shop.reducer'

const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['user' ]
}
const rootReducer = combineReducers({
    user: userReducer,
    currentUser: currentUser
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer
})
export default persistReducer(persistConfig, rootReducer)


