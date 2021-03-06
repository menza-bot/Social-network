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
import { compose } from 'redux'
import { getCurretPage, getPageSize, getTotalUsersCount, getToggleIsFollowing, getUsers } from '../../../redux/selectors/users-selectors'


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
        return   <>   

            {/* {this.isFetching ? <img src = {preloader}/> : null} */}
            
            <GetUsersF 
                users = {this.props.users}
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
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


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurretPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        toggleIsFollowing: getToggleIsFollowing(state)
    }
    
    
} 








/* export default connect (mapStateToProps,
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
 */

export default compose ( connect(mapStateToProps,
    {
        follow: follow,
        unFollow: unFollow,
        setUsersCurrentPage: setUsersCurrent,
        getUsersThunkCreator: getUsersThunkCreator,
        unfollowAcceptThunkCreator: unfollowAcceptThunkCreator,
        followAcceptThunkCreator: followAcceptThunkCreator
    }
)) (GetUsersContainer) 


//console.log(GetUsersContainer);