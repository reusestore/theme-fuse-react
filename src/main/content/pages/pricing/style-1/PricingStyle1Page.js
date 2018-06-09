import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles/index';
import {Button, Card, CardContent, Divider, Typography} from '@material-ui/core';
import classNames from 'classnames';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';

const styles = theme => ({
    root      : {
        '& .container': {
            width   : '100%',
            maxWidth: 840,
            margin  : '0 auto'
        }
    },
    card      : {},
    cardHeader: {
        backgroundColor: theme.palette.grey[800],
        color          : theme.palette.getContrastText(theme.palette.grey[800])
    },
    header    : {
        height        : 600,
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover',
        color         : '#fff'
    },
    content   : {}

});

class PricingStyle1Page extends Component {

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classNames(classes.root, "")}>

                <div className={classNames(classes.header, "flex")}>

                    <div className="container p-24">

                        <div className="text-center my-128 mx-24">

                            <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                                <Typography variant="display3" color="inherit" className="font-light">
                                    Simple Pricing!
                                </Typography>
                            </FuseAnimate>

                            <FuseAnimate duration={400} delay={600}>
                                <Typography variant="subheading" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                                    The most advanced customer support tools with a simple and affordable pricing. And you can always try
                                    for 30 days, free!
                                </Typography>
                            </FuseAnimate>
                        </div>
                    </div>
                </div>

                <div className={classNames(classes.content, "-mt-192")}>

                    <div className="container">

                        <FuseAnimateGroup
                            enter={{
                                animation: "transition.slideUpBigIn"
                            }}
                            className="flex items-center justify-center flex-wrap"
                        >
                            <div className="w-full max-w-320 sm:w-1/3 p-12">
                                <Card className={classes.card}>

                                    <div className={classNames(classes.cardHeader, "px-24 py-16")}>
                                        <Typography variant="subheading" color="inherit">BASIC</Typography>
                                    </div>

                                    <CardContent className="p-32">

                                        <div className="flex justify-center">
                                            <Typography variant="headline" color="textSecondary">$</Typography>
                                            <div className="flex items-end">
                                                <Typography className="text-72 mx-4 font-light leading-none">4</Typography>
                                                <Typography variant="subheading" color="textSecondary">/ month</Typography>
                                            </div>
                                        </div>

                                        <Divider className="my-32"/>

                                        <div className="flex flex-col">
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">10</span>
                                                Projects
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">10</span>
                                                Pages
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">100</span>
                                                Mb Disk Space
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex justify-center pb-32">
                                        <Button variant="raised" color="secondary" className="w-128">BUY NOW</Button>
                                    </div>
                                </Card>
                            </div>

                            <div className="w-full max-w-320 sm:w-1/3 p-12">

                                <Card className={classes.card} raised>

                                    <div className={classNames(classes.cardHeader, "flex items-center justify-between px-24 py-16")}>
                                        <Typography variant="subheading" color="inherit">STANDART</Typography>
                                        <Typography variant="caption" color="inherit">Save 15%</Typography>
                                    </div>

                                    <CardContent className="p-32">

                                        <div className="flex justify-center">
                                            <Typography variant="headline" color="textSecondary">$</Typography>
                                            <div className="flex items-end">
                                                <Typography className="text-72 mx-4 font-light leading-none">8</Typography>
                                                <Typography variant="subheading" color="textSecondary">/ month</Typography>
                                            </div>
                                        </div>

                                        <Divider className="my-32"/>

                                        <div className="flex flex-col">
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">20</span>
                                                Projects
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">20</span>
                                                Pages
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">200</span>
                                                Mb Disk Space
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex justify-center pb-32">
                                        <Button variant="raised" color="secondary" className="w-128">BUY NOW</Button>
                                    </div>
                                </Card>
                            </div>

                            <div className="w-full max-w-320 sm:w-1/3 p-12">

                                <Card className={classes.card}>

                                    <div className={classNames(classes.cardHeader, "px-24 py-16")}>
                                        <Typography variant="subheading" color="inherit">ADVANCED</Typography>
                                    </div>

                                    <CardContent className="p-32">

                                        <div className="flex justify-center">
                                            <Typography variant="headline" color="textSecondary" className="font-medium">$</Typography>
                                            <div className="flex items-end">
                                                <Typography className="text-72 mx-4 font-light leading-none">12</Typography>
                                                <Typography variant="subheading" color="textSecondary">/ month</Typography>
                                            </div>
                                        </div>

                                        <Divider className="my-32"/>

                                        <div className="flex flex-col">
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">40</span>
                                                Projects
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">40</span>
                                                Pages
                                            </Typography>
                                            <Typography variant="subheading" className="">
                                                <span className="font-bold mr-4">500</span>
                                                Mb Disk Space
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <div className="flex justify-center pb-32">
                                        <Button variant="raised" color="secondary" className="w-128">BUY NOW</Button>
                                    </div>
                                </Card>
                            </div>
                        </FuseAnimateGroup>

                        <div className="flex flex-col items-center py-96">

                            <Typography variant="display1" className="pb-32 font-light">Frequently Asked Questions</Typography>

                            <div className="flex flex-wrap w-full">

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">How does free trial work?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                        accumsan. In dignissim laoreet ipsum eu interdum.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                        Donec maximus ipsum in malesuada hendrerit.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.
                                        Donec maximus ipsum in malesuada hendrerit.
                                    </Typography>
                                </div>

                                <div className="w-full sm:w-1/2 p-24">
                                    <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                                    <Typography className="text-16" color="textSecondary">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt
                                        accumsan. In dignissim laoreet ipsum eu interdum.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PricingStyle1Page);
