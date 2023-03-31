import React from 'react';

export default class LifecycleMethods extends React.Component {
    state = {
        currentPage: "Contacts",
    }

    changeTitle() {
        document.title = this.state.currentPage;
    }

    componentDidMount() {
        this.changeTitle();
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({currentPage: "Buy"});
    }

    componentDidUpdate(prevState) {
        if(this.state.currentPage !== {prevState}){
            this.changeTitle();
        }
    }

    render() {
        return(
            <div className='button-container'>
                <button className='button-lifecycle' onClick={(e) => this.handleClick(e)}>Click me</button>
            </div>
        )
    }
}