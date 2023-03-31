import React from "react";


export default function UserCardProps({name, surname, age}) {
    return(
        <div className="user-card">
            <div>User Information:</div>
            <div>Name: {name} </div>
            <div>Surname: {surname}</div>
            <div>Age: {age}</div>    
        </div>
    )
}