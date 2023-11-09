import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={`list-group list-group-flush ${css.contactList}`}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contactEl => (
          <ContactItem key={contactEl.id} contact={contactEl} />
        ))
      ) : contacts.length > 0 ? (
        <h4>No contacts found</h4>
      ) : (
        <h3>No contacts added yet</h3>
      )}
    </ul>
  );
};

export default ContactList;
