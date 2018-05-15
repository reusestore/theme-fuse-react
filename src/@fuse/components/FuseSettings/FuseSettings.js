import React, {Component} from 'react';
import {Button, Dialog, FormControl, FormControlLabel, FormLabel, Icon, IconButton, MenuItem, Radio, RadioGroup, Select, Slide, Switch, withStyles} from '@material-ui/core';
import _ from 'lodash';
import * as Actions from 'store/actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {FuseScrollbars, FuseThemes} from '@fuse';

const styles = theme => ({
    root                 : {
        position: 'fixed',
        top     : 160,
        right   : 0,
        zIndex  : 999
    },
    button               : {
        minWidth: 48,
        width   : 48,
        height  : 48,
        opacity : .75,
        padding : 0
    },
    '@keyframes rotating': {
        from: {
            transform: 'rotate(0deg)'
        },
        to  : {
            transform: 'rotate(360deg)'
        }
    },
    buttonIcon           : {
        animation: 'rotating 3s linear infinite'
    },
    dialogPaper          : {
        position                      : 'absolute',
        width                         : 360,
        maxWidth                      : '90vw',
        backgroundColor               : theme.palette.background.paper,
        boxShadow                     : theme.shadows[5],
        top                           : 160,
        right                         : 0,
        margin                        : 0,
        maxHeight                     : 'calc(100vh - 160px)',
        [theme.breakpoints.down('md')]: {
            top      : 64,
            maxHeight: 'calc(100vh - 128px)'
        }
    },
    formControl          : {
        marginBottom: 16,
        width       : '100%'
    },
    group                : {}
});

function Transition(props)
{
    return <Slide direction="left" {...props} />;
}

class FuseSettings extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange = (event) => {
        this.props.setDefaultSettings(_.set(_.merge({}, this.props.settings), event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value));
    };

    render()
    {
        const {classes, settings} = this.props;

        function ThemeSelect({value, name, handleChange})
        {
            return (
                <Select
                    className="w-full"
                    value={value}
                    onChange={handleChange}
                    name={name}
                >
                    {Object.entries(FuseThemes).map(([key, val]) => (
                        <MenuItem
                            key={key} value={key}
                            className="m-8 mt-0 rounded-lg"
                            style={{
                                backgroundColor: val.palette.background.default,
                                color          : val.palette.text.primary,
                                border         : '1px solid ' + val.palette.divider
                            }}
                        >
                            {_.startCase(key)}
                            <div
                                className="flex w-full h-8 block absolute pin-b pin-l pin-r"
                                style={{
                                    borderTop: '1px solid ' + val.palette.divider
                                }}
                            >
                                <div className="w-1/4 h-8" style={{backgroundColor: val.palette.primary.main}}/>
                                <div className="w-1/4 h-8" style={{backgroundColor: val.palette.secondary.main}}/>
                                <div className="w-1/4 h-8" style={{backgroundColor: val.palette.error.main}}/>
                                <div className="w-1/4 h-8" style={{backgroundColor: val.palette.background.paper}}/>
                            </div>
                        </MenuItem>
                    ))}
                </Select>
            );
        }

        return (
            <div id="fuse-settings" className={classes.root}>
                <Button className={classes.button} variant="raised" color="secondary" onClick={this.handleOpen}>
                    <Icon className={classes.buttonIcon}>settings</Icon>
                </Button>
                <Dialog
                    TransitionComponent={Transition}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    keepMounted
                    onClose={this.handleClose}
                    BackdropProps={{invisible: true}}
                    classes={{
                        paper: classes.dialogPaper
                    }}
                >
                    <FuseScrollbars className="p-24 sm:p-32">
                        <IconButton className="absolute pin-t pin-r z-10" onClick={this.handleClose}>
                            <Icon>close</Icon>
                        </IconButton>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Navbar</FormLabel>
                            <RadioGroup
                                aria-label="Navbar"
                                name="layout.navbar"
                                className={classes.group}
                                value={settings.layout.navbar}
                                onChange={this.handleChange}
                                row
                            >
                                <FormControlLabel value="left" control={<Radio/>} label="Left"/>
                                <FormControlLabel value="right" control={<Radio/>} label="Right"/>
                                <FormControlLabel value="none" control={<Radio/>} label="None"/>
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Navbar Folded</FormLabel>
                            <Switch
                                checked={settings.layout.navbarFolded}
                                onChange={this.handleChange}
                                aria-label="Navbar Folded"
                                name="layout.navbarFolded"
                            />
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Toolbar</FormLabel>
                            <RadioGroup
                                aria-label="Toolbar"
                                name="layout.toolbar"
                                className={classes.group}
                                value={settings.layout.toolbar}
                                onChange={this.handleChange}
                                row
                            >
                                <FormControlLabel value="below" control={<Radio/>} label="Below"/>
                                <FormControlLabel value="above" control={<Radio/>} label="Above"/>
                                <FormControlLabel value="none" control={<Radio/>} label="None"/>
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Footer</FormLabel>
                            <RadioGroup
                                aria-label="Footer"
                                name="layout.footer"
                                className={classes.group}
                                value={settings.layout.footer}
                                onChange={this.handleChange}
                                row
                            >
                                <FormControlLabel value="below" control={<Radio/>} label="Below"/>
                                <FormControlLabel value="above" control={<Radio/>} label="Above"/>
                                <FormControlLabel value="none" control={<Radio/>} label="None"/>
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Layout Mode</FormLabel>
                            <RadioGroup
                                aria-label="Layout mode"
                                name="layout.mode"
                                className={classes.group}
                                value={settings.layout.mode}
                                onChange={this.handleChange}
                                row
                            >
                                <FormControlLabel value="fullwidth" control={<Radio/>} label="Full Width"/>
                                <FormControlLabel value="boxed" control={<Radio/>} label="Boxed"/>
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Theme</FormLabel>
                            <ThemeSelect value={settings.theme} name="theme" handleChange={this.handleChange}/>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Navbar Theme</FormLabel>
                            <ThemeSelect value={settings.navbarTheme} name="navbarTheme" handleChange={this.handleChange}/>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Toolbar Theme</FormLabel>
                            <ThemeSelect value={settings.toolbarTheme} name="toolbarTheme" handleChange={this.handleChange}/>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Footer Theme</FormLabel>
                            <ThemeSelect value={settings.footerTheme} name="footerTheme" handleChange={this.handleChange}/>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Custom Scrollbars</FormLabel>
                            <Switch
                                checked={settings.customScrollbars}
                                onChange={this.handleChange}
                                aria-label="Custom Scrollbars"
                                name="customScrollbars"
                            />
                        </FormControl>
                    </FuseScrollbars>
                </Dialog>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setDefaultSettings: Actions.setDefaultSettings
    }, dispatch);
}

function mapStateToProps({fuse})
{
    return {
        settings: fuse.settings.current
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FuseSettings));
