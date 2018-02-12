import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {FusePageSimple, DemoContent, DemoSidebarContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class SimpleLeftSidebarSample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <h4>Header</h4>
                }
                contentToolbar={
                    <h4>Content Toolbar</h4>
                }
                content={
                    <div>
                        <h4>Content</h4>
                        <br/>
                        <DemoContent/>
                    </div>
                }
                leftSidebarHeader={
                    <h4>Sidebar Header</h4>
                }
                leftSidebarContent={
                    <div>
                        <h4>Sidebar Content</h4>
                        <br/>
                        <DemoSidebarContent/>
                    </div>
                }
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(SimpleLeftSidebarSample);