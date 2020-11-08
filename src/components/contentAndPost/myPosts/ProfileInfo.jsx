import React from 'react' 

const ProfileInfo = (props) => {
    console.log(props.profile)
    
    if (!props.profile) {
        return <div>wait</div>
    }   

    return (
        
            <div><img src={props.profile.photos.small}/></div>  
        
    ) 

    

    
}


export default ProfileInfo 