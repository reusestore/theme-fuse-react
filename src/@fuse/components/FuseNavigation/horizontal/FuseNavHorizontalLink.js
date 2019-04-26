import React from 'react';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseUtils} from '@fuse';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import FuseNavBadge from './../FuseNavBadge';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight          : 48,
        '&.active'         : {
            backgroundColor            : theme.palette.secondary.main,
            color                      : theme.palette.secondary.contrastText + '!important',
            pointerEvents              : 'none',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon'        : {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {},
        '& .list-item-text': {
            padding: '0 0 0 16px'
        },
        color              : theme.palette.text.primary,
        textDecoration     : 'none!important',
        '&.dense'          : {
            padding            : '8px 12px 8px 12px',
            minHeight          : 40,
            '& .list-item-text': {
                padding: '0 0 0 8px'
            }
        }
    }
}));

function FuseNavHorizontalLink(props)
{
    const classes = useStyles(props);
    const {item, userRole, navbarCloseMobile, dense} = props;

    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <ListItem
            button
            component="a"
            href={item.url}
            target={item.target ? item.target : "_blank"}
            className={classNames("list-item", classes.root, dense && "dense")}
            onClick={navbarCloseMobile}
        >
            {item.icon && (
                <Icon className="list-item-icon text-16 flex-no-shrink" color="action">{item.icon}</Icon>
            )}
            <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14 list-item-text-primary'}}/>
            {item.badge && (
                <FuseNavBadge className="ml-8" badge={item.badge}/>
            )}
        </ListItem>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        navbarCloseMobile: Actions.navbarCloseMobile
    }, dispatch);
}

function mapStateToProps({auth})
{
    return {
        userRole: auth.user.role
    }
}

FuseNavHorizontalLink.propTypes = {
    item: PropTypes.shape(
        {
            id    : PropTypes.string.isRequired,
            title : PropTypes.string,
            icon  : PropTypes.string,
            url   : PropTypes.string,
            target: PropTypes.string
        })
};

FuseNavHorizontalLink.defaultProps = {};

const NavHorizontalLink = withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(FuseNavHorizontalLink)));

export default NavHorizontalLink;
