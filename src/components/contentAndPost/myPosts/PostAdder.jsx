import './PostAdder.css'
import React from 'react'
//import {addPostActionCreator, changeNewPostTextActionCreator} from './../../../redux/profile-reducer'



export default function PostAdder(props) {

    console.log(props.state.profilePage.posts);

    let stupidPosts = props.state.profilePage.posts.map((item) => {
        return <div>{item.message}</div>
    })

    //console.log(props.state.posts[0]);

    //let one = props.state.posts[0]

    let TextOfNewPostElement = React.createRef()

    //debugger

    let addPostOnClick = () => {
        let newText = TextOfNewPostElement.current.value;
        props.addPost(newText)
        TextOfNewPostElement.current.value = ''

    }
    
    //debugger

    function onChangeWatcher() {
        let newValue = TextOfNewPostElement.current.value;
        //console.log(newValue);
        //props.dispatch(changeNewPostTextActionCreator(newValue))
        props.changeNewPostText(newValue)
    }

    //console.log(props.state);

    return(
        <div className = 'wrapper-post-adder'>
            <div className="stupidPosts">{stupidPosts}</div>                                                                                       
            <textarea value = {props.state.profilePage.newPostText.value} ref = {TextOfNewPostElement} onChange = {onChangeWatcher} />
            <div className = "adder"><button onClick = {addPostOnClick} className = "adder-button">make a post</button></div>
        </div>
    )
}