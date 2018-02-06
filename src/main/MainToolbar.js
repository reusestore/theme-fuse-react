import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './../store/actions';
import {themes} from '../core/components/FuseTheme/FuseTheme';
import {Icon, IconButton, Menu, MenuItem} from 'material-ui';

const styles = theme => ({
    root: {
        display   : 'flex',
        alignItems: 'center',
        width     : '100%'
    }
});

class MainToolbar extends Component {

    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render()
    {
        const {classes, selectedTheme, setTheme} = this.props;
        const {anchorEl} = this.state;

        return (
            <div className={classNames(classes.root)}>

                <div className="flex flex-1">
                    Toolbar
                </div>

                <div>
                    <IconButton
                        aria-label="More"
                        aria-owns={anchorEl ? 'theme-selection-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <Icon>palette</Icon>
                    </IconButton>
                    <Menu
                        id="theme-selection-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        {Object.keys(themes).map((key, value) => (
                            <MenuItem key={key} selected={key === selectedTheme} onClick={(ev) => {
                                setTheme(key);
                                this.handleClose(ev)
                            }}>
                                {key}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setTheme: Actions.setTheme
    }, dispatch);
}

function mapStateToProps({theme})
{
    return {
        selectedTheme: theme.selectedTheme
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(MainToolbar));
