import _ from '@lodash';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';
import { Line } from 'react-chartjs-2';

function Widget5(props) {
	const theme = useTheme();
	const [tabValue, setTabValue] = useState(0);
	const data = _.merge({}, props.data);
	const dataset = data.datasets[Object.keys(data.datasets)[tabValue]];

	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(data, 'options.scales.yAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(data, 'options.scales.yAxes[0].gridLines.color', fade(theme.palette.text.secondary, 0.1));

	return (
		<Card className="w-full rounded-20 shadow">
			<div className="relative p-20 flex flex-row items-center justify-between">
				<div className="flex flex-col">
					<Typography className="h3 sm:h2 font-semibold">Visitors & Page views</Typography>
				</div>

				<div className="flex flex-row items-center">
					<Tabs
						value={tabValue}
						onChange={(event, value) => setTabValue(value)}
						indicatorColor="secondary"
						textColor="inherit"
						variant="scrollable"
						scrollButtons="off"
						className="w-full px-24 -mx-4 min-h-40"
						classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
						TabIndicatorProps={{
							children: <Divider className="w-full h-full rounded-full opacity-50" />
						}}
					>
						{Object.keys(data.datasets).map(key => (
							<Tab
								key={key}
								className="text-14 font-bold min-h-40 min-w-64 mx-4 capitalize"
								disableRipple
								label={key}
							/>
						))}
					</Tabs>
				</div>
			</div>

			<div className="relative h-200 sm:h-320 sm:pb-16">
				<Line
					data={{
						labels: data.labels,
						datasets: dataset.map((obj, index) => {
							const palette = theme.palette[index === 0 ? 'primary' : 'secondary'];
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
					options={data.options}
				/>
			</div>
		</Card>
	);
}

export default memo(Widget5);
