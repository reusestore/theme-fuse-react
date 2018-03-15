import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles/index';
import {FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from 'material-ui';

const styles = theme => ({
    layoutRoot: {}
});

class TypographyUI extends Component {

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
                        <Typography variant="title">Typography</Typography>
                        <Button className="normal-case"
                                variant="raised" component="a" href="https://material.io/icons/" target="_blank">
                            <Icon className="mr-4">link</Icon>
                            Reference
                        </Button>
                    </div>
                }
                content={
                    <div className="py-24 max-w-2xl mx-auto">
                        <div className="flex flex-wrap justify-center">
                            <div>
                                <h1>H1</h1>
                                <h2>H2</h2>
                                <h2>H3</h2>
                                <h2>H4</h2>
                            </div>
                            <FuseHighlight component="pre" className="language-html">
                                {`
                                  <h1>H1</h1>
                                  <h2>H2</h2>
                                  <h2>H3</h2>
                                  <h2>H4</h2>
                                `}
                            </FuseHighlight>
                        </div>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(TypographyUI);
