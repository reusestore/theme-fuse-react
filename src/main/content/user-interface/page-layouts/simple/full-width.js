import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import DemoContent from '../../../../../core/components/DemoContent';
import FusePageSimple from '../../../../../core/components/FusePageLayouts/FusePageSimple';

const styles = theme => ({
    layoutRoot: {}
});

class SimpleFullWidthSample extends Component {

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
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(SimpleFullWidthSample);