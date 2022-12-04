import { useContext } from "react";
import { Context } from "../../../Context";
import '../userImage/userImage.css'


export default function UserImage() {
    const userData = useContext(Context)
    const imageUrl = userData.userData.avatar_url
    return (
        <div className="userImageConatiner">
            <img className="userImage" src={imageUrl} alt="" />
        </div>
    )
}
