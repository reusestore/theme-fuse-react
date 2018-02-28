import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';

const styles = theme => ({});

class Page extends Component {
    render()
    {
        return (
            <div>
                Login
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Page);
