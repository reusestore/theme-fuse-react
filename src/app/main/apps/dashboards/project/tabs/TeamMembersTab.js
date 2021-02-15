import React from 'react';
import { useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/FuseAnimateGroup';
import { selectWidgets } from '../store/widgetsSlice';
import Widget11 from '../widgets/Widget11';

function TeamMembersTab() {
	const widgets = useSelector(selectWidgets);

	return (
		<FuseAnimateGroup
			className="flex flex-wrap"
			enter={{
				animation: 'transition.slideUpBigIn'
			}}
		>
			<div className="widget flex w-full p-12">
				<Widget11 widget={widgets.widget11} />
			</div>
		</FuseAnimateGroup>
	);
}

export default TeamMembersTab;
