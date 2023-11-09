import { useState } from 'react';
import { Oval } from 'react-loader-spinner';
import css from '../ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactOp } from 'redux/contacts/operations';
import Modal from './Modal/Modal';

const ContactItem = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [isLoadingEl, setIsLoadingEl] = useState(false);

  const handleDeleteContact = contactId => {
    setIsLoadingEl(true);
    dispatch(deleteContactOp(contactId));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li key={contact.id} className={`list-group-item ${css.contactItem}`}>
        <p style={{ margin: '0' }}>
          {contact.name}: {contact.number}
        </p>

        <div className={css.btnWrapper}>
          <button
            type="button"
            className={`${css.contactBtn} btn btn-light`}
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
            </svg>
          </button>

          {isLoadingEl ? (
            <Oval
              width={30}
              height={30}
              wrapperStyle={{ marginRight: '22px', marginLeft: '20px' }}
            />
          ) : (
            <button
              type="button"
              className={`btn btn-secondary ${css.contactBtn}`}
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          )}
        </div>
      </li>

      {showModal && <Modal toggle={toggleModal} contactId={contact.id} />}
    </>
  );
};

export default ContactItem;
