//import React from 'react'
import { connect } from 'react-redux'
import GetUsers from './getUsers'
//import { followAc } from './../../../redux/redux-store'
import { setUsersAC, followAC, unFollowAC} from '../../../redux/users-reducer'
//import { AddDataAC } from '../../../redux/users-reducer'




let mapStateToProps = (store) => {
    return {
        state: store
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: () => {
            dispatch(setUsersAC())
        }
    }
}



const GetUsersContainer = connect (mapStateToProps, mapDispatchToProps) (GetUsers)

export default GetUsersContainer