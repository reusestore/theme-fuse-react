import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui';
import {Link} from 'react-router-dom';

const styles = theme => ({
    listWrapper  : {},
    composeButton: {
        width: '100%'
    },
    listLink     : {
        textDecoration: 'none'
    },
    listItemIcon : {
        fontSize   : 16,
        width      : 16,
        height     : 16,
        marginRight: 0
    }
});

const Sidebar = ({classes, folders, filters, labels}) => {

    return (
        <div>
            <div className="p-24">
                <Button raised color="primary" className={classes.composeButton}>
                    COMPOSE
                </Button>
            </div>
            <div className={classes.listWrapper}>
                <List>
                    <ListSubheader>FOLDERS</ListSubheader>
                    {folders.length > 0 && folders.map((folder) => (
                        <Link className={classes.listLink} to={'/apps/mail/' + folder.handle} key={folder.id}>
                            <ListItem button>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <Icon>{folder.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={folder.title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <List>
                    <ListSubheader>FILTERS</ListSubheader>
                    {filters.length > 0 && filters.map((filter) => (
                        <Link className={classes.listLink} to={'/apps/mail/filter/' + filter.handle} key={filter.id}>
                            <ListItem button>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <Icon>{filter.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={filter.title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <List>
                    <ListSubheader>LABELS</ListSubheader>
                    {labels.length > 0 && labels.map((label) => (
                        <Link className={classes.listLink} to={'/apps/mail/label/' + label.handle} key={label.id}>
                            <ListItem button>
                                <ListItemIcon className={classes.listItemIcon}>
                                    <Icon style={{color: label.color}}>label</Icon>
                                </ListItemIcon>
                                <ListItemText primary={label.title}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>

            </div>
        </div>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData: Actions.getData
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails      : mailApp.mails.entities,
        currentMail: mailApp.mails.currentMail,
        folders    : mailApp.folders,
        labels     : mailApp.labels,
        filters    : mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
