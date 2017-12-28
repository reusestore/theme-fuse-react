import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';

const styles = theme => ({
    mailItem: {
        padding: 16
    }
});

class MailList extends Component {

    handleToggle = () => {

    };

    render()
    {
        const {mails, classes} = this.props;

        if ( !mails.length )
        {
            return 'loading...';
        }

        return (
            <List>
                {mails.map(mail => (
                    <ListItem
                        key={mail.id}
                        dense
                        button
                        onClick={this.handleToggle}
                        className={classes.mailItem}
                    >
                        <Checkbox
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={mail.subject}/>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Comments">
                                <CommentIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        );
    }
};

export default withStyles(styles)(MailList);
