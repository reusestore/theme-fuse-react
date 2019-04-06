import {useState} from 'react';
import {ClickAwayListener, Icon, IconButton, Input, Tooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as Actions from './store/actions';

const useStyles = makeStyles(theme => ({
    root        : {},
    inputWrapper: {
        backgroundColor: theme.palette.primary.dark
    }
}));

function NotesSearch(props)
{
    const classes = useStyles(props);
    const [search, setSearch] = useState(false);

    function showSearch()
    {
        setSearch(true);
        document.addEventListener("keydown", escFunction, false);
    }

    function hideSearch()
    {
        setSearch(false);
        props.resetSearchText();
        document.removeEventListener("keydown", escFunction, false);
    }

    function escFunction(event)
    {
        if ( event.keyCode === 27 )
        {
            hideSearch();
        }
    }

    function handleClickAway()
    {
        hideSearch();
    }

    return (
        <div className={classNames(classes.root, "flex", props.className)}>

            <Tooltip title="Click to search" placement="bottom">
                <div onClick={showSearch}>
                    {props.trigger}
                </div>
            </Tooltip>

            {search && (
                <ClickAwayListener onClickAway={handleClickAway}>

                    <div className={classNames(classes.inputWrapper, "absolute pin-l pin-r pin-t pin-b h-full z-9999 px-8 sm:px-24")}>

                        <div className="flex items-center w-full h-full">

                            <Input
                                placeholder="Search for anything"
                                className="flex flex-1 py-0 pr-16 h-64"
                                disableUnderline
                                fullWidth
                                value={props.searchText}
                                inputProps={{
                                    'aria-label': 'Search'
                                }}
                                onChange={props.setSearchText}
                                autoFocus
                            />

                            <IconButton onClick={hideSearch} className="mx-8">
                                <Icon>close</Icon>
                            </IconButton>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        setSearchText  : Actions.setSearchText,
        resetSearchText: Actions.resetSearchText
    }, dispatch);
}

function mapStateToProps({notesApp})
{
    return {
        searchText: notesApp.notes.searchText
    }
}

NotesSearch.propTypes = {};
NotesSearch.defaultProps = {
    trigger: (<IconButton className="w-64 h-64"><Icon>search</Icon></IconButton>)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NotesSearch));
