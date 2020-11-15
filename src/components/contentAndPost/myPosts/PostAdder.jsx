import './PostAdder.css'
import React from 'react'
//import {addPostActionCreator, changeNewPostTextActionCreator} from './../../../redux/profile-reducer'
import {Field, reduxForm} from 'redux-form'
import { onSubmit } from '../../../redux/auth-reducer'







export const PostAdderForm = (props) => {

    let stupidPosts = props.state.profilePage.posts.map((item) => {
        return <div>{item.message}</div>
    })

    let TextOfNewPostElement = React.createRef()

    let addPostOnClick = () => {
        let newText = TextOfNewPostElement.current.value;
        props.addPost(newText)
        TextOfNewPostElement.current.value = ''

    }

    function onChangeWatcher() {
        let newValue = TextOfNewPostElement.current.value;
        props.changeNewPostText(newValue)
    }

    return(
        <div className = 'wrapper-post-adder' onSubmit = {props.handleSubmit}>
            <div className="stupidPosts">{stupidPosts}</div>                                                                                       
            <textarea value = {props.state.profilePage.newPostText.value} ref = {TextOfNewPostElement} onChange = {onChangeWatcher} />
            <div className = "adder"><button onClick = {addPostOnClick} className = "adder-button">make a post</button></div>
        </div>
    )
}



