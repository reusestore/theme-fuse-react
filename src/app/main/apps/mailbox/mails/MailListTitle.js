import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { selectMailsTitle } from 'app/main/apps/mailbox/store/mailsSlice';
import { useSelector } from 'react-redux';

function MailListTitle() {
  const routeParams = useParams();
  const title = useSelector(selectMailsTitle(routeParams));

  return <Typography className="font-semibold uppercase mx-8">{title}</Typography>;
}

export default MailListTitle;
