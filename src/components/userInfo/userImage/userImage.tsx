import React from "react";
import '../userImage/userImage.css'

interface UserImageProps {
    imageUrl: string,
}

const UserImage: React.FC<UserImageProps> = ({ imageUrl }) => {

    return (
        <div className="userImageConatiner">
            <img className="userImage" src={imageUrl} alt="" />
        </div>
    )
}

export default UserImage