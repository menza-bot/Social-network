import profileReducer, { addPostActionCreator } from './profile-reducer'


test('length should be increased', () => {
    let action = addPostActionCreator('hey man')

    let state = { 
        posts: [
            {id: 0, message: "What's up"}, 
            {id: 1, message: "How are you"}
        ]
    }

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});


//let newState = profileReducer({}, {})