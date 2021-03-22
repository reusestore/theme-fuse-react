import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FuseNavBadge from '../../FuseNavBadge';

const useStyles = makeStyles(theme => ({
	item: props => ({
		height: 100,
		width: 100,
		borderRadius: 12,
		margin: '0 0 4px 0',
		color: fade(theme.palette.text.primary, 0.7),
		cursor: 'pointer',
		textDecoration: 'none!important',
		'&.type-divider': {
			padding: 0,
			height: 2,
			margin: '12px 0',
			backgroundColor:
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, .05)!important' : 'rgba(255, 255, 255, .1)!important',
			pointerEvents: 'none'
		},
		'&:hover': {
			color: theme.palette.text.primary
		},
		'&.active': {
			color: theme.palette.text.primary,
			backgroundColor:
				theme.palette.type === 'light' ? 'rgba(0, 0, 0, .05)!important' : 'rgba(255, 255, 255, .1)!important',
			// pointerEvents: 'none',
			transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
			'& .list-item-text-primary': {
				color: 'inherit'
			},
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			color: 'inherit'
		},
		'& .list-item-text': {}
	})
}));

function FuseNavVerticalTab(props) {
	const userRole = useSelector(({ auth }) => auth.user.role);
	const dispatch = useDispatch();
	const location = useLocation();

	const { item, onItemClick, firstLevel } = props;
	const classes = useStyles(props);

	const hasPermission = useMemo(() => FuseUtils.hasPermission(item.auth, userRole), [item.auth, userRole]);

	return useMemo(
		() =>
			!hasPermission ? null : (
				<>
					<ListItem
						button
						component={item.url && NavLinkAdapter}
						to={item.url}
						className={clsx(
							classes.item,
							`type-${item.type}`,
							'list-item flex flex-col items-center justify-center p-12'
						)}
						onClick={() => onItemClick && onItemClick(item)}
						exact={item.exact}
					>
						{item.icon ? (
							<div className="flex items-center justify-center w-40 h-40 mb-8">
								<Icon className="list-item-icon text-32" color="action">
									{item.icon}
								</Icon>
							</div>
						) : (
							item.title && (
								<div className="flex items-center justify-center w-40 h-40 mb-8 font-bold text-20">
									<span>{item.title[0]}</span>
								</div>
							)
						)}

						<ListItemText
							className="list-item-text flex-grow-0 w-full m-0"
							primary={item.title}
							classes={{ primary: 'text-12 font-medium list-item-text-primary truncate text-center' }}
						/>

						{item.badge && <FuseNavBadge badge={item.badge} className="mt-4" />}
					</ListItem>
					{!firstLevel &&
						item.children &&
						item.children.map(_item => (
							<NavVerticalTab
								key={_item.id}
								type={`vertical-${_item.type}`}
								item={_item}
								nestedLevel={0}
								onItemClick={onItemClick}
							/>
						))}
				</>
			),
		[classes.item, firstLevel, hasPermission, item, onItemClick]
	);
}

FuseNavVerticalTab.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		icon: PropTypes.string,
		url: PropTypes.string
	})
};

FuseNavVerticalTab.defaultProps = {};

const NavVerticalTab = FuseNavVerticalTab;

export default NavVerticalTab;
