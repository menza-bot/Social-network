import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './auth-reducer'
//import defaultReducer from './default-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
import thunkMiddleware from 'redux-thunk'
//import { followAC, unfollowAC, setUsersAC } from './users-reducer'


let reducers = combineReducers({
    usersPage: usersReducer, 
    profilePage: profileReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)) 

window.store = store

//console.log(store.getState().profileReducer);

export default store
