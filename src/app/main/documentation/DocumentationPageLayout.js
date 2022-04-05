import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DocumentationNavigation from './DocumentationNavigation';
import DocumentationPageBreadcrumb from './DocumentationPageBreadcrumb';
import FusePageCarded from '../../../@fuse/core/FusePageCarded';
import useThemeMediaQuery from '../../../@fuse/hooks/useThemeMediaQuery';

const Root = styled(FusePageCarded)(({ theme }) => ({
  height: '100%',
  '& .FusePageSimple-header': {
    minHeight: 64,
    height: 64,
  },
  '& .FusePageSimple-wrapper': {
    minHeight: 0,
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 16,
    [theme.breakpoints.up('md')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-sidebar': {
    width: 288,
    paddingTop: 8,
  },
  '& .description': {
    fontSize: 20,
    marginBottom: 40,
  },
}));

function DocumentationPageLayout(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
  }, [isMobile]);
  return (
    <Root
      header={
        <div className="flex items-center justify-center py-12 px-4 md:px-12 h-full w-full">
          <IconButton
            onClick={(ev) => setLeftSidebarOpen(!leftSidebarOpen)}
            aria-label="toggle left sidebar"
            size="large"
          >
            <Icon>menu</Icon>
          </IconButton>
          <div className="flex flex-1 items-center sm:justify-center px-8 lg:px-12">
            <Link
              color="inherit"
              to="/documentation"
              className="text-14 md:text-18 font-medium flex items-center"
              role="button"
            >
              <Icon className="mr-8">import_contacts</Icon> <span>Fuse React - Documentation</span>
            </Link>
          </div>
        </div>
      }
      content={
        <div className="p-24 max-w-2xl min-h-full flex flex-auto flex-col">
          <DocumentationPageBreadcrumb />
          <div className="flex flex-col flex-1 relative py-32">
            <FuseSuspense>
              <Outlet />
            </FuseSuspense>
          </div>
        </div>
      }
      leftSidebarContent={
        <div className="px-16 py-24">
          <FuseNavigation
            className={clsx('navigation')}
            navigation={DocumentationNavigation.children}
          />
        </div>
      }
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      scroll="content"
    />
  );
}

export default DocumentationPageLayout;
