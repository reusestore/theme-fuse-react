import FuseShortcuts from '@fuse/core/FuseShortcuts';
import FuseSidePanel from '@fuse/core/FuseSidePanel';
import React from 'react';

function LeftSideLayout3()
{
    return (
        <React.Fragment>
            <FuseSidePanel>
                <FuseShortcuts className="py-16 px-8" variant="vertical"/>
            </FuseSidePanel>
        </React.Fragment>
    );
}

export default LeftSideLayout3;
