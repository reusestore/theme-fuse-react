import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {FuseHighlight, FusePageSimple, FuseAnimate} from '@fuse';
import {Button, Card, CardContent, Icon, Typography} from '@material-ui/core';

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
                        <FuseAnimate>
                            <Typography variant="title">Typography</Typography>
                        </FuseAnimate>
                        <Button
                            className="normal-case"
                            variant="raised"
                            component="a"
                            href="https://material-ui-next.com/style/typography/"
                            target="_blank"
                        >
                            <Icon className="mr-4">link</Icon>
                            Reference
                        </Button>
                    </div>
                }
                content={
                    <div className="p-24 max-w-2xl mx-auto">
                        <FuseAnimate animation="transition.slideUpBigIn" delay={300}>
                            <Card>
                                <CardContent>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="display4">
                                                Display 4
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography variant="display4">Display 4</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="display3">
                                                Display 3
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography variant="display3">Display 3</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="display2">
                                                Display 2
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography variant="display2">Display 2</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="display1">
                                                Display 1
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography variant="display1">Display 1</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="headline">
                                                Headline
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                          <Typography variant="headline">Headline</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="title">Title</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography variant="title">Title</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="subheading">Subheading</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                             <Typography variant="subheading">Subheading</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="body2">Body 2</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                            <Typography variant="body2">Body 2</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="body1">Body 1</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                            <Typography variant="body1">Body 1</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="caption">Caption</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                            <Typography variant="caption">Caption</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography gutterBottom
                                                        noWrap>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                           <Typography noWrap>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-center mb-16">
                                        <div className="flex w-1 sm:w-1/2">
                                            <Typography variant="button">Button</Typography>
                                        </div>
                                        <div className="flex w-full sm:w-1/2">
                                            <FuseHighlight component="pre" className="language-html w-full">
                                                {`
                                             <Typography variant="button">Button</Typography>
                                        `}
                                            </FuseHighlight>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </FuseAnimate>
                    </div>
                }
            />
        );
    }
}

export default withStyles(styles, {withTheme: true})(TypographyUI);
