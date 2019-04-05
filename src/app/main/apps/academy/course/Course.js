import React, {useEffect, useRef} from 'react';
import {Paper, Hidden, Icon, IconButton, Fab, Typography, Stepper, Step, StepLabel} from '@material-ui/core';
import {FusePageSimple, FuseScrollbars} from '@fuse';
import withReducer from 'app/store/withReducer';
import connect from 'react-redux/es/connect/connect';
import SwipeableViews from 'react-swipeable-views';
import {green} from '@material-ui/core/colors';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import reducer from '../store/reducers';
import * as Actions from '../store/actions';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    stepLabel : {
        cursor: 'pointer!important'
    },
    successFab: {
        background: green[500] + '!important',
        color     : 'white!important'
    }
}));

function Course(props)
{
    const classes = useStyles(props);
    const pageLayout = useRef(null);

    useEffect(() => {
        /**
         * Get the Course Data
         */
        props.getCourse(props.match.params);
    }, []);

    useEffect(() => {
        /**
         * If the course is opened for the first time
         * Change ActiveStep to 1
         */
        if ( props.course && props.course.activeStep === 0 )
        {
            props.updateCourse({activeStep: 1});
        }
    }, [props.course]);

    function handleChangeActiveStep(index)
    {
        props.updateCourse({activeStep: index + 1});
    }

    function handleNext()
    {
        props.updateCourse({activeStep: props.course.activeStep + 1});
    }

    function handleBack()
    {
        props.updateCourse({activeStep: props.course.activeStep - 1});
    }

    const activeStep = props.course && props.course.activeStep !== 0 ? props.course.activeStep : 1;

    return (
        <FusePageSimple
            classes={{
                content: "flex flex-col flex-auto overflow-hidden",
                header : "h-72 min-h-72"
            }}
            header={
                <div className="flex flex-1 items-center px-16 lg:px-24">
                    <Hidden lgUp>
                        <IconButton
                            onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>
                    <IconButton
                        className="mr-16"
                        to="/apps/academy/courses"
                        component={Link}
                    >
                        <Icon>arrow_back</Icon>
                    </IconButton>
                    {props.course && (
                        <Typography className="flex-1 text-20">{props.course.title}</Typography>
                    )}
                </div>
            }
            content={
                props.course && (
                    <div className="flex flex-1 relative overflow-hidden">
                        <FuseScrollbars className="w-full overflow-auto">
                            <SwipeableViews
                                className="overflow-hidden"
                                index={activeStep - 1}
                                enableMouseEvents={true}
                                onChangeIndex={handleChangeActiveStep}
                            >
                                {props.course.steps.map((step, index) => (
                                    <div className="flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64" key={step.id}>
                                        <Paper className="w-full max-w-lg rounded-8 p-16 md:p-24" elevation={1}>
                                            <div dangerouslySetInnerHTML={{__html: step.content}}/>
                                        </Paper>
                                    </div>
                                ))}
                            </SwipeableViews>
                        </FuseScrollbars>

                        <div className="flex justify-center w-full absolute pin-l pin-r pin-b pb-16 md:pb-32">
                            <div className="flex justify-between w-full max-w-xl px-8">
                                <div>
                                    {activeStep !== 1 && (
                                        <Fab className="" color="secondary" onClick={handleBack}>
                                            <Icon>chevron_left</Icon>
                                        </Fab>
                                    )}
                                </div>
                                <div>
                                    {activeStep < props.course.steps.length ? (
                                            <Fab className="" color="secondary" onClick={handleNext}>
                                                <Icon>chevron_right</Icon>
                                            </Fab>
                                        ) :
                                        (
                                            <Fab
                                                className={classes.successFab}
                                                to="/apps/academy/courses"
                                                component={Link}
                                            >
                                                <Icon>check</Icon>
                                            </Fab>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            leftSidebarContent={
                props.course && (
                    <Stepper
                        classes={{root: "bg-transparent"}}
                        activeStep={activeStep - 1}
                        orientation="vertical"
                    >
                        {props.course.steps.map((step, index) => {
                            return (
                                <Step
                                    key={step.id}
                                    onClick={() => handleChangeActiveStep(index)}
                                >
                                    <StepLabel classes={{root: classes.stepLabel}}>{step.title}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                )
            }
            innerScroll
            ref={pageLayout}
        />
    )
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getCourse   : Actions.getCourse,
        updateCourse: Actions.updateCourse
    }, dispatch);
}

function mapStateToProps({academyApp})
{
    return {
        course: academyApp.course
    }
}

export default withReducer('academyApp', reducer)(connect(mapStateToProps, mapDispatchToProps)(Course));
