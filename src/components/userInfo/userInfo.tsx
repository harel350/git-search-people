import React from "react";
import UserImage from './userImage/userImage'

import '../userInfo/userInfo.css'
import UserDetails from "./userDetails/userDetails";


interface UserInfoProps {
    userData: any,
}

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
    return (
        <div className="userInfoContainer">
            <UserImage imageUrl={userData.avatar_url} />
            <UserDetails userData={userData}/>
        </div>
    )
}

export default UserInfo