import React, {Component} from 'react';
import {Icon, ListItem, TextField, Button} from '@material-ui/core';
import ChecklistItemModel from 'main/content/apps/scrumboard/model/ChecklistItemModel';
import _ from '@lodash';

class CardAddChecklistItem extends Component {
    state = {
        name: ''
    };

    handleChange = (event) => {
        this.setState(_.setIn(this.state, event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    submit = (ev) => {
        ev.preventDefault();
        const {name} = this.state;
        if ( name === '' )
        {
            return;
        }
        this.props.onListItemAdd(new ChecklistItemModel({name}));
        this.setState({name: ''})
    };

    render()
    {
        return (
            <form onSubmit={this.submit}>
                <ListItem
                    className="pr-0 pl-56"
                    dense
                >
                    <TextField
                        className="flex flex-1"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        variant="outlined"
                        placeholder="Add an item"
                    />
                    <Button
                        className="ml-16"
                        aria-label="Add"
                        variant="fab"
                        mini
                        color="secondary"
                        type="submit"
                    >
                        <Icon>add</Icon>
                    </Button>
                </ListItem>
            </form>
        );
    }
}

export default CardAddChecklistItem;
