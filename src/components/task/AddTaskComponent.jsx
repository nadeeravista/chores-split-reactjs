import React, { Component } from 'react'
import { Button, TextField, FormGroup, Grid, ButtonGroup } from '@material-ui/core'
import classes from '../task/AddTaskComponent.css'

class AddTaskComponent extends Component {

    constructor() {
        super()
        this.state = {
            taskName: ''
        }
        this.taskNameRef = React.createRef(this)
    }

    handleTextOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid xs="12" sm="12" >
                    <FormGroup>
                        <TextField
                            name="taskName"
                            label="Task Name"
                            color="primary"
                            variant="outlined"
                            margin="dense"
                            value={this.state.taskName}
                            ref={this.taskNameRef}
                            onChange={this.handleTextOnChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            variant="contained"
                            color="primary">
                            Add Task
                        </Button>
                    </FormGroup>
                </Grid>
            </div>
        )
    }
}
export default AddTaskComponent