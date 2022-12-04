import { useContext } from "react";
import { Context } from '../../../Context'

import '../userAddress/userAddress.css'


export default function UserAddress() {

    let userData = useContext(Context)
    userData = userData.userData
    return (
        <div className="userAddressContainer">
            <UserAddressBox title={userData.company} icon="fa-solid fa-building" />
            <UserAddressBox title={userData.twitter_username} icon="fa-brands fa-twitter" />
            <UserAddressBox title={userData.location} icon="fa-solid fa-location-dot" />
            <UserAddressBox title={userData.html_url} icon="fa-solid fa-link" />
        </div>
    )
}
function UserAddressBox({ title, icon }: { title: string, icon: any }) {
    return (
        <div className="userAddressBoxContainer">
            <i className={icon}></i>
            <h4 className="title">{title ?? 'null'}</h4>
        </div>
    )
}