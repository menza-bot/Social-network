import React from 'react' 
import { connect } from 'react-redux'
import { compose } from 'redux'

import {Field, reduxForm} from 'redux-form'
import {LoginThunkCreator} from './../../redux/auth-reducer'





const Login = (props) => {
    

    console.log(props.onSubmit)

    
    return(
        <div>
            <form action=""  onSubmit = {props.handleSubmit}>
                <div>
                    <Field name = {'login'} type="text" placeholder = {'Login'} component = {'input'}/>
                </div>
                <div>
                    <Field name = {'password'} type="text" placeholder = {'Password'} component = {'input'} />
                </div>
                <div>
                    <Field name = {'checkbox'} type="checkbox" component = {'input'}/>
                </div>
                <div>
                    <button onClick = {props.onSubmit}>Submit</button>
                </div>
        </form>
        </div>
            
        
    )
}


const  LoginReduxForm = reduxForm({form: 'login'}) (Login)//  this reduxFrom-function give severela tools to Login


export const MainLogin = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator(formData.login, formData.password)
    } 

    return( 
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit = {onSubmit}  />
        </div>
    )
}


let mapStateToProps = (store) => {
    return {
        state: store,
    }
}

export default compose(connect(mapStateToProps, {LoginThunkCreator: LoginThunkCreator})) (MainLogin)



