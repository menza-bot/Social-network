
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { TextArea } from '../../common/FormsController'
//import { onSubmit } from '../../../redux/auth-reducer'

import { required, maxLengthThunkCreator } from './../../../redux/utilits/validators/validators'




export let PostAdder = React.memo(props => {

    let addPostOnClick = (values) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    let stupidPosts = props.state.profilePage.posts.map((item) => {
        return <div>{item.message}</div>
    })

    return (

        <PostAdderFormForClient onSubmit = { addPostOnClick } stupidPosts = {stupidPosts} /> // ass
    )
})

const maxLength20 = maxLengthThunkCreator(20)

export let PostAdderForm = (props) => {
    
    

    return(
        <form className = 'wrapper-post-adder' onSubmit = {props.handleSubmit}>
            <div className="stupidPosts">{props.stupidPosts}</div>  
            <Field name = 'newPostText' placeholder = 'Type Something' component = {TextArea} validate = {[required, maxLength20]}/>
            <div className = "adder"><button className = "adder-button">make a post</button></div> 
        </form>
    )
}

let PostAdderFormForClient = reduxForm({form: 'profileAddNewPostForm'}) (PostAdderForm)