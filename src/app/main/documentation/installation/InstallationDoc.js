import React from 'react';
import {Typography} from '@material-ui/core';
import {FusePageSimple, FuseHighlight} from '@fuse';

const InstallationDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Installation</Typography>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <ol>
                        <li className="mb-16">
                            Unzip the zip file that you have downloaded from Themeforest. Inside the zip file, you will find the Skeleton
                            Project <b>(Fuse-react-x.x.x-skeleton.zip)</b> along with the Demo Project <b>(Fuse-react-x.x.x-demo.zip)</b>, PSD designs and a readme file.
                        </li>
                        <li className="mb-16">
                            Extract the contents of the zip file <b>(Fuse-react-x.x.x-skeleton.zip)</b> into a folder that you will work within. For this documentation, we will
                            refer that
                            as "your work folder".
                        </li>
                        <li className="mb-16">
                            Open your favorite console application (Terminal, Command Prompt etc.), navigate into your work folder, run the following command and wait for it to
                            finish:
                            <FuseHighlight component="pre" className="language-bash my-16">
                                {`
                                      yarn
                                    `}
                            </FuseHighlight>

                            This command will install all the required Node.js modules into the node_modules directory inside your work folder.
                            And now, you are ready to run the Fuse React for the first time.
                        </li>
                    </ol>
                </div>
            }
        />
    );
};

export default InstallationDoc;
