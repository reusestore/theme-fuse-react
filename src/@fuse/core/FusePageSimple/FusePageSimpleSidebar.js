import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useState } from 'react';
import FusePageSimpleSidebarContent from './FusePageSimpleSidebarContent';

const FusePageSimpleSidebar = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(props.open);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleSidebar: handleToggleDrawer,
  }));

  const handleToggleDrawer = (val) => {
    if (val !== undefined) {
      setIsOpen(val);
      setIsMobileOpen(val);
    } else {
      setIsOpen(!isOpen);
      setIsMobileOpen(!isMobileOpen);
    }
  };

  return (
    <>
      <Hidden lgUp={props.variant === 'permanent'}>
        <SwipeableDrawer
          variant="temporary"
          anchor={props.position}
          open={isMobileOpen}
          onOpen={(ev) => {}}
          onClose={(ev) => handleToggleDrawer()}
          disableSwipeToOpen
          classes={{
            root: clsx('FusePageSimple-sidebarWrapper', props.variant),
            paper: clsx(
              'FusePageSimple-sidebar',
              props.variant,
              props.position === 'left'
                ? 'FusePageSimple-leftSidebar'
                : 'FusePageSimple-rightSidebar'
            ),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: 'FusePageSimple-backdrop',
            },
          }}
          style={{ position: 'absolute' }}
        >
          <FusePageSimpleSidebarContent {...props} />
        </SwipeableDrawer>
      </Hidden>
      {props.variant === 'permanent' && (
        <Hidden lgDown>
          <Drawer
            variant="permanent"
            className={clsx(
              'FusePageSimple-sidebarWrapper',
              props.variant,
              isOpen ? 'opened' : 'closed',
              props.position === 'left'
                ? 'FusePageSimple-leftSidebar'
                : 'FusePageSimple-rightSidebar'
            )}
            open={isOpen}
            classes={{
              paper: clsx('FusePageSimple-sidebar', props.variant),
            }}
          >
            <FusePageSimpleSidebarContent {...props} />
          </Drawer>
        </Hidden>
      )}
    </>
  );
});

FusePageSimpleSidebar.defaultProps = {
  open: true,
};

export default FusePageSimpleSidebar;
