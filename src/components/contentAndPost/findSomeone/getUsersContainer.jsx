//import React from 'react'
import React from 'react'
import { connect } from 'react-redux'
import GetUsersF from './getUsersF'
//import { followAc } from './../../../redux/redux-store'
import { setUsersAC, followAC, unFollowAC, setUsersCurrentAC, toggleIsFollowing, setTotalUsersCount} from '../../../redux/users-reducer'
//import { AddDataAC } from '../../../redux/users-reducer'
import * as axios from 'axios' //how to use axios ?? Good question, ok i can tell you how to make that 
//import preloader from '../../../assets'
import { usersAPI } from './../../../api/api'



class GetUsersContainer extends React.Component {  // 62 make 
    

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
        })
    }


    onPageChanged = (currentPageProps) => {
        this.props.setUsersCurrentPage(currentPageProps);
        //axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageProps}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {this.props.setUsers(response.data.items)})
        usersAPI.getUsers(currentPageProps, this.props.pageSize).then(data => {this.props.setUsers(data.items)})
        //this.props.setUsersCurrentPage(currentPageProps);
    }

    

    
    render() {
        return  <>   

            {/* {this.isFetching ? <img src = {preloader}/> : null} */}
        
            <GetUsersF 
            state = {this.props.state}
            follow = {this.props.follow}
            unFollow = {this.props.unFollow}
            toggleIsFollowing = {this.props.toggleIsFollowing}
            onPageChanged = {this.onPageChanged}/>

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
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setUsersCurrentPage: setUsersCurrentAC,
    }
) (GetUsersContainer)


//console.log(GetUsersContainer);