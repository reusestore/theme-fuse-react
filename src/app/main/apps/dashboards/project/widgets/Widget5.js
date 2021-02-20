import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import _ from '@lodash';
import { memo, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';

function Widget5(props) {
	const theme = useTheme();
	const [tabValue, setTabValue] = useState(0);
	const widget = _.merge({}, props.widget);
	const currentRange = Object.keys(widget.ranges)[tabValue];

	_.setWith(widget, 'widget.mainChart.options.scales.xAxes[0].ticks.fontColor', theme.palette.text.secondary);
	_.setWith(widget, 'widget.mainChart.options.scales.yAxes[0].ticks.fontColor', theme.palette.text.secondary);

	return (
		<Paper className="w-full rounded-20 shadow">
			<div className="flex items-center justify-between p-20">
				<Typography className="text-16 font-medium">{widget.title}</Typography>
				<Tabs
					value={tabValue}
					onChange={(ev, value) => setTabValue(value)}
					indicatorColor="secondary"
					textColor="inherit"
					variant="scrollable"
					scrollButtons="off"
					className="-mx-4 min-h-40"
					classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
					TabIndicatorProps={{
						children: <Divider className="w-full h-full rounded-full opacity-50" />
					}}
				>
					{Object.entries(widget.ranges).map(([key, n]) => (
						<Tab className="text-14 font-semibold min-h-40 min-w-64 mx-4" disableRipple key={key} label={n} />
					))}
				</Tabs>
			</div>
			<div className="flex flex-row flex-wrap">
				<div className="w-full md:w-1/2 p-16 min-h-420 h-420">
					<Bar
						data={{
							labels: widget.mainChart[currentRange].labels,
							datasets: widget.mainChart[currentRange].datasets.map((obj, index) => {
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
						options={widget.mainChart.options}
					/>
				</div>
				<div className="flex w-full md:w-1/2 flex-wrap p-8">
					{Object.entries(widget.supporting).map(([key, item]) => {
						return (
							<div key={key} className="w-full sm:w-1/2 p-12">
								<Typography className="text-12 font-semibold whitespace-nowrap" color="textSecondary">
									{item.label}
								</Typography>
								<Typography className="text-32 font-semibold tracking-tighter">{item.count[currentRange]}</Typography>
								<div className="h-64 w-full">
									<Line
										data={{
											labels: item.chart[currentRange].labels,
											datasets: item.chart[currentRange].datasets.map((obj, index) => {
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
										options={item.chart.options}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Paper>
	);
}

export default memo(Widget5);
