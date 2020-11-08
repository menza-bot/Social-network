import  { usersAPI } from './../api/api'

//let initialstate1 = {
//    listOfUsers: [
        /* {
            name: 'Maxim',
            status: 'bla bla bla',
            city: 'Mocsow',
            toggle: true,
            id: 1
        },
        {
            name: 'Kate',
            status: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus...',
            city: 'Los Angeles',
            toggle: true,
            id: 2
        },
        {
            name: 'Kurt',
            status: 'Et harum quidem rerum facilis est et expedita distinctio, qui...',
            city: 'Vienna',
            toggle: false,
            id: 3
        },
        {
            name: 'ZanYang',
            status: 'Sed ut perspiciatis, qui blanditiis praesentium voluptatum deleniti atque corrupti,...',
            city: 'Beijing',
            toggle: true,
            id: 4
        } */
//    ]
//}

let initialstate = {
    users: [],
    totalUsersCount: 25,
    pageSize: 5,
    currentPage: 1,
    isFetching: true, // loading page
    followingInProgress: false // disabling page during ajax requesting
}


const usersReducer = (state = initialstate, action) => {
    

        
        switch(action.type) {
            case "FOLLOW":
                return {...state, users: state.users.map(u => {
                    
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }

                    return u
                    })
                }
            case "UNFOLLOW":
                return {...state, users: state.users.map((u) => {
                    
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                }

                return u
                })
            }
            case "SET-USERS": {
                return {...state, users: action.users}
            }
            case "SET-USERS-CURRENTPAGE": {
                return {...state, currentPage: action.currentPageProps}
            }
            case "TOGGOLE-IS-FOLLOWING": {
                return {...state, followingInProgress: action.isFetching}
            }
            default:  // this is default 
                return state

        }
}



export const follow = (userID) => {
    
    return {
        type: 'FOLLOW',
        userID
    }
}


export const unFollow = (userID) => {
    return {
        type: 'UNFOLLOW',
        userID
    }
}


export const setUsers = (users) => {
    return {
        type: 'SET-USERS',
        users
    }
}

export const setUsersCurrent = (currentPageProps) => {
    return {
        type: 'SET-USERS-CURRENTPAGE',
        currentPageProps
    }
}



export const followAcceptThunkCreator = (userID) => {
    return (dispatch) => {
        usersAPI.makeUsersFollowed(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userID))
            }
            //props.toggleIsFollowing(false)

        }) 
    }
}

export const unfollowAcceptThunkCreator = (userID) => {
    return (dispatch) => {
        usersAPI.makeUsersUnfollowed(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userID))
            }
            //props.toggleIsFollowing(false)
        })
    }
}


export const getUsersThunkCreator = (currentPage, pageSize) => { // here you also need to add toggle and loader 
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
        }) 
    }

}





//how we gonna make thunks


/* export const getUsersThunk = (dispatch) => {
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        this.props.setUsers(response.items)
        })
} */

export default usersReducer // we need




