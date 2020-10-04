 const profileReducer = (state, action) => {
    
    if (action.type === 'ADD-POST') {
        let somePost = {
            id: 2, message: action.PostMessage
        }
        state.posts.push(somePost);
    }
    else if (action.type === 'CHANGE-NEW-POST-TEXT') {
        state.newPostText = action.newValue
    }
    return state
}

export default profileReducer