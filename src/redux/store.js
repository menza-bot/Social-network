//import { rerenderEntireTree } from "../render"






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
        

        rerenderEntireTree() {
            console.log('State is changed');
        },
        getState() {
            return this._state
        },
        addPost(PostMessage) {
            let somePost = {id: 2, message: PostMessage}
            this._state.posts.push(somePost);
            this.rerenderEntireTree(this._state);
        },
        changeNewPostText(newValue) {
            this._state.newPostText = newValue
            this.rerenderEntireTree(this._state);
        },
        subscribe(observer) {
            this.rerenderEntireTree = observer // pattern 
        }
        

    }

    


export default store