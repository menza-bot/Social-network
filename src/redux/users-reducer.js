

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
    users: [
        {
            id: 1,
            name: "Pavel",
            toggle: false,
            city: "Minsk"
        },
        {
            id: 2,
            name: "Victor",
            toggle: true,
            city: "Prague"
        },
        {
            id: 3,
            name: "Mukhin",
            toggle: false,
            city: "Vienna"
        }
    ]
}


const usersReducer = (state = initialstate, action) => {
    

        debugger
        switch(action.type) {
            case "FOLLOW":
                return {...state, users: state.users.map(u => {
                    debugger
                    if (u.id === action.userID) {
                        return {...u, toggle: false}
                    }

                    return u
                    })
                }
            case "UNFOLLOW":
                return {...state, users: state.users.map((u) => {
                    
                    if (u.id === action.userID) {
                        return {...u, toggle: true}
                }

                return u
                })
            }
            default: 
                return state

        }
}



export const followAC = (userID) => {
    debugger
    return {
        type: 'FOLLOW',
        userID
    }
}


export const unFollowAC = (userID) => {
    return {
        type: 'UNFOLLOW',
        userID
    }
}


export const setUsersAC = () => {
    
}


export default usersReducer




