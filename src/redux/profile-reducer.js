import { profileAPI, usersAPI } from './../api/api'

let initialState = { 
    posts: [
        {id: 0, message: "What's up"}, 
        {id: 1, message: "How are you"}
    ],
    listOfNamesData : [
        {name: "Alex", id: 1}, 
        {name: "Mark", id: 2}, 
        {name: "Dima", id: 3}, 
        {name: "Mukhsin", id: 4}, 
        {name: "Richard", id: 5},
        {name: "Otto", id: 6},
        {name: "Gunna", id: 7}
    ],
    profile: null,
    status: ''
}







const profileReducer = (state = initialState, action) => {
    

    switch(action.type) {
        case 'ADD-POST': {
            let somePost = {
                id: 2, message: action.PostMessage
            }
            let stateCopy = {...state}
            console.log(stateCopy);
            
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(somePost);
            return stateCopy 

        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'SET-PHOTO': {
            return {...state, profile: {...state.profile, photos: action.photos}}
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

export const addPostActionCreator = (newPostText) => {
    return {
        type: 'ADD-POST',
        PostMessage: newPostText
    }
}



export const setUserProfile = (profile) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET-STATUS',
        status
    }
}

export const setPhoto = (file) => {
    return {
        type: 'SET-PHOTO',
        file
    }
}

export const getProfileThunkCreator = (userId) => 
    (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
        

export const getStatusThunkCreator = (userId) => 
    (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }

export const updateStatusThunkCreator = (status) => 
    (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }

export const savePhotoThunkCreator = (file) => 
    (dispatch) => {
        profileAPI.savePhoto(file).then(response => {
            if (response.data.resultCode === 0)
            {
                dispatch(setPhoto(response.data.data.photos))
            }
        })
    }





export default profileReducer