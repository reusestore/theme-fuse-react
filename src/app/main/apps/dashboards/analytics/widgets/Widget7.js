import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { memo, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

function Widget7(props) {
	const theme = useTheme();
	const [dataset, setDataset] = useState('Today');
	const data = _.merge({}, props.data);

	return (
		<Card className="w-full rounded-20 shadow p-20">
			<div className="pb-24">
				<Typography className="h3 font-medium">Sessions by device</Typography>
			</div>

			<div className="h-224 relative">
				<Doughnut
					data={{
						labels: data.labels,
						datasets: data.datasets[dataset].map(obj => ({
							...obj,
							borderColor: theme.palette.divider,
							backgroundColor: [
								theme.palette.primary.dark,
								theme.palette.primary.main,
								theme.palette.primary.light
							],
							hoverBackgroundColor: [
								theme.palette.secondary.dark,
								theme.palette.secondary.main,
								theme.palette.secondary.light
							]
						}))
					}}
					options={data.options}
				/>
			</div>

			<div className="my-24 flex flex-row items-center justify-center">
				{data.labels.map((label, index) => (
					<div key={label} className="px-16 flex flex-col items-center">
						<Typography className="h4 font-semibold" color="textSecondary">
							{label}
						</Typography>
						<Typography className="text-18 font-semibold py-8">
							{data.datasets[dataset][0].data[index]}%
						</Typography>

						<div className="flex flex-row items-start justify-center">
							{data.datasets[dataset][0].change[index] < 0 && (
								<Icon className="text-18 text-red">arrow_downward</Icon>
							)}

							{data.datasets[dataset][0].change[index] > 0 && (
								<Icon className="text-18 text-green">arrow_upward</Icon>
							)}
							<Typography className="h5 px-4 font-semibold" color="textSecondary">
								{data.datasets[dataset][0].change[index]}%
							</Typography>
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-row items-center justify-between">
				<div>
					<FormControl className="" variant="filled">
						<Select
							classes={{ select: 'py-8' }}
							value={dataset}
							onChange={ev => setDataset(ev.target.value)}
						>
							{Object.keys(data.datasets).map(key => (
								<MenuItem key={key} value={key}>
									{key}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				<Button size="small">Overview</Button>
			</div>
		</Card>
	);
}

export default memo(Widget7);
