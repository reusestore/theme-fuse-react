import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        display   : 'flex',
        alignItems: 'center',
        width     : '100%'
    }
});

class MainToolbar extends Component {
    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root)}>
                Toolbar
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(MainToolbar);
