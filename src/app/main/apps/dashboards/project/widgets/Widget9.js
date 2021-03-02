import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import _ from '@lodash';
import { memo, useState } from 'react';
import { Line } from 'react-chartjs-2';

function Widget9(props) {
	const [currentRange, setCurrentRange] = useState(props.widget.currentRange);
	const widget = _.merge({}, props.widget);
	const theme = useTheme();

	function handleChangeRange(ev) {
		setCurrentRange(ev.target.value);
	}

	return (
		<Paper className="w-full rounded-20 shadow">
			<div className="flex items-center justify-between p-20 h-64">
				<Typography className="text-16 font-medium">{widget.title}</Typography>

				<Select
					native
					value={currentRange}
					onChange={handleChangeRange}
					inputProps={{
						name: 'currentRange'
					}}
					className="font-medium opacity-75"
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
			{['weeklySpent', 'totalSpent', 'remaining'].map(id => (
				<div className="flex flex-wrap items-center w-full p-12" key={id}>
					<div className="flex flex-col w-full sm:w-1/2 p-8">
						<Typography className="text-13 font-semibold" color="textSecondary">
							{widget[id].title}
						</Typography>
						<div className="flex items-center">
							<Typography className="text-32 font-normal" color="textSecondary">
								$
							</Typography>
							<Typography className="text-32 mx-4 font-medium tracking-tighter">
								{widget[id].count[currentRange]}
							</Typography>
						</div>
					</div>
					<div className="flex w-full sm:w-1/2 p-8">
						<div className="h-48 w-full">
							<Line
								data={{
									labels: widget[id].chart[currentRange].labels,
									datasets: widget[id].chart[currentRange].datasets.map((obj, index) => {
										const palette = theme.palette.secondary;
										return {
											...obj,
											borderColor: palette.main,
											backgroundColor: palette.main,
											pointBackgroundColor: palette.dark,
											pointHoverBackgroundColor: palette.main,
											pointBorderColor: palette.contrastText,
											pointHoverBorderColor: palette.contrastText
										};
									})
								}}
								options={widget[id].chart.options}
							/>
						</div>
					</div>
				</div>
			))}
			<Divider />
			<div className="flex flex-col w-full p-20">
				<Typography className="text-13 font-semibold" color="textSecondary">
					{widget.totalBudget.title}
				</Typography>
				<div className="flex items-center">
					<Typography className="text-32 font-normal" color="textSecondary">
						$
					</Typography>
					<Typography className="text-32 mx-4 font-medium tracking-tighter">
						{widget.totalBudget.count}
					</Typography>
				</div>
			</div>
		</Paper>
	);
}

export default memo(Widget9);
