import React from "react";
import UserBio from "../userBio/userBio";
import '../userDetails/userDetails.css'
import UserNameContainer from '../userNameContainer/userNameContainer'
import UserSocial from "../userSocial/userSocial";

interface UserDetailsProps {
    userData?: any
}

const UserDetails: React.FC<UserDetailsProps> = ({ userData }) => {

    return (
        <div className="userDetailsContainer">
            <UserNameContainer userData={userData} />
            <UserBio bioDetails={userData.bio}/>
            <UserSocial userData={userData}/>
        </div>
    )
}

export default UserDetails