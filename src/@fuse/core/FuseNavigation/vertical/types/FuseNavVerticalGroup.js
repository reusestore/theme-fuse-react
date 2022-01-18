import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled, useTheme, alpha } from '@mui/material/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItem from '@mui/material/ListItem';
import { ListItemText } from '@mui/material';
import FuseNavItem from '../../FuseNavItem';

const Root = styled(ListItem)(({ theme, itempadding, ...props }) => ({
  minminHeight: 44,
  width: '100%',
  borderRadius: '6px',
  margin: '28px 0 0 0',
  paddingRight: 16,
  paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
  paddingTop: 10,
  paddingBottom: 10,
  color: alpha(theme.palette.text.primary, 0.7),
  fontWeight: 600,
  letterSpacing: '0.025em',
}));

function FuseNavVerticalGroup(props) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const { item, nestedLevel, onItemClick } = props;

  const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

  return useMemo(
    () => (
      <>
        <Root
          component={item.url ? NavLinkAdapter : 'li'}
          itempadding={itempadding}
          className={clsx(
            'fuse-list-subheader flex items-center  py-10',
            !item.url && 'cursor-default'
          )}
          onClick={() => onItemClick && onItemClick(item)}
          to={item.url}
          end={item.end}
          role="button"
        >
          <ListItemText
            className="fuse-list-subheader-text"
            sx={{
              margin: 0,
              '& > .MuiListItemText-primary': {
                fontSize: 12,
                color: 'secondary.main',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '.05em',
                lineHeight: '20px',
              },

              '& > .MuiListItemText-secondary': {
                fontSize: 11,
                color: 'text.disabled',
                letterSpacing: '.06px',
                fontWeight: 500,
                lineHeight: '1.5',
              },
            }}
            primary={item.title}
            secondary={item.subtitle}
          />
        </Root>
        {item.children && (
          <>
            {item.children.map((_item) => (
              <FuseNavItem
                key={_item.id}
                type={`vertical-${_item.type}`}
                item={_item}
                nestedLevel={nestedLevel}
                onItemClick={onItemClick}
              />
            ))}
          </>
        )}
      </>
    ),
    [item, itempadding, nestedLevel, onItemClick]
  );
}

FuseNavVerticalGroup.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

FuseNavVerticalGroup.defaultProps = {};

const NavVerticalGroup = FuseNavVerticalGroup;

export default NavVerticalGroup;
