import React from 'react';
import {Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse/index';

const ProjectStructureDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Project Structure</Typography>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">

                    <Typography className="mb-16" component="p">
                        Here’s the project structure of the Fuse React:
                    </Typography>

                    <img src="assets/images/etc/fuse-react-project-structure.png" alt="fuse react project structure"/>
                </div>
            }
        />
    );
};

export default ProjectStructureDoc;
