import React from 'react' 
import Header from './Header'
import {AuthThunkCreator, setUserData} from '../../redux/auth-reducer'
import { connect } from 'react-redux'




class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.AuthThunkCreator()   // Thanks to thunk we can make axios request without Header component 
    }
    
    render() {
        return <Header  {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect (mapStateToProps, {setUserData: setUserData, AuthThunkCreator: AuthThunkCreator}) (HeaderContainer)


