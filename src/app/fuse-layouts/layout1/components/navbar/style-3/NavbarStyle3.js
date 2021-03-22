import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navbarCloseMobile } from 'app/store/fuse/navbarSlice';
import NavbarStyle3Content from './NavbarStyle3Content';

const navbarWidth = 128;

const useStyles = makeStyles(theme => ({
	navbar: {
		minWidth: navbarWidth,
		width: navbarWidth,
		maxWidth: navbarWidth,
		'&.closed': {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.leavingScreen
			}),
			'&.left': {
				marginLeft: -navbarWidth
			},
			'&.right': {
				marginRight: -navbarWidth
			}
		},
		'&.opened': {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen
			})
		}
	},
	navbarMobile: {}
}));

function NavbarStyle3(props) {
	const dispatch = useDispatch();
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const navbar = useSelector(({ fuse }) => fuse.navbar);
	const classes = useStyles({ ...props, navbarPosition: config.navbar.position, open: navbar.open });

	return (
		<>
			<Hidden mdDown>
				<div
					className={clsx(
						classes.navbar,
						config.navbar.position,
						navbar.open ? 'opened' : 'closed',
						'flex-col flex-auto sticky top-0  h-screen flex-shrink-0 z-20 shadow-5'
					)}
				>
					<NavbarStyle3Content />
				</div>
			</Hidden>

			<Hidden lgUp>
				<SwipeableDrawer
					classes={{
						paper: clsx(classes.navbarMobile, 'flex-col flex-auto h-full')
					}}
					anchor={config.navbar.position}
					variant="temporary"
					open={navbar.mobileOpen}
					onClose={() => dispatch(navbarCloseMobile())}
					onOpen={() => {}}
					disableSwipeToOpen
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<NavbarStyle3Content />
				</SwipeableDrawer>
			</Hidden>
		</>
	);
}

export default NavbarStyle3;
