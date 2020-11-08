let initialState = { 
    posts: [
        {id: 0, message: "What's up"}, 
        {id: 1, message: "How are you"}
    ],
    newPostText:  {value:''},
    listOfNamesData : [
        {name: "Alex", id: 1}, 
        {name: "Mark", id: 2}, 
        {name: "Dima", id: 3}, 
        {name: "Mukhsin", id: 4}, 
        {name: "Richard", id: 5},
        {name: "Otto", id: 6},
        {name: "Gunna", id: 7}
    ],
    profile: null
}







const profileReducer = (state = initialState, action) => {
    

    switch(action.type) {
        case 'ADD-POST': {
            let somePost = {
                id: 2, message: action.PostMessage
            }
            let stateCopy = {...state}
            //console.log(stateCopy);
            
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(somePost);
            return stateCopy 
        }
        case 'CHANGE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newValue
            return stateCopy
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default: 
            return state
    }

    
    /* if (action.type === 'ADD-POST') {
        let somePost = {
            id: 2, message: action.PostMessage
        }
        let stateCopy = {...state}
        //console.log(stateCopy);
        
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(somePost);
        return stateCopy //how to make this kind of prepadn and what to do this kind /
    }
    else if (action.type === 'CHANGE-NEW-POST-TEXT') {
        let stateCopy = {...state}
        stateCopy.newPostText = action.newValue
        return stateCopy
    }
    else if (action.type === 'SET-USER-PROFILE') {
        
        return {...state, profile: action.profile}
    }
    return state */
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

export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}


export default profileReducer