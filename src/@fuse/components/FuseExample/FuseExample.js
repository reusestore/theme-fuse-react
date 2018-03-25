import React, {PureComponent} from 'react';
import {AppBar, Card, Icon, Tab, Tabs, withStyles} from 'material-ui';
import {FuseHighlight} from '@fuse';

const styles = theme => ({
    root: {}
});

class FuseExample extends PureComponent {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render()
    {
        const {classes, className, component: Component, raw} = this.props;
        const {value} = this.state;
        return (
            <Card className={className}>
                <AppBar position="static" color="default" elevation={0}>
                    <Tabs classes={
                        {
                            root         : 'border-b-1',
                            flexContainer: 'justify-end'
                        }} value={value} onChange={this.handleChange}>
                        <Tab classes={{root: 'min-w-64'}} icon={<Icon>remove_red_eye</Icon>}/>
                        <Tab classes={{root: 'min-w-64'}} icon={<Icon>code</Icon>}/>
                    </Tabs>
                </AppBar>
                <div>
                    {value === 0 && (
                        <div className="p-24">
                            <Component/>
                        </div>
                    )}
                    {value === 1 && (
                        <div>
                            <FuseHighlight component="pre" className="language-javascript">
                                {raw}
                            </FuseHighlight>
                        </div>
                    )}
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(FuseExample);
