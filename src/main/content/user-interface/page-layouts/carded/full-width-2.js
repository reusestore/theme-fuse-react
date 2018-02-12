import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import {FusePageCarded, DemoContent} from '@fuse';

const styles = theme => ({
    layoutRoot: {}
});

class CardedFullWidth2Sample extends Component {

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
                singleScroll
            />
        )
    };
}

export default withStyles(styles, {withTheme: true})(CardedFullWidth2Sample);