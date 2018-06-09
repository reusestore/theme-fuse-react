import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Icon, Input, Paper, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {FuseAnimate} from '@fuse';

const styles = theme => ({
    root         : {},
    searchWrapper: {
        width     : '100%',
        height    : 56,
        padding   : 18,
        display   : 'flex',
        alignItems: 'center'
    },
    search       : {
        paddingLeft: 16
    }
});

class Error404Page extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 items-center justify-center p-16")}>

                <div className="max-w-512 text-center">

                    <FuseAnimate animation="transition.expandIn" delay={100}>
                        <Typography variant="display4" color="inherit" className="font-medium mb-16">
                            404
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate delay={500}>
                        <Typography variant="headline" color="textSecondary" className="mb-16">
                            Sorry but we could not find the page you are looking for
                        </Typography>
                    </FuseAnimate>

                    <Paper className={classNames(classes.searchWrapper, "mt-48 mb-16")} elevation={1} square>
                        <Icon color="action">search</Icon>
                        <Input
                            placeholder="Search for anything"
                            className={classes.search}
                            disableUnderline
                            fullWidth
                            inputProps={{
                                'aria-label': 'Search'
                            }}
                        />
                    </Paper>

                    <Link className="font-medium" to="/apps/dashboards/project">Go back to dashboard</Link>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Error404Page);
