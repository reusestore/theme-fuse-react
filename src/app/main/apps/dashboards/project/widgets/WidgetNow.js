import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { memo, useEffect, useRef, useState } from 'react';

function WidgetNow() {
	const [time, setTime] = useState(moment());
	const intervalRef = useRef();

	useEffect(() => {
		intervalRef.current = setInterval(update, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	});

	function update() {
		setTime(moment());
	}

	return (
		<Paper className="w-full rounded-20 shadow flex flex-col justify-between">
			<div className="flex items-center justify-between px-4 pt-8">
				<Typography className="text-16 px-16 font-medium" color="textSecondary">
					{time.format('dddd, HH:mm:ss')}
				</Typography>
				<IconButton aria-label="more">
					<Icon>more_vert</Icon>
				</IconButton>
			</div>
			<div className="text-center px-20 pt-20 pb-32">
				<Typography className="text-24 leading-tight font-normal" color="textSecondary">
					{time.format('MMMM')}
				</Typography>
				<Typography className="text-72 leading-tight font-medium" color="textSecondary">
					{time.format('D')}
				</Typography>
				<Typography className="mt-8 text-20 leading-tight font-semibold" color="textSecondary">
					{time.format('Y')}
				</Typography>
			</div>
		</Paper>
	);
}

export default memo(WidgetNow);
