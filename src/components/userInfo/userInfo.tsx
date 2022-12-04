import UserImage from './userImage/userImage'

import '../userInfo/userInfo.css'
import UserDetails from "./userDetails/userDetails";



 export default function UserInfo(){
    return (
        <div className="userInfoContainer">
            <UserImage/>
            <UserDetails />
        </div>
    )
}

