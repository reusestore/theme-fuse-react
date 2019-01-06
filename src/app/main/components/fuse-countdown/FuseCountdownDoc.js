import React from 'react';
import {Typography} from '@material-ui/core';
import {FuseCountdown, FuseHighlight, FusePageSimple} from '@fuse';
import {Link} from 'react-router-dom';

const FuseCountdownDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">FuseCountdown</Typography>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">

                    <Typography className="mb-16" component="p">
                        <code className="language-bash">FuseCountdown</code> is a custom built Fuse component allows you to create countdowns.
                    </Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Usage</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {
                            `
                                <FuseCountdown endDate="2019-07-28" className="my-48"/>
                                `
                        }
                    </FuseHighlight>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Preview</Typography>

                    <FuseCountdown endDate="2019-07-28" className="my-48"/>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Demos</Typography>

                    <ul>
                        <li className="mb-8">
                            <Link to="/pages/coming-soon">Coming Soon</Link>
                        </li>
                    </ul>

                </div>
            }
        />
    );
};

export default FuseCountdownDoc;
