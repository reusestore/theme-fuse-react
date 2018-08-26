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

class ProjectStructureDoc extends Component {

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
                        <Typography variant="title">Project Structure</Typography>
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
    }
}

export default withStyles(styles, {withTheme: true})(ProjectStructureDoc);
