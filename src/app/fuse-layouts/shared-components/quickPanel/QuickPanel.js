import React, {useEffect, useState} from 'react';
import {Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Switch, Typography} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import moment from 'moment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './store/actions/index'
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 280
    }
}));

function QuickPanel(props)
{
    const classes = useStyles();
    const [checked, setChecked] = useState('notifications');

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if ( currentIndex === -1 )
        {
            newChecked.push(value);
        }
        else
        {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    useEffect(() => {
        props.getQuickPanelData()
    }, []);

    return (
        <Drawer
            classes={{paper: classes.root}}
            open={props.state}
            anchor="right"
            onClose={props.toggleQuickPanel}
        >
            <FuseScrollbars>

                <ListSubheader component="div">Today</ListSubheader>

                <div className="mb-0 py-16 px-24">
                    <Typography className="mb-12 text-32" color="textSecondary">
                        {moment().format('dddd')}
                    </Typography>
                    <div className="flex">
                        <Typography className="leading-none text-32" color="textSecondary">{moment().format('DD')}</Typography>
                        <Typography className="leading-none text-16" color="textSecondary">th</Typography>
                        <Typography className="leading-none text-32" color="textSecondary">{moment().format('MMMM')}</Typography>
                    </div>
                </div>
                <Divider/>
                <List>
                    <ListSubheader component="div">Events</ListSubheader>
                    {props.data && props.data.events.map(event => (
                        <ListItem key={event.id}>
                            <ListItemText
                                primary={event.title}
                                secondary={event.detail}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    <ListSubheader component="div">Notes</ListSubheader>
                    {props.data && props.data.notes.map(note => (
                        <ListItem key={note.id}>
                            <ListItemText
                                primary={note.title}
                                secondary={note.detail}
                            />
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <List>
                    <ListSubheader component="div">Quick Settings</ListSubheader>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>notifications</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Notifications"/>
                        <ListItemSecondaryAction>
                            <Switch
                                color="primary"
                                onChange={handleToggle('notifications')}
                                checked={checked.indexOf('notifications') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>cloud</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Cloud Sync"/>
                        <ListItemSecondaryAction>
                            <Switch
                                color="secondary"
                                onChange={handleToggle('cloudSync')}
                                checked={checked.indexOf('cloudSync') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Icon>brightness_high</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Retro Thrusters"/>
                        <ListItemSecondaryAction>
                            <Switch
                                color="primary"
                                onChange={handleToggle('retroThrusters')}
                                checked={checked.indexOf('retroThrusters') !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </FuseScrollbars>
        </Drawer>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        toggleQuickPanel : Actions.toggleQuickPanel,
        getQuickPanelData: Actions.getQuickPanelData
    }, dispatch);
}

function mapStateToProps({quickPanel})
{
    return {
        state: quickPanel.state,
        data : quickPanel.data
    }
}

export default withReducer('quickPanel', reducer)(connect(mapStateToProps, mapDispatchToProps)(QuickPanel));
