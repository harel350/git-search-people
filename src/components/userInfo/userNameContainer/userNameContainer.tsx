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
                <h1>{userData.name}</h1>
                <h3>{userData.login}</h3>
            </div>
            <div>
                <span>join at {dataFormat}</span>
            </div>
        </div>
    )
}

