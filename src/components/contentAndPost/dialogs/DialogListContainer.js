//import React from "react"
import store from '../../../redux/redux-store'
import { connect } from 'react-redux'
import DialogList from './DialogList'

console.log(store);


let mapStateToProps = (store) => {
    return {
        state: store
    }
}

//let mapDispatchToProps = (dispatch) => {
//    return {

//    }
//}





const DialogListContainer = connect(mapStateToProps) (DialogList)

export default DialogListContainer
