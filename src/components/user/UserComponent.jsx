import React, { Component } from 'react'
import { Button, Input, TextField, FormLabel, Grid, FormGroup } from '@material-ui/core'

class UserComponent extends Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
        this.emailRef = React.createRef(this);
    }

    handleInputChange = event => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }

    handleAddUserClick = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(res => {
            console.log(this.state.email);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Grid xs="12" sm="12">
                        <FormGroup>
                            <TextField
                                variant="outlined"
                                label="Email"
                                margin="dense"
                                name="email"
                                value={this.state.email}
                                ref={this.emailRef}
                                onChange={this.handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                variant="contained"
                                onClick={this.handleAddUserClick}
                                color="primary">
                                Add User
                            </Button>
                        </FormGroup>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default UserComponent