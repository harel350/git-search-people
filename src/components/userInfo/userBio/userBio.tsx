import { useContext } from "react";
import { Context } from '../../../Context'



export default function UserBio() {
    let userData = useContext(Context)
    let bioDetails = userData.userData.bio
    return (
        <div >
            <h5>{bioDetails ?? 'This profile has no bio'}</h5>
        </div>
    )
}

