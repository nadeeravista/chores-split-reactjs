import React, { Component } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton, Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import classes from '../task-list/TaskListComponent.css'

class TaskListComponent extends Component {

    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        fetch("data/tasks.json").then(res => res.json()).then(res => {
            this.setState({tasks: res})
        }
        )
    }

    render() {
        return (
            <div className={classes.root}>
                <Grid xs="12">
                    <List component="nav" aria-label="main mailbox folders">
                        {this.state.tasks.map((item) => {
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        }
                        )}
                    </List>
                </Grid>


            </div>

        )
    }
}

export default TaskListComponent