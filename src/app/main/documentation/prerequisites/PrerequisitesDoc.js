import React from 'react';
import {Typography} from '@material-ui/core';
import {FusePageSimple} from '@fuse';

const PrerequisitesDoc = () => {
    return (
        <FusePageSimple
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Prerequisites</Typography>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">

                    <div className="border-1 border-solid border-yellow bg-yellow-light text-yellow-darkest p-16">
                        This section will give you some information about what tools you will need. You can skip to the Installation section to start installing the template.
                        We already mentioned all the prerequisites and how to install them in the Installation section.
                    </div>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Node.js</Typography>
                    <Typography className="mb-16" component="p">
                        To install and use Fuse React, you will need
                        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener" className="mx-8 font-bold">
                            Node.js
                        </a>
                        installed to your computer. We won't get into too much detail about Node.js as it's out of the scope of
                        this documentation. Also you won't need to actually use Node.js, it's only required for the development process.
                    </Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Git</Typography>
                    <Typography className="mb-16" component="p">
                        To be able to install and use Fuse, you will also need
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer noopener" className="mx-8 font-bold">
                            Git
                        </a>
                        installed to your computer. Git is required for npm/yarn to work correctly.
                    </Typography>

                    <Typography className="text-32 mt-32 mb-8" component="h2">Yarn - Package Manager</Typography>
                    <Typography className="mb-16" component="p">
                        Fuse React uses
                        <a href="https://yarnpkg.com" target="_blank" rel="noreferrer noopener" className="mx-8 font-bold">
                            yarn
                        </a>
                        package manager to install and manage 3rd party components and libraries.
                    </Typography>
                </div>
            }
        />
    );
};

export default PrerequisitesDoc;
