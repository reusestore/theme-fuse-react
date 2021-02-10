import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import { memo } from 'react';

function RightSideLayout3() {
	return (
		<>
			<ChatPanel />

			<QuickPanel />
		</>
	);
}

export default memo(RightSideLayout3);
