import React from 'react' 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {Field, reduxForm} from 'redux-form'
import {LoginThunkCreator} from './../../redux/auth-reducer'
import style from './../../components/common/FormsController.module.css'



// how to login 
const LoginForm = (props) => {
    return(

            <form  onSubmit = {props.handleSubmit}>
                <div>
                    <Field name = {'login'} type="text" placeholder = {'Login'} component = {'input'}/>
                </div>
                <div>
                    <Field name = {'password'} type="password" placeholder = {'Password'} component = {'input'} />
                </div>
                <div>
                    <Field name = {'checkbox'} type="checkbox" component = {'input'}/>
                </div>
                <div>
                    {
                        props.error && <div className = {style.fromSummaryError}>{props.error}</div>
                    }
                </div>
                <div>
                    <button>Submit</button>
                </div>
        </form>
        
            
        
    )
}


const  LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)//  this reduxFrom-function give severela tools to Login


const Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator(formData.login, formData.password)
    }
        
    if (props.isAuth === true) return <Redirect to = {'/profile'} />

    return( 
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit = {onSubmit} />
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
} 



export default connect (mapStateToProps, {LoginThunkCreator}) (Login)



