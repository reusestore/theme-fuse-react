import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import FusePageCarded from '../../../../../core/components/FusePageLayouts/FusePageCarded';
import DemoSidebarContent from '../../../../../core/components/DemoSidebarContent';
import DemoContent from '../../../../../core/components/DemoContent';

const styles = theme => ({
    layoutRoot: {}
});

class CardedLeftSidebarSample extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageCarded
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
                sidebarPosition="left"
                sidebarHeader={
                    <h4>Sidebar Header</h4>
                }
                sidebarContent={
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

export default withStyles(styles, {withTheme: true})(CardedLeftSidebarSample);