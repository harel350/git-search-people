import { useContext } from "react";
import { Context } from '../../../Context'

import '../userNameContainer/userNameContainer.css'


export default function UserNameContainer() {
    let userData = useContext(Context)
    userData = userData.userData
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

