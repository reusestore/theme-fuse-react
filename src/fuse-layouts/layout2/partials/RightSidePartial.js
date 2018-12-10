import React from 'react';
import ChatPanel from 'main/chatPanel/ChatPanel';
import QuickPanel from 'main/quickPanel/QuickPanel';

const RightSidePartial = () => {
    return (
        <React.Fragment>

            <ChatPanel/>

            <QuickPanel/>
        </React.Fragment>
    );
};


export default RightSidePartial;
