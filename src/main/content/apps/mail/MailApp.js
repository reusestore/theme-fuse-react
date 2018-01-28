import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import MailList from './MailList';
import * as Actions from './store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom'
import {Grid} from 'material-ui';
import Sidebar from './Sidebar';
import MailDetails from './MailDetails';
import _ from 'lodash';
import FusePageCarded from '../../../../core/components/FusePageLayouts/FusePageCarded';
import SidebarHeader from './SidebarHeader';
import classNames from 'classnames';

const styles = theme => ({
    layoutRoot          : {},
    layoutSidebarContent: {
        padding: 0
    },
    layoutContent       : {
        padding      : 0,
        overflow     : 'hidden',
        display      : 'flex',
        flexDirection: 'column'
    },
    gridItem            : {
        overflowY: 'auto',
        overflowX: 'hidden'
    }
});

class MailApp extends Component {
    state = {
        mobileOpen: false
    };

    componentDidMount()
    {
        this.props.getData(this.props.match);
    }

    componentWillReceiveProps(nextProps)
    {
        if ( !_.isEqual(nextProps.location, this.props.location) )
        {
            this.props.getMails(nextProps.match);
        }
        /*  let loadedParams = {
              id   : '',
              value: ''
          };

          ['labelHandle', 'filterHandle', 'folderHandle'].map((param) => {
                  if ( props.match.params[param] )
                  {
                      loadedParams = {
                          id   : param,
                          value: props.match.params[param]
                      };
                  }
              }
          );

          if ( this.props.mails.loadedParams && !_.isEqual(this.props.mails.loadedParams, loadedParams) )
          {
              // this.props.getMails(props.match);
          }*/
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    render()
    {
        const {classes, theme} = this.props;

        return (
            <FusePageCarded
                classes={{
                    root          : classes.layoutRoot,
                    sidebarContent: classes.layoutSidebarContent,
                    content       : classes.layoutContent
                }}
                header={
                    <h4>Header</h4>
                }
                contentToolbar={
                    <h4>Content Toolbar</h4>
                }
                content={
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} className={classes.gridItem}>
                            <MailList/>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classNames(classes.gridItem, 'p-24')}>
                            <MailDetails/>
                        </Grid>
                    </Grid>
                }
                sidebarPosition="left"
                sidebarHeader={
                    <SidebarHeader/>
                }
                sidebarContent={
                    <Sidebar/>
                }
            />
        )
    };
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getData : Actions.getData,
        getMails: Actions.getMails
    }, dispatch);
}

function mapStateToProps({mailApp})
{
    return {
        mails  : mailApp.mails,
        folders: mailApp.folders,
        labels : mailApp.labels,
        filters: mailApp.filters
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(MailApp)));
