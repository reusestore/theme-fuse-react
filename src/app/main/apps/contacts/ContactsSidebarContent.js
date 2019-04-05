import React from 'react';
import {Avatar, Divider, Icon, List, ListItem, ListItemText, Paper, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {NavLink, withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    listItem: {
        color         : 'inherit!important',
        textDecoration: 'none!important',
        height        : 40,
        width         : 'calc(100% - 16px)',
        borderRadius  : '0 20px 20px 0',
        paddingLeft   : 24,
        paddingRight  : 12,
        '&.active'    : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText + '!important',
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        }
    }
}));

function ContactsSidebarContent(props)
{
    const classes = useStyles(props);

    return (
        <div className="p-0 lg:p-24 lg:pr-4">
            <FuseAnimate animation="transition.slideLeftIn" delay={200}>
                <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-md">
                    <div className="p-24 flex items-center">
                        <Avatar className="mr-12" alt={props.user.name} src={props.user.avatar}/>
                        <Typography>{props.user.name}</Typography>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem
                            button
                            component={NavLink}
                            to={'/apps/contacts/all'}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">people</Icon>
                            <ListItemText className="truncate pr-0" primary="All contacts" disableTypography={true}/>
                        </ListItem>
                        <ListItem
                            button
                            component={NavLink}
                            to={'/apps/contacts/frequent'}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">restore</Icon>
                            <ListItemText className="truncate pr-0" primary="Frequently contacted" disableTypography={true}/>
                        </ListItem>
                        <ListItem
                            button
                            component={NavLink}
                            to={'/apps/contacts/starred'}
                            activeClassName="active"
                            className={classes.listItem}
                        >
                            <Icon className="list-item-icon text-16" color="action">star</Icon>
                            <ListItemText className="truncate pr-0" primary="Starred contacts" disableTypography={true}/>
                        </ListItem>
                    </List>
                </Paper>
            </FuseAnimate>
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({contactsApp})
{
    return {
        user: contactsApp.user
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsSidebarContent));
