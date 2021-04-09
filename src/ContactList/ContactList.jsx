import PropTypes from 'prop-types';
import Contact from '../Contact';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <h2>Contacts</h2>

      <ul className={s.ul}>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

export default ContactList;
