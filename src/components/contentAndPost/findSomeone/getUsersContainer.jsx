//import React from 'react'
import React from 'react'
import { connect } from 'react-redux'
import GetUsersF from './getUsersF'
//import { followAc } from './../../../redux/redux-store'
import { follow, unFollow, setUsersCurrent, getUsersThunkCreator, unfollowAcceptThunkCreator, followAcceptThunkCreator} from '../../../redux/users-reducer'
//import { AddDataAC } from '../../../redux/users-reducer'
//import * as axios from 'axios' //how to use axios ?? Good question, ok i can tell you how to make that 
//import preloader from '../../../assets'
//import { usersAPI } from './../../../api/api'



class GetUsersContainer extends React.Component {  // 62 make 
    

    componentDidMount() {
        /* usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        }) */
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (currentPageProps) => {
        //this.props.setUsersCurrentPage(currentPageProps);
        //usersAPI.getUsers(currentPageProps, this.props.pageSize).then(data => {this.props.setUsers(data.items)})
        this.props.getUsersThunkCreator(currentPageProps, this.props.pageSize)
    }

    

    
    render() {
        return  <>   

            {/* {this.isFetching ? <img src = {preloader}/> : null} */}
        
            <GetUsersF 
                state = {this.props.state}
                //follow = {this.props.follow}
                //unFollow = {this.props.unFollow}
                toggleIsFollowing = {this.props.toggleIsFollowing}
                onPageChanged = {this.onPageChanged}
                unfollowAcceptThunkCreator = {this.props.unfollowAcceptThunkCreator}
                followAcceptThunkCreator = {this.props.followAcceptThunkCreator}
            />
                </> 
    }
}


let mapStateToProps = (store) => {
    console.log(store);
    return {
        state: store,
        currentPage: store.usersPage.currentPage,
        pageSize: store.usersPage.pageSize,
        totalUsersCount: store.usersPage.totalUsersCount,
        toggleIsFollowing: store.usersPage.toggleIsFollowing
    }
    
    
}




/* let mapDispatchToProps = (dispatch) => {
    return {
        
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersCurrentPage: (currentPageProps) => {
            dispatch(setUsersCurrentAC(currentPageProps))
        }
    }
} */



export default connect (mapStateToProps,
    {
        follow: follow,
        unFollow: unFollow,
        //setUsers: setUsers,
        setUsersCurrentPage: setUsersCurrent,
        getUsersThunkCreator: getUsersThunkCreator,
        unfollowAcceptThunkCreator: unfollowAcceptThunkCreator,
        followAcceptThunkCreator: followAcceptThunkCreator
    }
) (GetUsersContainer)


//console.log(GetUsersContainer);