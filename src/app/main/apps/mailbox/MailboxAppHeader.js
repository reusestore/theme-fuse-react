import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectSearchText, setMailsSearchText } from './store/mailsSlice';

function MailboxAppHeader(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText);
  const mainTheme = useSelector(selectMainTheme);
  const { t } = useTranslation('mailboxApp');

  return (
    <ThemeProvider theme={mainTheme}>
      <div className="flex flex-1">
        <Paper className="flex items-center w-full h-48 sm:h-56 p-16 ltr:pl-4 lg:ltr:pl-16 rtl:pr-4 lg:rtl:pr-16 shadow">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <FuseSvgIcon>heroicons-outline:view-list</FuseSvgIcon>
            </IconButton>
          </Hidden>

          <FuseSvgIcon color="action">heroicons-outline:search</FuseSvgIcon>

          <Input
            placeholder={t('SEARCH_PLACEHOLDER')}
            className="px-16"
            disableUnderline
            fullWidth
            value={searchText}
            inputProps={{
              'aria-label': 'Search',
            }}
            onChange={(ev) => dispatch(setMailsSearchText(ev))}
          />
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default MailboxAppHeader;
