import Hidden from '@mui/material/Hidden';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import NavbarStyle3Content from './NavbarStyle3Content';

const navbarWidth = 120;
const navbarWidthDense = 64;
const panelWidth = 280;

const Root = styled('div')(({ theme, dense }) => ({
  '& #fuse-navbar-side-panel': {
    width: dense ? navbarWidthDense : navbarWidth,
    minWidth: dense ? navbarWidthDense : navbarWidth,
    maxWidth: dense ? navbarWidthDense : navbarWidth,
  },
  '& #fuse-navbar-panel': {
    maxWidth: '100%',
    width: panelWidth,
    [theme.breakpoints.up('lg')]: {
      minWidth: panelWidth,
      maxWidth: 'initial',
    },
  },
}));

const StyledNavBar = styled('div')(({ theme, dense, opened, folded, position }) => ({
  minWidth: navbarWidth,
  width: navbarWidth,
  maxWidth: navbarWidth,

  ...(dense && {
    minWidth: navbarWidthDense,
    width: navbarWidthDense,
    maxWidth: navbarWidthDense,

    ...(!opened && {
      ...(position === 'left' && {
        marginLeft: -navbarWidthDense,
      }),

      ...(position === 'right' && {
        marginRight: -navbarWidthDense,
      }),
    }),
  }),

  ...(!folded && {
    minWidth: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,
    width: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,
    maxWidth: dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth,

    '& #fuse-navbar-panel': {
      opacity: '1!important',
      pointerEvents: 'initial!important',
    },

    ...(!opened && {
      ...(position === 'left' && {
        marginLeft: -(dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
      }),

      ...(position === 'right' && {
        marginRight: -(dense ? navbarWidthDense + panelWidth : navbarWidth + panelWidth),
      }),
    }),
  }),

  ...(!opened && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(position === 'left' && {
      marginLeft: -navbarWidth,
    }),

    ...(position === 'right' && {
      marginRight: -navbarWidth,
    }),
  }),

  ...(opened && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledNavBarMobile = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    '& #fuse-navbar-side-panel': {
      minWidth: 'auto',
      wdith: 'auto',
    },
    '& #fuse-navbar-panel': {
      opacity: '1!important',
      pointerEvents: 'initial!important',
    },
  },
}));

function NavbarStyle3(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const { folded } = config.navbar;

  return (
    <Root dense={props.dense}>
      <Hidden lgDown>
        <StyledNavBar
          opened={navbar.open}
          dense={props.dense}
          folded={folded}
          className={clsx(
            config.navbar.position,
            navbar.open ? 'opened' : 'closed',
            props.dense && 'dense',
            !folded && 'folded-disabled',
            'flex-col flex-auto sticky top-0 h-screen flex-shrink-0 z-20 shadow-5'
          )}
        >
          <NavbarStyle3Content dense={props.dense} folded={folded} />
        </StyledNavBar>
      </Hidden>
      <Hidden lgUp>
        <StyledNavBarMobile
          classes={{
            paper: 'flex-col flex-auto h-screen max-w-full w-auto overflow-hidden',
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
          <NavbarStyle3Content dense={props.dense} folded={folded} />
        </StyledNavBarMobile>
      </Hidden>
    </Root>
  );
}

export default NavbarStyle3;
