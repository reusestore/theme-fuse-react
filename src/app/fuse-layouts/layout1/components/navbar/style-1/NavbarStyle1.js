import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import NavbarStyle1Content from './NavbarStyle1Content';

const navbarWidth = 280;

const StyledNavBar = styled('div')(({ theme }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,
  '&.closed': {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '&.left': {
      marginLeft: `-${navbarWidth}px`,
    },
    '&.right': {
      marginRight: `-${navbarWidth}px`,
    },
  },
  '&.opened': {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const StyledNavBarMobile = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
  },
}));

function NavbarStyle1(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);

  return (
    <>
      <Hidden lgDown>
        <StyledNavBar
          className={clsx(
            config.navbar.position,
            navbar.open ? 'opened' : 'closed',
            'flex-col flex-auto sticky top-0 overflow-hidden h-screen flex-shrink-0 z-20 shadow-5'
          )}
        >
          <NavbarStyle1Content />
        </StyledNavBar>
      </Hidden>

      <Hidden lgUp>
        <StyledNavBarMobile
          classes={{
            paper: 'flex-col flex-auto h-full',
          }}
          anchor={config.navbar.position}
          variant="temporary"
          open={navbar.mobileOpen}
          onClose={() => dispatch(navbarCloseMobile())}
          onOpen={() => {}}
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <NavbarStyle1Content />
        </StyledNavBarMobile>
      </Hidden>
    </>
  );
}

export default NavbarStyle1;
