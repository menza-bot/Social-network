let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            } 
        }
        default: return state
    }
}


export let setUserData = (userId, email, login) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login
        }
    }
}

export default authReducer