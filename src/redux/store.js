//import { rerenderEntireTree } from "../render"
import  profileReducer from './profile-reducer'





let store = {
        _state: {
            listOfNamesData : [
                {name: "Alex", id: 1}, 
                {name: "Mark", id: 2}, 
                {name: "Dima", id: 3}, 
                {name: "Mukhsin", id: 4}, 
                {name: "Richard", id: 5},
                {name: "Otto", id: 6},
                {name: "Gunna", id: 7}
            ],
            posts: [
                {id: 0, message: "What's up"}, 
                {id: 1, message: "How are you"}
            ],
            newPostText:  {value:''}
        },
        
        dispatch(action) {

            this._state = profileReducer(this._state, action)

            //if (action.type === 'ADD-POST') {
            //    let somePost = {
            //       id: 2, message: action.PostMessage
            //    }
            //    this._state.posts.push(somePost);
            //    this.rerenderEntireTree(this._state);
            //}
            //else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            //    this._state.newPostText = action.newValue
            //    this.rerenderEntireTree(this._state);
            //}
            this.rerenderEntireTree(this._state)
        },

        rerenderEntireTree() {
            console.log('State is changed');
        },
        getState() {
            return this._state
        },
        //addPost(PostMessage) {
        //   let somePost = {id: 2, message: PostMessage}
        //   this._state.posts.push(somePost);
        //    this.rerenderEntireTree(this._state);
        //},
        //changeNewPostText(newValue) {
        //    this._state.newPostText = newValue
        //    this.rerenderEntireTree(this._state);
        //},
        subscribe(observer) {
            this.rerenderEntireTree = observer // pattern 
        }
        

}



export const addPostActionCreator = (newText) => {
    return {
        type: 'ADD-POST',
        PostMessage: newText
    }
}

export const changeNewPostTextActionCreator = (newValue) => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newValue: newValue
    }
}



    


export default store