import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FusePageSimple} from '@fuse/index';
import {Typography} from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';

const styles = theme => ({
    layoutRoot: {},
    note      : {
        border         : '1px solid ' + yellow[500],
        backgroundColor: yellow[200],
        color          : theme.palette.getContrastText(yellow[200]),
        padding        : 16
    }
});

class PrerequisitesDoc extends Component {

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
                        <Typography variant="title">Prerequisites</Typography>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">

                        <div className={classes.note}>
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
    }
}

export default withStyles(styles, {withTheme: true})(PrerequisitesDoc);
