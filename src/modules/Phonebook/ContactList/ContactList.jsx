import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleted }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            nameId={id}
            key={id}
            name={name}
            number={number}
            deleting={deleted}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleted: PropTypes.func.isRequired,
};
