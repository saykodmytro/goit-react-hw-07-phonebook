import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts.selector';
import { deleteContact, fetchContacts } from 'redux/operation';

import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleDelete = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <p className={css.descrList}>{name}</p>
            <p className={css.descrList}>{phone}</p>
            <button
              type="button"
              className={css.btnDel}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
