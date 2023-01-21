import s from './contactlistitem.module.css';

export const ContactListItem = ({ nameId, name, number, deleting }) => {
  return (
    <li className={s.items}>
      <span>Name: {name}</span>
      <span>Phone: {number}</span>
      <button
        className={s.button}
        onClick={() => deleting(nameId)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
