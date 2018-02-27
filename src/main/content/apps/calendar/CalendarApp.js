import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarHeader from 'main/content/apps/calendar/CalendarHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './store/actions';
import {Button, Icon} from 'material-ui';
import EventDialog from 'main/content/apps/calendar/EventDialog';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

const styles = theme => ({
    root     : {
        display                                                           : 'flex',
        flexDirection                                                     : 'column',
        flex                                                              : 1,
        '& .rbc-header'                                                   : {
            padding   : '12px 6px',
            fontWeight: 500,
            fontSize  : 14
        },
        '& .rbc-label'                                                    : {
            padding: '8px 6px'
        },
        '& .rbc-today'                                                    : {
            backgroundColor: 'transparent'
        },
        '& .rbc-header.rbc-today, & .rbc-month-view .rbc-day-bg.rbc-today': {
            borderBottom: '2px solid ' + theme.palette.secondary.main + '!important'
        },
        '& .rbc-month-view, & .rbc-time-view, & .rbc-agenda-view'         : {
            padding: 24,
            ...theme.mixins.border(0)
        },
        '& .rbc-agenda-view table'                                        : {
            ...theme.mixins.border(1),
            '& thead > tr > th': {
                ...theme.mixins.borderBottom(0)
            },
            '& tbody > tr > td': {
                padding : '12px 6px',
                '& + td': {
                    ...theme.mixins.borderLeft(1)
                }
            }
        },
        '& .rbc-time-view'                                                : {
            '& .rbc-time-header' : {
                ...theme.mixins.border(1)
            },
            '& .rbc-time-content': {
                flex: '0 1 auto',
                ...theme.mixins.border(1)
            }
        },
        '& .rbc-month-view'                                               : {
            '& > .rbc-row'               : {
                ...theme.mixins.border(1)
            },
            '& .rbc-month-row'           : {
                ...theme.mixins.border(1),
                borderWidth: '0 1px 1px 1px!important'
            },
            '& .rbc-header + .rbc-header': {
                ...theme.mixins.borderLeft(1)
            },
            '& .rbc-header'              : {
                ...theme.mixins.borderBottom(0)
            },
            '& .rbc-day-bg + .rbc-day-bg': {
                ...theme.mixins.borderLeft(1)
            }
        },
        '& .rbc-day-slot .rbc-time-slot'                                  : {
            ...theme.mixins.borderTop(1),
            opacity: 0.5
        },
        '& .rbc-time-header > .rbc-row > * + *'                           : {
            ...theme.mixins.borderLeft(1)
        },
        '& .rbc-time-content > * + * > *'                                 : {
            ...theme.mixins.borderLeft(1)
        },
        '& .rbc-day-bg + .rbc-day-bg'                                     : {
            ...theme.mixins.borderLeft(1)
        },
        '& .rbc-time-header > .rbc-row:first-child'                       : {
            ...theme.mixins.borderBottom(1)
        },
        '& .rbc-timeslot-group'                                           : {
            minHeight: 64,
            ...theme.mixins.borderBottom(1)
        },
        '& .rbc-date-cell'                                                : {
            padding   : 8,
            fontSize  : 16,
            fontWeight: 400,
            opacity   : .5
        },
        '& .rbc-event'                                                    : {
            borderRadius            : 0,
            padding                 : '4px 8px',
            backgroundColor         : theme.palette.primary.dark,
            color                   : theme.palette.primary.contrastText,
            boxShadow               : theme.shadows[0],
            transitionProperty      : 'box-shadow',
            transitionDuration      : theme.transitions.duration.short,
            transitionTimingFunction: theme.transitions.easing.easeInOut,
            '&:hover'               : {
                boxShadow: theme.shadows[2]
            }
        },
        '& .rbc-row-segment'                                              : {
            padding: '0 4px 4px 4px'
        },
        '& .rbc-off-range-bg'                                             : {
            backgroundColor: theme.palette.type === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.16)'
        },
        '& .rbc-show-more'                                                : {
            color     : theme.palette.secondary.main,
            background: 'transparent'
        }
    },
    addButton: {
        position: 'absolute',
        right   : 12,
        top     : 172,
        zIndex  : 99
    }
});

class CalendarApp extends Component {

    componentDidMount()
    {
        this.props.getEvents();
    }

    render()
    {
        const {classes, events, openNewEventDialog, openEditEventDialog} = this.props;

        return (
            <div className={classes.root}>
                <BigCalendar
                    selectable
                    className="flex flex-1"
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    defaultDate={new Date(2018, 3, 1)}
                    components={{
                        toolbar: CalendarHeader
                    }}
                    // onNavigate={this.handleNavigate}
                    onSelectEvent={event => {
                        openEditEventDialog(event);
                    }}
                    onSelectSlot={slotInfo => openNewEventDialog({
                        start: slotInfo.start.toLocaleString(),
                        end  : slotInfo.end.toLocaleString()
                    })}
                />
                <Button variant="fab" color="secondary" aria-label="add" className={classes.addButton}
                        onClick={() => openNewEventDialog({
                            start: new Date(),
                            end  : new Date()
                        })}>
                    <Icon>add</Icon>
                </Button>

                <EventDialog/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getEvents          : Actions.getEvents,
        openNewEventDialog : Actions.openNewEventDialog,
        openEditEventDialog: Actions.openEditEventDialog
    }, dispatch);
}

function mapStateToProps({calendarApp})
{
    return {
        events: calendarApp.events.entities
    }
}

export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(CalendarApp));