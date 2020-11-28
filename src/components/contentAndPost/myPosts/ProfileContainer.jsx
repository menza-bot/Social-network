import React from 'react' 
import Proflie from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom'
//import { usersAPI } from '../../../api/api'
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator} from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProflieContainer extends React.Component {

    
    componentDidMount() {
        let userCode = this.props.match.params.userId
        //console.log(this.props);
        if (!userCode) {
            userCode = this.props.userId  
            if (!userCode) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunkCreator(userCode)
        
    
        this.props.getStatusThunkCreator(userCode)
        
        //this.props.getStatusThunkCreator(userCode)
    }
    render () {
        if (this.props.isAuth === false) return <Redirect to = '/login' /> //It's redirect
        console.log("RENDER PROFILE");
        return (
            <Proflie {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatusThunkCreator} /> //import props from ProfileContainer to Profile
        )
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToProps PROFILE');
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        userId: state.auth.userId
    }
}

export default compose (
    connect (mapStateToProps, {
        setUserProfile, 
        getProfileThunkCreator: getProfileThunkCreator,
        getStatusThunkCreator: getStatusThunkCreator,
        updateStatusThunkCreator: updateStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
) (ProflieContainer)   // using compose to less code and make this one more readable

/* let AuthRedirectComponent = withAuthRedirect(ProflieContainer)
let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect (mapStateToProps, {setUserProfile, getProfileThunkCreator: getProfileThunkCreator}) (withUrlDataContainerComponent) */













