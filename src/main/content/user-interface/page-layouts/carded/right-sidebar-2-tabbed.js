import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import FusePageCarded from '../../../../../core/components/FusePageLayouts/FusePageCarded';
import DemoSidebarContent from '../../../../../core/components/DemoSidebarContent';
import DemoContent from '../../../../../core/components/DemoContent';
import {Tab, Tabs} from 'material-ui';

const styles = theme => ({
    layoutRoot   : {},
    layoutToolbar: {
        padding: 0
    },
    tabsRoot     : {
        height: 64
    },
    tabRoot      : {
        height: 64
    }
});

class CardedRightSidebar2TabbedSample extends Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render()
    {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <FusePageCarded
                classes={{
                    root   : classes.layoutRoot,
                    toolbar: classes.layoutToolbar
                }}
                header={
                    <h4>Header</h4>
                }
                contentToolbar={
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                        classes={{
                            root: classes.tabsRoot
                        }}
                    >
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item One"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Two"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Three"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Four"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Five"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Six"/>
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }} label="Item Seven"/>
                    </Tabs>
                }
                content={
                    <div>
                        {value === 0 &&
                        (
                            <div>
                                <h3>Item One</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 1 && (
                            <div>
                                <h3>Item Two</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 2 && (
                            <div>
                                <h3>Item Three</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 3 && (
                            <div>
                                <h3>Item Four</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 4 && (
                            <div>
                                <h3>Item Five</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 5 && (
                            <div>
                                <h3>Item Six</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 6 && (
                            <div>
                                <h3>Item Seven</h3>
                                <DemoContent/>
                            </div>
                        )}
                    </div>
                }
                sidebarPosition="right"
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
                singleScroll
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedRightSidebar2TabbedSample);