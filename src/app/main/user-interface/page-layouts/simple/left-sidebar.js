import DemoContent from '@fuse/core/DemoContent';
import { styled, useTheme } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function SimpleLeftSidebarSample() {
  const [leftSidebarOpen, setSidebarOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center p-24 px-12">
            <IconButton
              onClick={(ev) => {
                setSidebarOpen(true);
              }}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
            <div className="flex-1 lg:px-12">
              <h4>Header</h4>
            </div>
          </div>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>Sidebar Content</h4>
          <br />
          <DemoSidebarContent />
        </div>
      }
      leftSidebarOpen={isMobile ? leftSidebarOpen : true}
      leftSidebarOnClose={() => {
        setSidebarOpen(false);
      }}
      sidebarInner
      scroll="content"
    />
  );
}

export default SimpleLeftSidebarSample;
