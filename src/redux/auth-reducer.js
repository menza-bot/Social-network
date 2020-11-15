import {authAPI} from '../api/api'



let initialState = {
    userId: null,
    email: '',
    login: '',
    isAuth: false,
    password: ''
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
        case 'ON-SUBMIT': {
            return {
                ...state,
                ...action.password,
                ...action.email,
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

export let onSubmit = (email, password) => {
    return {
        type: 'ON-SUBMIT',
        email,
        password
    }
}

/* export let setLoginData = (email, password, rememberMe) => {
    return {
        type: 'SET-LOGIN-DATA',
        data: {
            email,
            password,
            rememberMe
        }
    }
} */

export const AuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data //To refresh it in your mind visit learn.javascript.ru
                dispatch(setUserData(id, email, login))
            }
        })
    }
}

export const LoginThunkCreator = (email, password) => {
    return (dispatch) => {
        authAPI.getLogin(email, password).then(response => {
            if (response.data.resultCode === 1) {
                dispatch(onSubmit(email, password))
            }
        })
    }
}

/* export const LoginThunkCreator = () => {
    return(dispatch) => {
        authAPI.getLogin().then(response => {
            if (response.data.resultCode === 1) {
                let {email, password, rememberMe} = response.data.data
                dispatch(setLoginData(email, password, rememberMe))
            }
        })
    }
}   */

export default authReducer