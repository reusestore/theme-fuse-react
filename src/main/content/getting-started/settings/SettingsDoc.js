import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class SettingsDoc extends Component {

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
                        <Typography variant="title">Fuse Settings</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <Typography className="text-32 mb-8" component="h2">Default Settings</Typography>

                        <Typography className="mb-16" component="p">
                            You can set default settings of your app at <code className="language-bash">fuse-configs/FuseSettings.js</code>
                        </Typography>

                        <FuseHighlight component="pre" className="language-js">
                            {`
                            const FuseSettings = {
                                layout          : {
                                    navigation          : 'left', // 'right', 'left', 'top', 'none'
                                    navigationFolded    : false, // true, false
                                    navigationFoldedOpen: false,
                                    toolbar             : 'below', // 'above', 'below', 'none'
                                    footer              : 'below', // 'above', 'below', 'none'
                                    mode                : 'fullwidth' // 'boxed', 'fullwidth'
                                },
                                customScrollbars: true,
                                theme           : 'default',
                                navbarTheme     : 'default',
                                toolbarTheme    : 'default',
                                footerTheme     : 'default'
                            };

                            export default FuseSettings;
                            `}
                        </FuseHighlight>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(SettingsDoc);
