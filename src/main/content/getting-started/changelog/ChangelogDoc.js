import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple} from '@fuse';
import {Typography} from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class ChangelogDoc extends Component {

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
                        <Typography variant="title">Changelog</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.1</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-06-10)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>velocity-react</code> added as dependency, its used for fuseAnimation
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>FuseAnimation</code> <code>FuseAnimationGroup</code> created for easily animate components and applied most of the pages.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>exact</code> property option added to navigation item for matching location exactly.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Other dependency packages Updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.1.0</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-06-06)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Layout system enhanced.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            New Horizontal Layout added (layout-2).
                                        </Typography>
                                    </li>

                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>react-poper</code> added as dependency, its used for horizontal navigation
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI Next</code> updated to v1.2.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Other dependency packages Updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">FIX:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Dialog form of Contacts App and Calendar App fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            (https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Actions and reducers of fuse navigation fixed.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">BREAKING CHANGES:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Layout and Theme settings data structure changed.
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            If you are storing the user data at database, old saved user settings will not work with this version.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Page Layouts default scroll behaviour changed to singleScroll due to new layout mechanism, additional innerScroll attribute also added.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseSettings separated from the settings panel.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.5</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-29)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI Next</code> updated to v1.1.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Other dependency packages Updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">FIX:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Extra control added if user.data exist in Firebase Db
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Navigation Collapse fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps
                                        </Typography>
                                        <Typography className="text-14 mb-8">
                                            (https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.4</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-22)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">BREAKING CHANGES:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>FuseAuth</code> renamed with FuseAuthorization
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Shortcuts data storage moved under the user.data.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI Next</code> updated to v1.0.0
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Firebase integration added as an example for authentication (Also saves user data to firebase/db).
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Register Page Created for Firebase.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            FuseMessage Component added to theme layout for easily show snackbar messages via redux action.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.3</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-16)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>Material UI Next</code> updated to v1.0.0-rc.0
                                        </Typography>
                                        <Typography className="text-12 mb-8">
                                            <a href="https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0" target="_blank" rel="noopener noreferrer"> Checkout the
                                                breaking
                                                changes</a>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>google-map-react</code> updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.2</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-12)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">FIXES:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            Tailwind error on windows.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            missing <code>.env</code> <code>.babelrc</code> files added.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.1</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-05-10)</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">NEW:</Typography>
                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            All dependencies updated.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-24">
                                <Typography className="text-16 pb-8 inline-block border-b-1 mb-16" component="h4">FIXES:</Typography>

                                <ul>
                                    <li>
                                        <Typography className="text-14 mb-8">
                                            <code>cross-env</code> library added for absolute path across platforms.
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-32 mt-48">
                                <Typography className="text-28" component="h2">v1.0.0</Typography>
                                <Typography className="text-16 ml-8" color="textSecondary" component="h3">(2018-04-21)</Typography>
                            </div>

                            <ul>
                                <li><Typography className="text-14 mb-8">Initial Release</Typography></li>
                            </ul>

                        </div>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(ChangelogDoc);
