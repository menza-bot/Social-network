import { resetSection, stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'


let initialState = {
    userId: null,
    email: null,
    login: null,
    logout: null,
    isAuth: false,
    password: null,
    captchaUrl: null
}


const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data
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


export let setUserData = (userId, email, login, isAuth) => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId,
            email,
            login,
            isAuth
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

export let setLoginData = (email, password) => {
    return {
        type: 'SET-LOGIN-DATA',
        data: {
            email,
            password
        }
    }
} 

export let getCaptchaSuccess = (captchaUrl) => {
    return {
        type: 'GET-CAPTCHA-SUCCESS',
        captchaUrl
    }
}
    


export const AuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data //To refresh it in your mind visit learn.javascript.ru
                dispatch(setUserData(id, email, login, true))
            }
        })
        return 'hey'
    }
    
}

export const LoginThunkCreator = (email, password) => 
    (dispatch) => {
        authAPI.getLogin(email, password).then(response => {
            if (response.data.resultCode ===  0) {
                dispatch(AuthThunkCreator())
            }
            
            else {

                if (response.data.resultCode === 10) {
                    dispatch(CaptchaThunkCreator())
                }

                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message})) // stopSubmit how to make this kind of prepand and what to do 
            }
        }) // the teaser and how to make this king of prepand and how to make this kind of meaning and what to do else 
    }



export const LogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.getLogout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}


export const CaptchaThunkCreator = () => {
    return (dispatch) => {
        securityAPI.getCaptcha().then(response => {
                const captchaUrl = response.data.url
                dispatch(getCaptchaSuccess(captchaUrl))
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