import React from "react";


export default function UserCard(state) {
    return(
        <div className="user-card">
            <div>User Information:</div>
            <div>Name: {state.name} </div>
            <div>Surname: {state.surname}</div>
            <div>Age: {state.age}</div>    
        </div>
    )
}
