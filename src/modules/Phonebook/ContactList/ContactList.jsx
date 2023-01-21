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
