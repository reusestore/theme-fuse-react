import React, {useEffect} from 'react';
import {Radio, FormControlLabel, RadioGroup, FormLabel, FormControl, IconButton, TextField, AppBar, Icon, Toolbar, Typography, Avatar} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import {bindActionCreators} from 'redux';
import connect from 'react-redux/es/connect/connect';
import _ from '@lodash';
import * as Actions from './store/actions';
import StatusIcon from './StatusIcon';
import {useForm} from '../../../../@fuse/hooks';

const statusArr = [
    {
        title: 'Online',
        value: 'online'
    },
    {
        title: 'Away',
        value: 'away'
    },
    {
        title: 'Do not disturb',
        value: 'do-not-disturb'
    },
    {
        title: 'Offline',
        value: 'offline'
    }
];

function UserSidebar(props)
{
    const {form, handleChange, setForm} = useForm(props.user ? {...props.user} : null);

    useEffect(() => {
        if ( props.user && !_.isEqual(form, props.user) )
        {
            setForm({...props.user});
        }
    }, [props.user]);

    useEffect(() => {
        if ( form && !_.isEqual(form, props.user) )
        {
            updateUserData();
        }
    }, [form]);

    const updateUserData = _.debounce(() => {
        props.updateUserData(form);
    }, 500);

    if ( !form )
    {
        return null;
    }

    return (
        <div className="flex flex-col flex-auto h-full">
            <AppBar
                position="static"
                color="primary"
                elevation={1}
            >
                <Toolbar className="flex justify-between items-center px-16 pr-4">
                    <Typography color="inherit" variant="subtitle1">User Info</Typography>
                    <IconButton onClick={props.closeUserSidebar} color="inherit">
                        <Icon>close</Icon>
                    </IconButton>
                </Toolbar>
                <Toolbar className="flex flex-col justify-center items-center p-24">
                    <Avatar src={props.user.avatar} alt={props.user.name} className="w-96 h-96">
                        {(!props.user.avatar || props.user.avatar === '') ? props.user.name[0] : ''}
                    </Avatar>
                    <Typography color="inherit" className="mt-16" variant="h6">{props.user.name}</Typography>
                </Toolbar>
            </AppBar>
            <FuseScrollbars className="overflow-y-auto flex-1 p-24">
                <form>
                    <FormControl component="fieldset" className="w-full mb-16">
                        <TextField
                            label="Mood"
                            name="mood"
                            className="w-full"
                            value={form.mood}
                            margin="normal"
                            multiline
                            onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl component="fieldset" className="w-full mb-16">
                        <FormLabel component="legend">Status</FormLabel>
                        <RadioGroup
                            aria-label="Status"
                            name="status"
                            className=""
                            value={form.status}
                            onChange={handleChange}
                        >
                            {statusArr.map((status) => (
                                <FormControlLabel
                                    key={status.value}
                                    value={status.value}
                                    control={<Radio/>}
                                    label={(
                                        <div className="flex items-center">
                                            <StatusIcon status={status.value}/>
                                            <span className="ml-8">{status.title}</span>
                                        </div>
                                    )}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </form>
            </FuseScrollbars>
        </div>
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeUserSidebar: Actions.closeUserSidebar,
        updateUserData  : Actions.updateUserData
    }, dispatch);
}

function mapStateToProps({chatApp})
{
    return {
        user: chatApp.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSidebar);
