import React from 'react';
import {Icon, ListItem, ListItemText} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {NavLinkAdapter, FuseUtils} from '@fuse';
import {withRouter} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from 'app/store/actions';
import FuseNavBadge from './../FuseNavBadge';

const useStyles = makeStyles(theme => ({
    item: {
        height                     : 40,
        width                      : 'calc(100% - 16px)',
        borderRadius               : '0 20px 20px 0',
        paddingRight               : 12,
        '&.active'                 : {
            backgroundColor            : theme.palette.secondary.main,
            color                      : theme.palette.secondary.contrastText + '!important',
            pointerEvents              : 'none',
            transition                 : 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
            '& .list-item-text-primary': {
                color: 'inherit'
            },
            '& .list-item-icon'        : {
                color: 'inherit'
            }
        },
        '&.square, &.active.square': {
            width       : '100%',
            borderRadius: '0'
        },
        '& .list-item-icon'        : {},
        '& .list-item-text'        : {},
        color                      : theme.palette.text.primary,
        cursor                     : 'pointer',
        textDecoration             : 'none!important'
    }
}));

function FuseNavVerticalItem(props)
{
    const classes = useStyles(props);
    const {item, nestedLevel, userRole, navbarCloseMobile, active} = props;
    let paddingValue = 40 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : 'pl-24';

    if ( !FuseUtils.hasPermission(item.auth, userRole) )
    {
        return null;
    }

    return (
        <ListItem
            button
            component={NavLinkAdapter}
            to={item.url}
            activeClassName="active"
            className={classNames(classes.item, listItemPadding, 'list-item', active)}
            onClick={navbarCloseMobile}
            exact={item.exact}
        >
            {item.icon && (
                <Icon className="list-item-icon text-16 flex-no-shrink mr-16" color="action">{item.icon}</Icon>
            )}
            <ListItemText className="list-item-text" primary={item.title} classes={{primary: 'text-14 list-item-text-primary'}}/>
            {item.badge && (
                <FuseNavBadge badge={item.badge}/>
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

FuseNavVerticalItem.propTypes = {
    item: PropTypes.shape(
        {
            id   : PropTypes.string.isRequired,
            title: PropTypes.string,
            icon : PropTypes.string,
            url  : PropTypes.string
        })
};

FuseNavVerticalItem.defaultProps = {};

const NavVerticalItem = withRouter(connect(mapStateToProps, mapDispatchToProps)(React.memo(FuseNavVerticalItem)));

export default NavVerticalItem;
