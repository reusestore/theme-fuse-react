import React, {Component} from 'react';
import {Icon, ListItem, ListItemText} from 'material-ui';
import {withStyles} from 'material-ui/styles/index';
import {NavLink, withRouter} from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        minHeight          : 48,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText,
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {}
    }
});

const FuseNavVerticalItem = ({item, classes, nestedLevel}) => {

    let paddingValue = 32 + (nestedLevel * 16);
    const listItemPadding = nestedLevel > 0 ? 'pl-' + (paddingValue > 80 ? 80 : paddingValue) : '';

    return (
        <ListItem button
                  component={NavLink}
                  to={item.url}
                  activeClassName="active"
                  className={classNames(classes.root, listItemPadding)}>
            {item.icon && (
                <Icon className="list-item-icon text-16" color="action">{item.icon}</Icon>
            )}
            <ListItemText primary={item.title} disableTypography={true}/>
        </ListItem>
    )
};

const NavVerticalItem = withStyles(styles, {withTheme: true})(withRouter(FuseNavVerticalItem));

export default NavVerticalItem;
