import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import DemoContent from '../../../../../core/components/DemoContent';
import FusePageSimple from '../../../../../core/components/FusePageLayouts/FusePageSimple';
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

class SimpleTabbedSample extends Component {

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
            <FusePageSimple
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
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(SimpleTabbedSample);