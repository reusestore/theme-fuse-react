import { useDispatch, useSelector } from 'react-redux';
import FuseShortcuts from '../../../@fuse/core/FuseShortcuts/FuseShortcuts';
import { selectFlatNavigation } from '../../store/fuse/navigationSlice';
import { updateUserShortcuts } from '../../auth/store/userSlice';

function NavigationShortcuts(props) {
  const { variant, className } = props;
  const dispatch = useDispatch();
  const shortcuts = useSelector(({ auth }) => auth.user.data.shortcuts) || [];
  const navigation = useSelector(selectFlatNavigation);

  function handleShortcutsChange(newShortcuts) {
    dispatch(updateUserShortcuts(newShortcuts));
  }

  return (
    <FuseShortcuts
      className={className}
      variant={variant}
      navigation={navigation}
      shortcuts={shortcuts}
      onChange={handleShortcutsChange}
    />
  );
}

export default NavigationShortcuts;
