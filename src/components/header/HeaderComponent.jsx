import React, { Component } from 'react'
import '../header/HeaderComponent.css'
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

class HeaderComponent extends Component {

    constructor() {
        super()
        this.state = {
            taskName: ''
        }
        this.taskNameRef = React.createRef(this);
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.name);
    }

    handleOnAddClick = (event) => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
            .then(res => {
                console.log(this.state.taskName);
            })
    }

    render() {
        const { taskName } = this.state;
        return (
            <div>
                <Input ref={this.taskNameRef} onChange={this.onInputChange} color="primary" value={this.state.taskName} name="taskName" />
                <Button onClick={this.handleOnAddClick} variant="contained" color="primary">
                    Add a Task
                </Button>
            </div>

        )
    }
}

export default HeaderComponent