import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import _ from '@lodash';
import { memo, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function Widget6(props) {
	const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
	const widget = _.merge({}, props.widget);

	function handleChangeRange(ev) {
		setCurrentRange(ev.target.value);
	}

	return (
		<Paper className="w-full rounded-20 shadow">
			<div className="flex items-center justify-between p-20 h-64 ">
				<Typography className="text-16 font-semibold">{widget.title}</Typography>

				<Select
					native
					value={currentRange}
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					className="font-semibold opacity-75"
					disableUnderline
				>
					{Object.entries(widget.ranges).map(([key, n]) => {
						return (
							<option key={key} value={key}>
								{n}
							</option>
						);
					})}
				</Select>
			</div>
			<div className="h-400 w-full p-32">
				<Doughnut
					data={{
						labels: widget.mainChart.labels,
						datasets: widget.mainChart.datasets[currentRange]
					}}
					options={widget.mainChart.options}
				/>
			</div>
			<div className="flex items-center p-8 border-t-1">
				<div className="flex flex-1 flex-col items-center justify-center p-16 border-r-1">
					<Typography className="text-32 font-semibold mb-8 leading-none">
						{widget.footerLeft.count[currentRange]}
					</Typography>
					<Typography className="text-13 font-medium" color="textSecondary">
						{widget.footerLeft.title}
					</Typography>
				</div>
				<div className="flex flex-1 flex-col items-center justify-center p-16">
					<Typography className="text-32 font-semibold mb-8 leading-none">
						{widget.footerRight.count[currentRange]}
					</Typography>
					<Typography className="text-13 font-medium" color="textSecondary">
						{widget.footerRight.title}
					</Typography>
				</div>
			</div>
		</Paper>
	);
}

export default memo(Widget6);
