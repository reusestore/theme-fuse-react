import React from 'react';
import { useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/FuseAnimateGroup';
import { selectWidgets } from '../store/widgetsSlice';
import Widget10 from '../widgets/Widget10';
import Widget8 from '../widgets/Widget8';
import Widget9 from '../widgets/Widget9';

function BudgetSummaryTab() {
	const widgets = useSelector(selectWidgets);

	return (
		<FuseAnimateGroup
			className="flex flex-wrap"
			enter={{
				animation: 'transition.slideUpBigIn'
			}}
		>
			<div className="widget flex w-full sm:w-1/2 p-12">
				<Widget8 widget={widgets.widget8} />
			</div>
			<div className="widget flex w-full sm:w-1/2 p-12">
				<Widget9 widget={widgets.widget9} />
			</div>
			<div className="widget flex w-full p-12">
				<Widget10 widget={widgets.widget10} />
			</div>
		</FuseAnimateGroup>
	);
}

export default BudgetSummaryTab;
