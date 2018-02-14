import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {Icon, Typography} from 'material-ui';
import classNames from 'classnames';

const styles = theme => ({
    root: {}
});

class MainSidebarHeader extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, 'flex items-center h-full p-12')}>
                <Icon>folder</Icon>
                <Typography variant="title" className="ml-16">File Manager</Typography>
            </div>
        )
    };
}

export default withStyles(styles, {withTheme: true})(MainSidebarHeader);