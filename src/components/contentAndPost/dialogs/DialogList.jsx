import React from 'react' 
//import DialogListContainer from './DialogListContainer'

export default function DialogList(props) {
    console.log(props.store)
    let listOfNames = props.state.profileReducer.listOfNamesData.map((item) => {
        return <div>{item.name}</div>
    })
    
    return(
        <div>{listOfNames}</div>
    )
}