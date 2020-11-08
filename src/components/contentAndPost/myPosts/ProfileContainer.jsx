import React from 'react' 
import Proflie from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProflieContainer extends React.Component {
    
    
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        this.props.setUserProfile(response.data)
        })
    }
    
    
    render () {
        return (
            <Proflie {...this.props} profile = {this.props.profile}/> //import props from ProfileContainer to Profile
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}


let withUrlDataContainerComponent = withRouter(ProflieContainer)


export default connect (mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent)













