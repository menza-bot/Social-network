import { combineReducers, createStore } from 'redux'
//import defaultReducer from './default-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'
//import { followAC, unfollowAC, setUsersAC } from './users-reducer'


let reducers = combineReducers({
    usersPage: usersReducer, 
    //usersPage: defaultReducer,
    profilePage: profileReducer
})

let store = createStore(reducers)

window.store = store

//console.log(store.getState().profileReducer);

export default store
