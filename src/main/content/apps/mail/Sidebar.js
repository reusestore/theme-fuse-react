import React from 'react';
import {withStyles} from 'material-ui/styles/index';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Divider, Icon, List, ListItem, ListItemIcon, ListItemText, ListSubheader} from 'material-ui';
import {Link, NavLink} from 'react-router-dom';

const styles = theme => ({
    listWrapper  : {},
    composeButton: {
        width: '100%'
    },
    listItem     : {
        paddingRight       : 24,
        paddingLeft        : 24,
        minHeight          : 48,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText,
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {
            fontSize: 16,
            width   : 16,
            height  : 16
        }
    },
    listSubheader: {
        paddingRight: 24,
        paddingLeft : 24
    }
});

const Sidebar = ({classes, folders, filters, labels}) => {

    return (
        <div>
            <div className="p-24">
                <Button variant="raised" color="primary" className={classes.composeButton}>
                    COMPOSE
                </Button>
            </div>
            <div className={classes.listWrapper}>
                <List>
                    <ListSubheader className={classes.listSubheader}>FOLDERS</ListSubheader>
                    {folders.length > 0 && folders.map((folder) => (
                        <ListItem button
                                  component={NavLink}
                                  to={'/apps/mail/' + folder.handle} key={folder.id}
                                  activeClassName="active"
                                  className={classes.listItem}>
                            <Icon className="list-item-icon" color="action">{folder.icon}</Icon>
                            <ListItemText primary={folder.title} disableTypography={true}/>
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListSubheader className={classes.listSubheader}>FILTERS</ListSubheader>
                    {filters.length > 0 && filters.map((filter) => (
                        <ListItem button
                                  component={NavLink}
                                  to={'/apps/mail/filter/' + filter.handle}
                                  activeClassName="active"
                                  className={classes.listItem}
                                  key={filter.id}
                        >
                            <Icon className="list-item-icon" color="action">{filter.icon}</Icon>
                            <ListItemText primary={filter.title} disableTypography={true}/>
                        </ListItem>
                    ))}
                </List>
                <List>
                    <ListSubheader className={classes.listSubheader}>LABELS</ListSubheader>
                    {labels.length > 0 && labels.map((label) => (
                        <ListItem button
                                  component={NavLink}
                                  to={'/apps/mail/label/' + label.handle}
                                  key={label.id}
                                  className={classes.listItem}>
                            <Icon className="list-item-icon" style={{color: label.color}} color="action">label</Icon>
                            <ListItemText primary={label.title} disableTypography={true}/>
                        </ListItem>
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
