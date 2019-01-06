import React from 'react';
import {Typography} from '@material-ui/core';
import {FuseHighlight, FusePageSimple} from '@fuse';

const SettingsDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Fuse Settings</Typography>
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
                            const fuseSettingsConfig = {
                                layout          : {
                                    style : 'layout1',
                                    config: {
                                        scroll : 'content',
                                        navbar : {
                                            display : true,
                                            folded  : false,
                                            position: 'left'
                                        },
                                        toolbar: {
                                            display : true,
                                            style   : 'fixed',
                                            position: 'below'
                                        },
                                        footer : {
                                            display : true,
                                            style   : 'fixed',
                                            position: 'below'
                                        },
                                        mode   : 'fullwidth'
                                    }
                                },
                                customScrollbars: true,
                                theme           : {
                                    main   : 'default',
                                    navbar : 'mainThemeDark',
                                    toolbar: 'mainThemeLight',
                                    footer : 'mainThemeDark'
                                }
                            };

                            export default fuseSettingsConfig;
                            `}
                    </FuseHighlight>
                </div>
            }
        />
    );
};

export default SettingsDoc;
