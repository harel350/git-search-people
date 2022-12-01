import React from "react";

import '../userSocial/userSocial.css'
interface UserSocialProps {
    userData?: any
}

const UserSocial: React.FC<UserSocialProps> = ({ userData }) => {

    return (
        <div className="userSocialContainer">   
           <BoxSocial title={'Reop'} amountNumber={userData.public_repos}/>
           <BoxSocial title={'Followers'} amountNumber={userData.followers}/>
           <BoxSocial title={'Following'} amountNumber={userData.following}/>
        </div>
    )
}

function BoxSocial({title,amountNumber}:{title:string,amountNumber:string}){
    return(
        <div className="box">
                <h2>{title}</h2>
                <h1>{amountNumber}</h1>
            </div>
    )
}

export default UserSocial