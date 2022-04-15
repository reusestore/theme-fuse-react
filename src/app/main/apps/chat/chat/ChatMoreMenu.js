import { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ChatAppContext } from '../ChatApp';

const MainSidebarMoreMenu = (props) => {
  const { setContactSidebarOpen } = useContext(ChatAppContext);

  const { className } = props;

  const [moreMenuEl, setMoreMenuEl] = useState(null);

  function handleMoreMenuClick(event) {
    setMoreMenuEl(event.currentTarget);
  }

  function handleMoreMenuClose(event) {
    setMoreMenuEl(null);
  }
  return (
    <div className={className}>
      <IconButton
        aria-owns={moreMenuEl ? 'main-more-menu' : null}
        aria-haspopup="true"
        onClick={handleMoreMenuClick}
        size="large"
      >
        <Icon>more_vert</Icon>
      </IconButton>
      <Menu
        id="chats-more-menu"
        anchorEl={moreMenuEl}
        open={Boolean(moreMenuEl)}
        onClose={handleMoreMenuClose}
      >
        <MenuItem
          onClick={() => {
            setContactSidebarOpen(true);
            handleMoreMenuClose();
          }}
        >
          Contact info
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MainSidebarMoreMenu;
