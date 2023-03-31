import React from "react";

export default class Form extends React.Component {
    state = {
        name: '',
        surname: '',
        error: '',
    }
    
    changeState(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    submit(result){
        if(result === true) {
            alert(`Добро пожаловать - ${this.state.name} ${this.state.surname}`)
            this.setState({name: '', surname: '', error: ''});
        }else{
            this.setState({error: "С твоими данными что-то странное творится ;("})
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const name = this.state.name;
        const surname = this.state.surname;
        
        //а китайцы и поляки и т.д. (имя Ян, и кстати имя Ия - у меня есть знакомая с таким именем)?
        let result = (name && surname == 0) ? false :
        (name.length < 3) ? false :
        (surname.length <3) ? false :
        true;

        this.submit(result);
        console.log(this.state);
    };

    render() {
        return(
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                <div>
                    <input placeholder="Name" name = "name" value = {this.state.name} onChange={e => this.changeState(e)} />
                </div>
                <div>
                    <input placeholder="Surname" name = "surname" value = {this.state.surname} onChange={e => this.changeState(e)} />
                </div>
                <button type = "Submit">Submit</button>
                <span className="error">{this.state.error}</span>
           </form>
        )
    }
}
