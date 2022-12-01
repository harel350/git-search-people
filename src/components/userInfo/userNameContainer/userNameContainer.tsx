import React from "react";

import '../userNameContainer/userNameContainer.css'
interface UserNameContainerProps {
    userData: any,
}

const UserNameContainer: React.FC<UserNameContainerProps> = ({ userData }) => {
    const dataFormat = new Date(userData.created_at).toDateString()
    return (
        <div className="userNameContainer">
            <div className="userNameBox">
                <h2>{userData.name}</h2>
                <h4>{userData.login}</h4>
            </div>
            <div>
                <span>join at {dataFormat}</span>
            </div>
        </div>
    )
}

export default UserNameContainer