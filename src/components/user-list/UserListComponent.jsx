import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'

class UserListComponent extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch("data/users.json").then(res => res.json()).then(res => {
            this.setState({
                users: res
            }
            )
        }
        )
    }

    render() {
        return (
            <div>
                <List >
                    {this.state.users.map(user => {
                        return (
                            <ListItem>
                                <ListItemText primary={user.email}></ListItemText>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>

                        )
                    })}
                </List>

            </div>
        )
    }
}

export default UserListComponent 