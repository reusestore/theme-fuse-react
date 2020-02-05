import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import React from 'react';

function RightSideLayout3()
{
    return (
        <React.Fragment>

            <ChatPanel/>

            <QuickPanel/>
        </React.Fragment>
    );
}

export default RightSideLayout3;
