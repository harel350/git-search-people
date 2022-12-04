import React, { useContext } from "react";
import { Context } from '../../../Context'

import '../userSocial/userSocial.css'


export default function UserSocial() {
    let userData = useContext(Context)
    userData = userData.userData
    console.log()
    return (
        <div className="userSocialContainer">
            <BoxSocial title={'Reop'} amountNumber={userData.public_repos} />
            <BoxSocial title={'Followers'} amountNumber={userData.followers} />
            <BoxSocial title={'Following'} amountNumber={userData.following} />
        </div>
    )
}

function BoxSocial({ title, amountNumber }: { title: string, amountNumber: string }) {
    return (
        <div className="box">
            <h2>{title}</h2>
            <h1>{amountNumber}</h1>
        </div>
    )
}

