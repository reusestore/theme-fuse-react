import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Card, CardContent, Grow, Typography} from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    root: {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    card: {
        width   : '100%',
        maxWidth: 384
    }
});

class MaintenancePage extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32")}>

                <div className="flex flex-col items-center justify-center w-full">

                    <Grow in={true}>
                        <Card className={classes.card}>

                            <CardContent className="flex flex-col items-center justify-center text-center p-48">

                                <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo"/>

                                <Typography variant="subheading" className="mb-16">
                                    Closed for scheduled maintenance!
                                </Typography>

                                <Typography color="textSecondary" className="mb-40">
                                    We're sorry for the inconvenience. <br/> Please check back later.
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grow>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(MaintenancePage);
