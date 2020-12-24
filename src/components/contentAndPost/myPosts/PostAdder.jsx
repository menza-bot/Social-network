
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { TextArea } from '../../common/FormsController'
//import { onSubmit } from '../../../redux/auth-reducer'
import './PostAdderForm.css'
import { required, maxLengthThunkCreator } from './../../../redux/utilits/validators/validators'




export let PostAdder = React.memo(props => {

    let addPostOnClick = (values) => {
        props.addPost(values.newPostText)
        values.newPostText = ''
    }

    let stupidPosts = props.state.profilePage.posts.map((item) => {
        return <div className = 'stupid-posts-item'><span>Douglas Wraith - </span>{item.message}</div>
    })

    return (
        <PostAdderFormForClient onSubmit = { addPostOnClick } stupidPosts = {stupidPosts} /> // ass
    )
})

const maxLength = maxLengthThunkCreator(150)

export let PostAdderForm = (props) => {
    
    return (
        <form className = 'wrapper-post-adder' onSubmit = {props.handleSubmit}>
            <div className = 'post-adder'>
                <Field className = 'field' name = 'newPostText' placeholder = '' component = {TextArea} validate = {[required, maxLength]}/>
                <button className = 'adder-button'><div className = 'title-of-adder-button'>make a post</div></button>
            </div>
            <div className="stupid-posts">{props.stupidPosts}</div>
        </form>
    )
}

let PostAdderFormForClient = reduxForm({form: 'profileAddNewPostForm'}) (PostAdderForm)