import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Typography from '@mui/material/Typography';
import MailCompose from './MailCompose';
import { selectFilters } from './store/filtersSlice';
import { selectFolders } from './store/foldersSlice';
import { selectLabels } from './store/labelsSlice';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 6,
  paddingLeft: 12,
  paddingRight: 12,
  marginBottom: 4,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: 'inherit',
    },
  },
  '& .list-item-icon': {
    fontSize: 16,
    width: 16,
    height: 16,
    marginRight: 16,
  },
}));

function MailboxAppSidebarContent(props) {
  const folders = useSelector(selectFolders);
  const labels = useSelector(selectLabels);
  const filters = useSelector(selectFilters);

  const { t } = useTranslation('mailboxApp');

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      className="flex-auto border-l-1"
    >
      <MailCompose />

      <div className="px-12">
        <List>
          <Typography className="px-16 py-10 uppercase text-12 font-600" color="secondary">
            {t('FOLDERS')}
          </Typography>

          {folders.length > 0 &&
            folders.map((folder) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/mailbox/${folder.handle}`}
                key={folder.id}
                activeClassName="active"
              >
                <Icon className="list-item-icon" color="action">
                  {folder.icon}
                </Icon>
                <ListItemText
                  primary={folder.translate ? t(folder.translate) : folder.title}
                  disableTypography
                />
              </StyledListItem>
            ))}
        </List>

        <List>
          <Typography className="px-16 py-10 uppercase text-12 font-600" color="secondary">
            {t('FILTERS')}
          </Typography>

          {filters.length > 0 &&
            filters.map((filter) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/mailbox/filter/${filter.slug}`}
                activeClassName="active"
                key={filter.id}
              >
                <Icon className="list-item-icon" color="action">
                  {filter.icon}
                </Icon>
                <ListItemText
                  primary={filter.translate ? t(filter.translate) : filter.title}
                  disableTypography
                />
              </StyledListItem>
            ))}
        </List>

        <List>
          <Typography className="px-16 py-10 uppercase text-12 font-600" color="secondary">
            {t('LABELS')}
          </Typography>

          {labels &&
            labels.map((label) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/mailbox/label/${label.slug}`}
                key={label.id}
              >
                <FuseSvgIcon
                  className="list-item-icon opacity-60"
                  sx={{ color: label.color }}
                  color="disabled"
                >
                  heroicons-outline:tag
                </FuseSvgIcon>
                <ListItemText primary={label.title} disableTypography />
              </StyledListItem>
            ))}
        </List>
      </div>
    </motion.div>
  );
}

export default MailboxAppSidebarContent;
