//import './PostAdder.css'
//import React from 'react'
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../redux/profile-reducer'
import {PostAdder, PostAdderForm} from './PostAdder'
import { connect } from 'react-redux'

//import StoreContext from '../../../storeContext'


//export default function PostAdderContainer() {

    //console.log(props.state.profileReducer.posts);

    //let stupidPosts = props.state.profileReducer.posts.map((item) => {
    //    return <div>{item.message}</div>
    //})

    //console.log(props.state.posts[0]);

    //let one = props.state.posts[0]

    //let TextOfNewPostElement = React.createRef()

    //debugger

    //let addPostOnClick = (newText) => {
        //let newText = TextOfNewPostElement.current.value;
        //props.dispatch(addPostActionCreator(newText))
        //props.addPost(newText)
        //TextOfNewPostElement.current.value = ''

    //}
    
    //debugger

    //let onChangeWatcher = (newValue) => {
        //let newValue = TextOfNewPostElement.current.value;
        //console.log(newValue);
        //props.dispatch(changeNewPostTextActionCreator(newValue))
        //props.changeNewPostText(newValue)
    //}

    

    //return(
    //    <StoreContext.Consumer> 
    //        { (store) => {
    //           
    //            let addPostOnClick = (newText) => {
                    //let newText = TextOfNewPostElement.current.value;
    //                store.dispatch(addPostActionCreator(newText))
                    //props.addPost(newText)
                    //TextOfNewPostElement.current.value = ''
                    
    //            }
                
                //debugger
            
    //            let onChangeWatcher = (newValue) => {
                    //let newValue = TextOfNewPostElement.current.value;
                    //console.log(newValue);
    //                store.dispatch(changeNewPostTextActionCreator(newValue))
                    //props.changeNewPostText(newValue)
    //            }
    //            return <PostAdder state = {store.getState()} changeNewPostText = {onChangeWatcher} addPost = {addPostOnClick}/>
    //       }
    //    }
    //    </StoreContext.Consumer>
    //)
//}



let mapStateToProps = (store) => {
    return {
        state: store
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeNewPostText: (newValue) => {
            dispatch(changeNewPostTextActionCreator(newValue))
        },
        addPost: (newText) => {
            dispatch(addPostActionCreator(newText))
        }
    }
}



const PostAdderContainer = connect(mapStateToProps, mapDispatchToProps) (PostAdderForm)

export default PostAdderContainer