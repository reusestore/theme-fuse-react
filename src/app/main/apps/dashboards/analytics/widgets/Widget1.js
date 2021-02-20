import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';
import Divider from '@material-ui/core/Divider';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { memo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';

const useStyles = makeStyles(theme => ({
	root: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.primary.contrastText
	}
}));

function Widget1(props) {
	const classes = useStyles(props);
	const theme = useTheme();
	const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const data = _.merge({}, props.data);

	const [tabValue, setTabValue] = useState(2);
	const dataset = data.datasets[Object.keys(data.datasets)[tabValue]];

	_.setWith(data, 'options.plugins.xLabelsOnTop.fontColor', fade(theme.palette.primary.contrastText, 0.7));
	_.setWith(data, 'options.plugins.xLabelsOnTop.borderColor', fade(theme.palette.primary.contrastText, 0.6));
	_.setWith(data, 'options.scales.xAxes[0].ticks.fontColor', theme.palette.primary.contrastText);

	return (
		<ThemeProvider theme={contrastTheme}>
			<div className={clsx(classes.root)}>
				<div className="container relative p-16 sm:p-24 flex flex-row justify-between items-center">
					<FuseAnimate delay={100}>
						<div className="flex-col">
							<Typography className="h2 font-medium" color="textPrimary">
								Visitors
							</Typography>
							<Typography className="h5" color="textSecondary">
								Unique visitors by month
							</Typography>
						</div>
					</FuseAnimate>

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
									className="text-14 font-semibold min-h-40 min-w-64 mx-4 capitalize"
									disableRipple
									label={key}
								/>
							))}
						</Tabs>
					</div>
				</div>
				<div className="container relative h-200 sm:h-256 pb-16">
					<Line
						data={{
							labels: data.labels,
							datasets: dataset.map(obj => ({
								...obj,
								borderColor: theme.palette.secondary.main,
								backgroundColor: theme.palette.secondary.main,
								pointBackgroundColor: theme.palette.secondary.dark,
								pointHoverBackgroundColor: theme.palette.secondary.main,
								pointBorderColor: theme.palette.secondary.contrastText,
								pointHoverBorderColor: theme.palette.secondary.contrastText
							}))
						}}
						options={data.options}
					/>
				</div>
			</div>
		</ThemeProvider>
	);
}

export default memo(Widget1);
