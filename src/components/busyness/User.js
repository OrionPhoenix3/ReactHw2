import React from "react";
import UserCard from '../ui/UserCard'
import UserCardProps from "../ui/UserCard";
import { UserCardText } from "../ui/UserCardText";

export default class User extends React.Component {
    state = {
        name: 'Alex',
        surname: 'Milovich',
        age: 42,
    }
    
    render() {
        return(
            <div className="user-container">
                <h4>UserCard with state</h4>     
                <UserCard {...this.state} /> 
                <h4>UserCard with props passed one by one</h4>
                <UserCardProps name={this.state.name} surname={this.state.surname} age={this.state.age}/>
                <UserCardText prop={this.state}/>
            </div>

        )
    }
} 