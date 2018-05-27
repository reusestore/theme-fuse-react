import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {}
});

function Cards({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="title">Cards</Typography>
                    <Button
                        className="normal-case"
                        variant="raised"
                        component="a"
                        href="https://material-ui-next.com/demos/cards"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Cards</Typography>
                    <Typography className="mb-16" component="div">A <a href="https://material.io/design/components/cards.html">card</a> is a sheet of material that serves as an
                        entry point to more detailed information.</Typography>
                    <Typography className="mb-16" component="div">Cards display content composed of different elements whose size or supported actions vary.</Typography>
                    <Typography className="mb-16" component="div">Cards are a convenient means of displaying content composed of different elements. They’re also well-suited for
                        showcasing elements whose size or supported actions vary, like photos with captions of variable length.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Simple Card</Typography>
                    <Typography className="mb-16" component="div">Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that
                        cards are entry points to more complex and detailed information.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/SimpleCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/SimpleCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Media</Typography>
                    <Typography className="mb-16" component="div">Example of a card using an image to reinforce the content.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/SimpleMediaCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/SimpleMediaCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">UI Controls</Typography>
                    <Typography className="mb-16" component="div">Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically
                        placed at the bottom of the card.</Typography>
                    <Typography className="mb-16" component="div">Here&#39;s an example of a media control card.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/MediaControlCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/MediaControlCard.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Complex Interaction</Typography>
                    <Typography className="mb-16" component="div">On desktop, card content can expand.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/cards/RecipeReviewCard.js').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/cards/RecipeReviewCard.js')}
                    /></Typography>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(Cards);
                        