import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Icon, IconButton, Typography} from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class DetailSidebarHeader extends Component {

    render()
    {
        const {classes, files, selectedItem} = this.props;
        const selected = files[selectedItem];

        if ( !selected )
        {
            return "";
        }

        return (
            <div className={classNames(classes.root, "flex flex-col justify-between h-full p-12")}>

                <div className="toolbar flex align-center justify-end">
                    <IconButton>
                        <Icon>delete</Icon>
                    </IconButton>

                    <IconButton>
                        <Icon>file_download</Icon>
                    </IconButton>

                    <IconButton>
                        <Icon>more_vert</Icon>
                    </IconButton>
                </div>

                <div className="p-12">
                    <Typography variant="subheading" className="mb-8">{selected.name}</Typography>
                    <Typography variant="caption" className="">
                        <span>Edited</span>
                        <span>: {selected.modified}</span>
                    </Typography>
                </div>
            </div>
        )
    };
}


function mapDispatchToProps(dispatch)
{
    return bindActionCreators({}, dispatch);
}

function mapStateToProps({fileManagerApp})
{
    return {
        files       : fileManagerApp.files,
        selectedItem: fileManagerApp.selectedItem
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailSidebarHeader)));