import MailList from './MailList';
import MailsToolbar from './MailsToolbar';

function Mails() {
  return (
    <div className="flex flex-col w-full">
      <MailsToolbar />
      <MailList />
    </div>
  );
}

export default Mails;
