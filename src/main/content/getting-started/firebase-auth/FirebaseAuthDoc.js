import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = theme => ({
    layoutRoot: {}
});

class FirebaseAuthDoc extends Component {

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
                        <Typography variant="title">Firebase Authentication</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="mb-16" component="p">
                            With Firebase Authentication in Fuse React.
                        </Typography>

                        <ul>
                            <li className="mb-12">
                                You can <Link to="/register">register</Link>.
                            </li>
                            <li className="mb-12">
                                You can <Link to="/login">login</Link>.
                            </li>
                            <li className="mb-12">
                                Also saves user data (user shortcuts, layout and theme settings) to FirebaseDb.
                            </li>
                        </ul>

                        <Typography className="my-24 italic" component="p" color="textSecondary">
                            Note: Make sure {`<Router>`} component wrapped with {`<Auth>`} component in 'index.js'.
                        </Typography>

                        <Typography className="text-32 mt-32 mb-8" component="h2">Configuration</Typography>

                        <Typography className="mb-16" component="p">
                            You need to paste the configuration of your Firebase Project into <code>/firebaseService/firebaseServiceConfig.js</code>
                        </Typography>

                        <FuseHighlight component="pre" className="language-jsx my-16">
                            {`
                                const prodConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };

                                const devConfig = {
                                    apiKey           : "YOUR_API_KEY",
                                    authDomain       : "your-app.firebaseapp.com",
                                    databaseURL      : "https://your-app.firebaseio.com",
                                    projectId        : "your-app",
                                    storageBucket    : "your-app.appspot.com",
                                    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
                                };
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(FirebaseAuthDoc);
