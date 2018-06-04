import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageCarded, DemoContent} from '@fuse';
import {Tab, Tabs} from '@material-ui/core';

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

class CardedFullWidth2TabbedSample extends Component {

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
                    <div className="py-24"><h4>Header</h4></div>
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
                            label="Item One"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Two"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Three"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Four"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Five"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Six"
                        />
                        <Tab
                            classes={{
                                root: classes.tabRoot
                            }}
                            label="Item Seven"
                        />
                    </Tabs>
                }
                content={
                    <div className="p-24">
                        {value === 0 &&
                        (
                            <div>
                                <h3 className="mb-16">Item One</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 1 && (
                            <div>
                                <h3 className="mb-16">Item Two</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 2 && (
                            <div>
                                <h3 className="mb-16">Item Three</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 3 && (
                            <div>
                                <h3 className="mb-16">Item Four</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 4 && (
                            <div>
                                <h3 className="mb-16">Item Five</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 5 && (
                            <div>
                                <h3 className="mb-16">Item Six</h3>
                                <DemoContent/>
                            </div>
                        )}
                        {value === 6 && (
                            <div>
                                <h3 className="mb-16">Item Seven</h3>
                                <DemoContent/>
                            </div>
                        )}
                    </div>
                }
                innerScroll
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedFullWidth2TabbedSample);