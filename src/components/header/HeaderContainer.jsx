import React from 'react' 
import Header from './Header'
import {LogoutThunkCreator} from '../../redux/auth-reducer'
import { connect } from 'react-redux'




class HeaderContainer extends React.Component {

    /* componentDidMount() {
        this.props.AuthThunkCreator()   // Thanks to thunk we can make axios request without Header component 
    } */
    
    render() {
        return <Header LogoutThunkCreator = {this.props.LogoutThunkCreator} {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect (mapStateToProps, {LogoutThunkCreator: LogoutThunkCreator}) (HeaderContainer)


