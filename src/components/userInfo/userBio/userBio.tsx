import React from "react";


interface UserBioProps {
    bioDetails?:string
}

const UserBio: React.FC<UserBioProps> = ({ bioDetails }) => {
    
    return (
        <div >
            <h5>{bioDetails ?? 'This profile has no bio'}</h5>
        </div>
    )
}

export default UserBio