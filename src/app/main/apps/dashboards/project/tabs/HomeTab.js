import React from 'react';
import { useSelector } from 'react-redux';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup/FuseAnimateGroup';
import { selectWidgets } from '../store/widgetsSlice';
import Widget1 from '../widgets/Widget1';
import Widget2 from '../widgets/Widget2';
import Widget3 from '../widgets/Widget3';
import Widget4 from '../widgets/Widget4';
import Widget5 from '../widgets/Widget5';
import Widget6 from '../widgets/Widget6';
import Widget7 from '../widgets/Widget7';

function HomeTab() {
	const widgets = useSelector(selectWidgets);

	return (
		<FuseAnimateGroup
			className="flex flex-wrap"
			enter={{
				animation: 'transition.slideUpBigIn'
			}}
		>
			<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
				<Widget1 widget={widgets.widget1} />
			</div>
			<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
				<Widget2 widget={widgets.widget2} />
			</div>
			<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
				<Widget3 widget={widgets.widget3} />
			</div>
			<div className="widget flex w-full sm:w-1/2 md:w-1/4 p-12">
				<Widget4 widget={widgets.widget4} />
			</div>
			<div className="widget flex w-full p-12">
				<Widget5 widget={widgets.widget5} />
			</div>
			<div className="widget flex w-full sm:w-1/2 p-12">
				<Widget6 widget={widgets.widget6} />
			</div>
			<div className="widget flex w-full sm:w-1/2 p-12">
				<Widget7 widget={widgets.widget7} />
			</div>
		</FuseAnimateGroup>
	);
}

export default HomeTab;
