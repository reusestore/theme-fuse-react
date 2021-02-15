import React from 'react';
import { useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/FuseAnimateGroup';
import { selectWidgets } from './store/widgetsSlice';
import WidgetNow from './widgets/WidgetNow';
import WidgetWeather from './widgets/WidgetWeather';

function ProjectDashboardAppSidebar() {
	const widgets = useSelector(selectWidgets);

	return (
		<FuseAnimateGroup
			className="w-full"
			enter={{
				animation: 'transition.slideUpBigIn'
			}}
		>
			<div className="widget w-full p-12">
				<WidgetNow />
			</div>
			<div className="widget w-full p-12">
				<WidgetWeather widget={widgets.weatherWidget} />
			</div>
		</FuseAnimateGroup>
	);
}

export default ProjectDashboardAppSidebar;
