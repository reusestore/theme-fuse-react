import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import CalendarHeader from './CalendarHeader';
import EventDialog from './EventDialog';
import reducer from './store';
import {
	dateFormat,
	selectEvents,
	openNewEventDialog,
	openEditEventDialog,
	updateEvent,
	getEvents
} from './store/eventsSlice';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const allViews = Object.keys(Views).map(k => Views[k]);

const useStyles = makeStyles(theme => ({
	root: {},
	calendar: {
		backgroundColor: theme.palette.background.paper,

		'& .rbc-header': {
			padding: '12px 6px',
			fontWeight: 600,
			fontSize: 14,
			opacity: 0.75
		},
		'& .rbc-label': {
			padding: '8px 6px'
		},
		'& .rbc-today': {
			backgroundColor: 'transparent'
		},
		'& .rbc-header.rbc-today, & .rbc-month-view .rbc-day-bg.rbc-today': {
			borderBottom: `2px solid ${theme.palette.secondary.main}!important`
		},
		'& .rbc-month-view, & .rbc-time-view, & .rbc-agenda-view': {
			...theme.mixins.border(0)
		},
		'& .rbc-agenda-view table.rbc-agenda-table': {
			...theme.mixins.border(0),
			'& thead > tr > th': {
				...theme.mixins.borderBottom(1)
			},
			'& tbody > tr > td': {
				padding: '12px 6px',
				'& + td': {
					...theme.mixins.borderLeft(1)
				}
			}
		},
		'& .rbc-agenda-table': {
			'& th': {
				border: 0
			},
			'& th, & td': {
				padding: '12px 16px!important'
			}
		},
		'& .rbc-time-view': {
			'& .rbc-time-header': {
				...theme.mixins.border(0)
			},
			'& .rbc-time-content': {
				flex: '0 1 auto',
				...theme.mixins.border(0)
			},
			'& .rbc-row': {
				minHeight: 42
			},
			'& .rbc-label': {
				fontWeight: 'semibold'
			}
		},
		'& .rbc-month-view': {
			'& > .rbc-month-header': {
				borderRadius: '20px 20px 0 0'
			},
			'& > .rbc-row': {
				...theme.mixins.border(0)
			},
			'& .rbc-month-row': {
				...theme.mixins.border(0),
				borderWidth: '1px 0 0 0!important',
				minHeight: 128
			},
			'& .rbc-header + .rbc-header': {
				...theme.mixins.borderLeft(1)
			},
			'& .rbc-header': {
				...theme.mixins.borderBottom(0)
			},
			'& .rbc-day-bg + .rbc-day-bg': {
				...theme.mixins.borderLeft(1)
			}
		},
		'& .rbc-day-slot .rbc-time-slot': {
			...theme.mixins.borderTop(1),
			opacity: 0.5
		},
		'& .rbc-time-header > .rbc-row > * + *': {
			...theme.mixins.borderLeft(1)
		},
		'& .rbc-time-content > * + * > *': {
			...theme.mixins.borderLeft(1)
		},
		'& .rbc-day-bg + .rbc-day-bg': {
			...theme.mixins.borderLeft(1)
		},
		'& .rbc-time-header > .rbc-row:first-child': {
			...theme.mixins.borderBottom(1)
		},
		'& .rbc-timeslot-group': {
			minHeight: 64,
			...theme.mixins.borderBottom(1)
		},
		'& .rbc-date-cell': {
			padding: 8,
			fontSize: 16,
			fontWeight: 400,
			opacity: 0.5,
			'& > a': {
				color: 'inherit'
			}
		},
		'& .rbc-event': {
			borderRadius: 12,
			minHeight: 24,
			padding: '4px 12px',
			backgroundColor: theme.palette.primary.dark,
			color: theme.palette.primary.contrastText,
			boxShadow: theme.shadows[0],
			transitionProperty: 'box-shadow',
			transitionDuration: theme.transitions.duration.short,
			transitionTimingFunction: theme.transitions.easing.easeInOut,
			position: 'relative',
			'&:hover': {
				boxShadow: theme.shadows[2]
			}
		},
		'& .rbc-row-segment': {
			padding: '0 4px 4px 4px'
		},
		'& .rbc-off-range-bg': {
			backgroundColor: theme.palette.type === 'light' ? 'rgba(0,0,0,0.03)' : 'rgba(0,0,0,0.16)'
		},
		'& .rbc-show-more': {
			color: theme.palette.secondary.main,
			background: 'transparent'
		},
		'& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event': {
			position: 'static'
		},
		'& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:first-child': {
			left: 0,
			top: 0,
			bottom: 0,
			height: 'auto'
		},
		'& .rbc-addons-dnd .rbc-addons-dnd-resizable-month-event .rbc-addons-dnd-resize-month-event-anchor:last-child': {
			right: 0,
			top: 0,
			bottom: 0,
			height: 'auto'
		}
	},
	addButton: {
		position: 'absolute',
		right: 12,
		top: 172,
		zIndex: 99
	}
}));

function CalendarApp(props) {
	const dispatch = useDispatch();
	const events = useSelector(selectEvents).map(event => ({
		...event,
		start: moment(event.start, dateFormat).toDate(),
		end: moment(event.end, dateFormat).toDate()
	}));

	const classes = useStyles(props);
	const headerEl = useRef(null);

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	function moveEvent({ event, start, end }) {
		dispatch(
			updateEvent({
				...event,
				start,
				end
			})
		);
	}

	function resizeEvent({ event, start, end }) {
		delete event.type;
		dispatch(
			updateEvent({
				...event,
				start,
				end
			})
		);
	}

	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto relative')}>
			<div ref={headerEl} />
			<div className="flex flex-1 p-24 container">
				<motion.div
					className="w-full"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
				>
					<DragAndDropCalendar
						className={clsx(classes.calendar, 'flex flex-1 shadow rounded-20 overflow-hidden')}
						selectable
						localizer={localizer}
						events={events}
						onEventDrop={moveEvent}
						resizable
						onEventResize={resizeEvent}
						defaultView={Views.MONTH}
						defaultDate={new Date(2020, 3, 1)}
						startAccessor="start"
						endAccessor="end"
						views={allViews}
						step={60}
						showMultiDayTimes
						components={{
							toolbar: _props => {
								return headerEl.current
									? ReactDOM.createPortal(<CalendarHeader {..._props} />, headerEl.current)
									: null;
							}
						}}
						// onNavigate={handleNavigate}
						onSelectEvent={event => {
							dispatch(openEditEventDialog(event));
						}}
						onSelectSlot={slotInfo => dispatch(openNewEventDialog(slotInfo))}
					/>
				</motion.div>

				<motion.div
					className={classes.addButton}
					initial={{ scale: 0 }}
					animate={{ scale: 1, transition: { delay: 0.4 } }}
				>
					<Fab
						color="secondary"
						aria-label="add"
						onClick={() =>
							dispatch(
								openNewEventDialog({
									start: new Date(),
									end: new Date()
								})
							)
						}
					>
						<Icon>add</Icon>
					</Fab>
				</motion.div>
				<EventDialog />
			</div>
		</div>
	);
}

export default withReducer('calendarApp', reducer)(CalendarApp);

/*
IE 11 Fix
*/
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = s => {
		let el = this;

		do {
			if (el.matches(s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}
