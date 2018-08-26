import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = theme => ({
    layoutRoot: {}
});

class Auth0AuthDoc extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="flex flex-1 items-center justify-between p-24">
                        <Typography variant="title">Auth0 Authentication</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            With Auth0 Authentication in Fuse React.
                        </Typography>

                        <ul>
                            <li className="mb-12">
                                You can <Link to="/register">register</Link>.
                            </li>
                            <li className="mb-12">
                                You can <Link to="/login">login</Link>.
                            </li>
                            <li className="mb-12">
                                Also saves user data (user shortcuts, layout and theme settings) as user_metadata to Auth0 Database.
                            </li>
                        </ul>

                        <Typography className="my-24 italic" component="p" color="textSecondary">
                            Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in 'index.js'. Also <b>main/content/callback</b> is needed for Auth0
                            authentication.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Configuration</Typography>

                        <Typography className="mb-16" component="p">
                            You need to paste the configuration of your Auth0 Project into <code>/auth0Service/auth0ServiceConfig.js</code>
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx my-16">
                            {`
                               export const AUTH_CONFIG = {
                                    domain     : "YOUR_DOMAIN",
                                    clientId   : "YOUR_CLIENT_ID",
                                    callbackUrl: "YOUR_DOMAIN/callback"
                               };
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(Auth0AuthDoc);
