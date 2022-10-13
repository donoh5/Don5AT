import React from 'react'

import profile from '../../images/profile.jpg';

function ProfilePic(props) {
    if(props.isHover){
        return (
            <div class="w-18 h-11 text-wood-3 text-center"><br/>PROFILE</div>
          )
    }
    else{
        return (
            <img src={profile} class="rounded-full w-11 h-11 mx-auto border-2 border-wood-3"/>
        )
    }
  
}

export default ProfilePic