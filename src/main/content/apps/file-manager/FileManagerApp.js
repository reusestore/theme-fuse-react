import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {FusePageSimple} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class FileManagerApp extends Component {
    toggleLeftSidebar = () => {
    };

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
                        <button onClick={() => this.pageLayout.toggleLeftSidebar()}>toggle left</button>
                        <button onClick={() => this.pageLayout.toggleRightSidebar()}>toggle right</button>
                    </div>
                }
                leftSidebarVariant="temporary"
                leftSidebarHeader={
                    <h4>Sidebar Header</h4>
                }
                leftSidebarContent={
                    <div>
                        <h4>Sidebar Content</h4>
                        <br/>
                    </div>
                }
                rightSidebarHeader={
                    <h4>Sidebar Header</h4>
                }
                rightSidebarContent={
                    <div>
                        <h4>Sidebar Content</h4>
                        <br/>
                    </div>
                }
                onRef={instance => {
                    this.pageLayout = instance;
                }}
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(FileManagerApp);