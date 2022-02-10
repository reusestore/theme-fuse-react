import _ from '@lodash';
import formatISO from 'date-fns/formatISO';

const ContactModel = (data) =>
  _.defaults(data || {}, {
    title: '',
    allDay: true,
    start: formatISO(new Date()),
    end: formatISO(new Date()),
    extendedProps: { desc: '', label: '' },
  });

export default ContactModel;
