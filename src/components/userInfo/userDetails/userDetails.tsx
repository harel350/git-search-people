import UserBio from "../userBio/userBio";
import '../userDetails/userDetails.css'
import UserNameContainer from '../userNameContainer/userNameContainer'
import UserSocial from "../userSocial/userSocial";



export default function userDetails() {

    return (
        <div className="userDetailsContainer">
            <UserNameContainer />
            <UserBio />
            <UserSocial />
        </div>
    )
}
