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
import MailToolbar from './MailToolbar';
import MailHeader from './MailHeader';

const styles = theme => ({
    layoutRoot          : {},
    layoutSidebarContent: {
        padding: 0
    },
    layoutToolbar       : {
        paddingLeft: 8
    },
    layoutContent       : {
        padding      : 0,
        overflow     : 'hidden',
        display      : 'flex',
        flexDirection: 'column'
    },
    layoutHeader        : {
        alignItems: 'center'
    },
    layoutHeaderContent : {
        paddingTop: 0
    }
});

class MailApp extends Component {
    state = {
        mobileOpen: false
    };

    componentDidMount()
    {
        this.props.getData(this.props.match.params);
    }

    componentWillReceiveProps(nextProps)
    {
        if ( !_.isEqual(nextProps.location, this.props.location) )
        {
            this.props.getMails(nextProps.match.params);
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

    render()
    {
        const {classes, theme} = this.props;

        return (
            <FusePageCarded
                classes={{
                    root          : classes.layoutRoot,
                    sidebarContent: classes.layoutSidebarContent,
                    toolbar       : classes.layoutToolbar,
                    content       : classes.layoutContent,
                    header        : classes.layoutHeader,
                    headerContent : classes.layoutHeaderContent
                }}
                header={
                    <MailHeader/>
                }
                contentToolbar={
                    <MailToolbar/>
                }
                content={
                    <div className="flex flex-1 h-full">
                        <div className="w-1/2 overflow-auto border-r">
                            <MailList/>
                        </div>
                        <div className="w-1/2 p-24 overflow-auto">
                            <MailDetails/>
                        </div>
                    </div>
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
