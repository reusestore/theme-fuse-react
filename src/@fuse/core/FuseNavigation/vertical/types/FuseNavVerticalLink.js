import FuseUtils from '@fuse/utils';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FuseNavBadge from '../../FuseNavBadge';

const useStyles = makeStyles(theme => ({
	item: props => ({
		height: 40,
		width: '100%',
		borderRadius: '6px',
		margin: '0 0 4px 0',
		paddingRight: 12,
		paddingLeft: props.itemPadding > 80 ? 80 : props.itemPadding,
		'&.active': {
			backgroundColor: `${theme.palette.secondary.main}!important`,
			color: `${theme.palette.secondary.contrastText}!important`,
			pointerEvents: 'none',
			transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
			'& .list-item-text-primary': {
				color: 'inherit'
			},
			'& .list-item-icon': {
				color: 'inherit'
			}
		},
		'& .list-item-icon': {
			marginRight: 12
		},
		'& .list-item-text': {},
		color: theme.palette.text.primary,
		textDecoration: 'none!important'
	})
}));

function FuseNavVerticalLink(props) {
	const dispatch = useDispatch();
	const userRole = useSelector(({ auth }) => auth.user.role);
	const { item, nestedLevel, onItemClick } = props;
	const classes = useStyles({
		itemPadding: nestedLevel > 0 ? 28 + nestedLevel * 16 : 12
	});

	const hasPermission = useMemo(() => FuseUtils.hasPermission(item.auth, userRole), [item.auth, userRole]);

	return useMemo(
		() =>
			!hasPermission ? null : (
				<ListItem
					button
					component="a"
					href={item.url}
					target={item.target ? item.target : '_blank'}
					className={clsx(classes.item, 'list-item')}
					onClick={() => onItemClick && onItemClick(item)}
					role="button"
				>
					{item.icon && (
						<Icon className="list-item-icon text-16 flex-shrink-0" color="action">
							{item.icon}
						</Icon>
					)}

					<ListItemText
						className="list-item-text"
						primary={item.title}
						classes={{ primary: 'text-13 list-item-text-primary' }}
					/>

					{item.badge && <FuseNavBadge badge={item.badge} />}
				</ListItem>
			),
		[classes.item, hasPermission, item, onItemClick]
	);
}

FuseNavVerticalLink.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		icon: PropTypes.string,
		url: PropTypes.string,
		target: PropTypes.string
	})
};
FuseNavVerticalLink.defaultProps = {};

const NavVerticalLink = FuseNavVerticalLink;

export default NavVerticalLink;
