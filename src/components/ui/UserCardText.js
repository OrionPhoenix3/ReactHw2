import React from "react";
import {AccessAge} from "../utils/AccessAge"

export const UserCardText = ({prop}) => {
    const {name, surname, age} = prop;
    return(
        <div className="user-text">
            <div>
                <div>User info: {name} - {surname} - {age}</div>
                <br />
                <div>Привет, {name} , тебе {age} лет, я {AccessAge({age})} налить тебе выпить чего-нибудь</div>
            </div>
        </div>
    )
}